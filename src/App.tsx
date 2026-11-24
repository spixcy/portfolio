import { useState, useEffect, useCallback, useMemo } from 'react';
import { portfolioData } from './data/portfolio';
import type { ProjectCategory } from './types/portfolio';
import { MetallicCasing } from './components/frame/MetallicCasing';
import { SideControls } from './components/frame/SideControls';
import { CartridgeDeck } from './components/frame/CartridgeDeck';
import { SystemFooter } from './components/frame/SystemFooter';
import { CRTDisplay } from './components/crt/CRTDisplay';
import { SystemStatusBar } from './components/crt/SystemStatusBar';
import { HomeView } from './components/views/HomeView';
import { WorkLaneView } from './components/views/WorkLaneView';
import { ProjectDetailView } from './components/views/ProjectDetailView';
import { AboutView } from './components/views/AboutView';
import { ContactView } from './components/views/ContactView';
import { PrinterPaperModal } from './components/printer/PrinterPaperModal';
import { soundEffects } from './utils/soundEffects';

export function App() {
  // Navigation & View State
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('interface');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('kinetic-vfx');

  // Hardware State
  const [isPoweredOn, setIsPoweredOn] = useState<boolean>(true);
  const [powerTransitioning, setPowerTransitioning] = useState<boolean>(false);
  const [isPrinterOpen, setIsPrinterOpen] = useState<boolean>(false);

  // Sync hash routing on mount and hash changes (Browser Back/Forward support)
  const parseHash = useCallback(() => {
    const hash = window.location.hash.replace('#', '') || 'home';
    if (hash === 'home' || hash === '') {
      setCurrentRoute('home');
    } else if (hash.startsWith('work/')) {
      const cat = hash.split('/')[1] as ProjectCategory;
      if (['interface', 'systems', 'worlds', 'games'].includes(cat)) {
        setActiveCategory(cat);
        setCurrentRoute(`work/${cat}`);
      }
    } else if (hash.startsWith('project/')) {
      const pId = hash.split('/')[1];
      setSelectedProjectId(pId);
      setCurrentRoute(`project/${pId}`);
    } else if (hash === 'about') {
      setCurrentRoute('about');
    } else if (hash === 'contact') {
      setCurrentRoute('contact');
    }
  }, []);

  useEffect(() => {
    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, [parseHash]);

  // Navigate helper with history push
  const navigateTo = useCallback((route: string) => {
    window.location.hash = `#${route}`;
  }, []);

  // Filter projects by active category
  const laneProjects = useMemo(() => {
    return portfolioData.projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Find active project for case study
  const currentProject = useMemo(() => {
    return (
      portfolioData.projects.find((p) => p.id === selectedProjectId) ||
      portfolioData.projects[0]
    );
  }, [selectedProjectId]);

  // Featured projects for Homepage
  const featuredProjects = useMemo(() => {
    return portfolioData.projects
      .filter((p) => p.featured)
      .sort((a, b) => (a.featuredOrder || 99) - (b.featuredOrder || 99));
  }, []);

  // Category change handler
  const handleSelectCategory = useCallback(
    (cat: ProjectCategory) => {
      setActiveCategory(cat);
      const catProjects = portfolioData.projects.filter((p) => p.category === cat);
      if (catProjects.length > 0) {
        setSelectedProjectId(catProjects[0].id);
      }
      navigateTo(`work/${cat}`);
    },
    [navigateTo]
  );

  // Toggle Power Switch
  const handleTogglePower = () => {
    setPowerTransitioning(true);
    setIsPoweredOn((prev) => !prev);
    setTimeout(() => {
      setPowerTransitioning(false);
    }, 450);
  };

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if inside an input or if powered off
      if (!isPoweredOn || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      // Escape to Home
      if (e.key === 'Escape') {
        soundEffects.playButtonClick();
        if (isPrinterOpen) {
          setIsPrinterOpen(false);
        } else {
          navigateTo('home');
        }
        return;
      }

      // Number keys 1-4 for cartridge selection
      if (e.key === '1') handleSelectCategory('interface');
      if (e.key === '2') handleSelectCategory('systems');
      if (e.key === '3') handleSelectCategory('worlds');
      if (e.key === '4') handleSelectCategory('games');

      // 'p' or 'P' toggles print all work modal
      if ((e.key === 'p' || e.key === 'P') && !e.ctrlKey && !e.metaKey) {
        setIsPrinterOpen((prev) => !prev);
      }

      // Arrow navigation in Work Lane
      if (currentRoute.startsWith('work/')) {
        const curIdx = laneProjects.findIndex((p) => p.id === selectedProjectId);
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          const nextIdx = (curIdx + 1) % laneProjects.length;
          setSelectedProjectId(laneProjects[nextIdx].id);
          soundEffects.playButtonClick();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          const prevIdx = (curIdx - 1 + laneProjects.length) % laneProjects.length;
          setSelectedProjectId(laneProjects[prevIdx].id);
          soundEffects.playButtonClick();
        } else if (e.key === 'Enter') {
          e.preventDefault();
          navigateTo(`project/${selectedProjectId}`);
          soundEffects.playButtonClick();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    isPoweredOn,
    currentRoute,
    laneProjects,
    selectedProjectId,
    handleSelectCategory,
    navigateTo,
    isPrinterOpen,
  ]);

  // Project navigation in detail view
  const currentProjectIndexInAll = portfolioData.projects.findIndex(
    (p) => p.id === currentProject.id
  );
  const hasPrev = currentProjectIndexInAll > 0;
  const hasNext = currentProjectIndexInAll < portfolioData.projects.length - 1;

  const handlePrevProject = () => {
    if (hasPrev) {
      const prevId = portfolioData.projects[currentProjectIndexInAll - 1].id;
      setSelectedProjectId(prevId);
      navigateTo(`project/${prevId}`);
    }
  };

  const handleNextProject = () => {
    if (hasNext) {
      const nextId = portfolioData.projects[currentProjectIndexInAll + 1].id;
      setSelectedProjectId(nextId);
      navigateTo(`project/${nextId}`);
    }
  };

  // Derive status bar text
  const statusBarPath = useMemo(() => {
    if (currentRoute === 'home') return `${portfolioData.system.name} ${portfolioData.system.version}`;
    if (currentRoute.startsWith('work/')) return `/WORK/${activeCategory.toUpperCase()}`;
    if (currentRoute.startsWith('project/')) return `/WORK/${currentProject.category.toUpperCase()}/${currentProject.id.toUpperCase()}`;
    if (currentRoute === 'about') return '/SYS/ABOUT';
    if (currentRoute === 'contact') return '/SYS/CONTACT';
    return '/SYS/ROOT';
  }, [currentRoute, activeCategory, currentProject]);

  const statusBarRight = useMemo(() => {
    if (currentRoute.startsWith('work/')) {
      const curIdx = laneProjects.findIndex((p) => p.id === selectedProjectId);
      const pos = curIdx >= 0 ? curIdx + 1 : 1;
      return `${String(pos).padStart(2, '0')}/${String(laneProjects.length).padStart(2, '0')}`;
    }
    return portfolioData.system.status;
  }, [currentRoute, laneProjects, selectedProjectId]);

  return (
    <main className="min-h-screen w-full flex items-center justify-center p-2 sm:p-5 lg:p-8 bg-[#0e0d0b]">
      {/* Outer Metallic Computer Enclosure */}
      <MetallicCasing systemName={portfolioData.system.name}>
        {/* Upper Deck: CRT Display on Left + Side Physical Controls on Right */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 lg:gap-6 items-stretch">
          {/* Main CRT Glass Monitor */}
          <CRTDisplay
            isPoweredOn={isPoweredOn}
            powerTransitioning={powerTransitioning}
          >
            {/* CRT Header Bar */}
            <SystemStatusBar
              systemCode={portfolioData.system.code}
              version={portfolioData.system.version}
              pathText={statusBarPath}
              rightStatus={statusBarRight}
            />

            {/* CRT Dynamic Screen Content */}
            {currentRoute === 'home' && (
              <HomeView
                name={portfolioData.identity.name}
                tagline={portfolioData.identity.tagline}
                featuredProjects={featuredProjects}
                onSelectProject={(pId) => {
                  setSelectedProjectId(pId);
                  navigateTo(`project/${pId}`);
                }}
                onSelectCategory={handleSelectCategory}
              />
            )}

            {currentRoute.startsWith('work/') && (
              <WorkLaneView
                category={activeCategory}
                categoryTitle={
                  portfolioData.categories.find((c) => c.id === activeCategory)?.title || 'WORK'
                }
                projects={laneProjects}
                selectedProjectId={selectedProjectId}
                onSelectProjectIndex={(idx) => {
                  setSelectedProjectId(laneProjects[idx].id);
                }}
                onOpenCaseStudy={(pId) => {
                  setSelectedProjectId(pId);
                  navigateTo(`project/${pId}`);
                }}
              />
            )}

            {currentRoute.startsWith('project/') && (
              <ProjectDetailView
                project={currentProject}
                onBackToWork={() => {
                  navigateTo(`work/${currentProject.category}`);
                }}
                onPrevProject={handlePrevProject}
                onNextProject={handleNextProject}
                hasPrev={hasPrev}
                hasNext={hasNext}
              />
            )}

            {currentRoute === 'about' && (
              <AboutView
                aboutData={portfolioData.about}
                identity={portfolioData.identity}
                onBackToWork={() => navigateTo('home')}
              />
            )}

            {currentRoute === 'contact' && (
              <ContactView
                contactData={portfolioData.contact}
                identity={portfolioData.identity}
                onExit={() => navigateTo('home')}
              />
            )}
          </CRTDisplay>

          {/* Right-Side Physical Navigation Control Panel */}
          <SideControls
            currentView={currentRoute}
            isPoweredOn={isPoweredOn}
            onNavigate={(view) => navigateTo(view)}
            onTogglePower={handleTogglePower}
          />
        </div>

        {/* Lower Mechanical Cartridge Deck */}
        <CartridgeDeck
          activeCategory={activeCategory}
          isPoweredOn={isPoweredOn}
          onSelectCategory={handleSelectCategory}
        />

        {/* System Footer & Print Slit */}
        <SystemFooter
          manufacturer={portfolioData.system.manufacturer}
          modelNumber={portfolioData.system.modelNumber}
          onOpenPrint={() => setIsPrinterOpen(true)}
          isPoweredOn={isPoweredOn}
        />
      </MetallicCasing>

      {/* PRINT ALL WORK Continuous Dot-Matrix Paper Rollout */}
      <PrinterPaperModal
        isOpen={isPrinterOpen}
        onClose={() => setIsPrinterOpen(false)}
        projects={portfolioData.projects}
        categories={portfolioData.categories}
        systemName={portfolioData.system.name}
        onSelectProject={(pId) => {
          setSelectedProjectId(pId);
          navigateTo(`project/${pId}`);
        }}
      />
    </main>
  );
}

export default App;
