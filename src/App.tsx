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
import { ContinuousPrinterPaper } from './components/printer/ContinuousPrinterPaper';
import { soundEffects } from './utils/soundEffects';

export function App() {
  // Navigation & View State
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('interface');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('kinetic-vfx');

  // Hardware State
  const [isPoweredOn, setIsPoweredOn] = useState<boolean>(true);
  const [powerTransitioning, setPowerTransitioning] = useState<boolean>(false);

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

  // Scroll to continuous paper feed section
  const handleScrollToPrinter = () => {
    const el = document.getElementById('print-feed-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPoweredOn || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.key === 'Escape') {
        soundEffects.playButtonClick();
        navigateTo('home');
        handleScrollToTop();
        return;
      }

      if (e.key === '1') handleSelectCategory('interface');
      if (e.key === '2') handleSelectCategory('systems');
      if (e.key === '3') handleSelectCategory('worlds');
      if (e.key === '4') handleSelectCategory('games');

      if ((e.key === 'p' || e.key === 'P') && !e.ctrlKey && !e.metaKey) {
        handleScrollToPrinter();
      }

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
    <div className="w-full min-h-screen bg-[#070605] flex flex-col items-center p-1 sm:p-2 md:p-2.5 overflow-x-hidden">
      {/* 1. SECTION 1: PHYSICAL RETRO WORKSTATION (Occupies the full viewport) */}
      <div className="w-full h-screen min-h-screen flex flex-col items-stretch justify-start">
        <MetallicCasing>
          {/* Main CRT Monitor (grid-area: screen) */}
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

          {/* Right-Side Physical Navigation Control Panel (grid-area: keys) */}
          <SideControls
            systemName={portfolioData.system.name}
            currentView={currentRoute}
            isPoweredOn={isPoweredOn}
            onNavigate={(view) => navigateTo(view)}
            onTogglePower={handleTogglePower}
          />

          {/* Lower Mechanical Cartridge Deck (grid-area: strip) */}
          <CartridgeDeck
            activeCategory={activeCategory}
            isPoweredOn={isPoweredOn}
            onSelectCategory={handleSelectCategory}
          />

          {/* System Footer Rail (grid-area: rail) */}
          <SystemFooter
            manufacturer={portfolioData.system.manufacturer}
            modelNumber={portfolioData.system.modelNumber}
            onOpenPrint={handleScrollToPrinter}
            isPoweredOn={isPoweredOn}
          />
        </MetallicCasing>
      </div>

      {/* 2. SECTION 2: CONTINUOUS TRACTOR-FEED PAPER (Scrolls down from bottom slot!) */}
      <ContinuousPrinterPaper
        projects={portfolioData.projects}
        categories={portfolioData.categories}
        systemName={portfolioData.system.name}
        onSelectProject={(pId) => {
          setSelectedProjectId(pId);
          navigateTo(`project/${pId}`);
        }}
        onScrollToTop={handleScrollToTop}
      />
    </div>
  );
}

export default App;
