import { useEffect, useState } from 'react';

const images = [
  { src: '/images/projects/bonevista/skeletal-atlas.png', alt: 'Interactive 3D skeletal atlas with a searchable list of named structures', caption: 'The skeletal atlas pairs an interactive model with a searchable structure list.' },
  { src: '/images/projects/bonevista/muscle-explorer.png', alt: '3D muscle explorer showing the combined bones and muscles layer', caption: 'Layer controls compare bone, superficial muscle, deep muscle, and combined anatomy.' },
  { src: '/images/projects/bonevista/brain-atlas.png', alt: 'Detailed 3D brain atlas with layer visibility and named structures', caption: 'A dedicated brain workspace with layer controls and structure browsing.' },
  { src: '/images/projects/bonevista/neuro-explorer.png', alt: 'Peripheral nervous system visualization with layer controls', caption: 'A view of the peripheral nervous system and its grouped pathways.' },
];

const stats = [
  ['335+', 'skeletal structures'], ['437', 'brain structures'], ['255', 'peripheral nerve structures'],
  ['556', 'muscle workspace structures'], ['26', 'isolated vertebrae'], ['6', 'physiology topics'],
];

export function BoneVistaCaseStudy() {
  const [lightbox, setLightbox] = useState<typeof images[number] | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setLightbox(null);
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [lightbox]);

  return (
    <article className="bonevista-study select-text">
      <header className="bv-hero">
        <p className="bv-kicker">3D WORKS / PROJECT 01 · LIVE</p>
        <h1>BONEVISTA</h1>
        <h2>3D anatomy, made explorable.</h2>
        <p className="bv-lede">A browser-based anatomy and biomechanics workspace for exploring human structures, understanding how systems connect, and learning through interactive visualization.</p>
        <dl className="bv-meta">
          <div><dt>DEVELOPER</dt><dd>Spixcy</dd></div><div><dt>PLATFORM</dt><dd>Web</dd></div>
          <div><dt>TYPE</dt><dd>3D learning workspace</dd></div><div><dt>STATUS</dt><dd><span className="bv-live-dot" /> Live</dd></div>
        </dl>
        <div className="bv-hero-image"><img src="/images/projects/bonevista/overview.png" alt="BoneVista dashboard with quick access to anatomy and learning modules" fetchPriority="high" /><p>One workspace connecting anatomy, visualization, and educational tools.</p></div>
        <div className="bv-actions">
          <a className="bv-primary" href="https://bonevista.vercel.app/" target="_blank" rel="noreferrer">OPEN LIVE APP ↗</a>
          <a className="bv-secondary" href="https://github.com/spixcy/BoneVista" target="_blank" rel="noreferrer">VIEW SOURCE CODE ↗</a>
        </div>
      </header>

      <section className="bv-stats" aria-label="BoneVista at a glance">
        <div className="bv-section-label"><span>AT A GLANCE</span><span>VERIFIED WORKSPACE COUNTS</span></div>
        <div className="bv-stat-grid">{stats.map(([value, label]) => <div className="bv-stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
      </section>

      <section className="bv-idea">
        <p className="bv-kicker">01 / THE IDEA</p>
        <div><h2>Anatomy is easier to understand when you can explore it.</h2><p>BoneVista treats anatomy as a connected, manipulable space rather than a set of static plates. Rotate a model, isolate a structure, change anatomical layers, or follow a guided explanation—then move between those ways of learning without leaving the workspace.</p></div>
      </section>

      <section className="bv-systems">
        <div className="bv-section-heading"><p className="bv-kicker">02 / ONE WORKSPACE, MULTIPLE SYSTEMS</p><h2>Different views. Shared curiosity.</h2><p>Each module gives a different entry point into anatomy, with an interactive 3D view and controls suited to the material.</p></div>
        {images.map((image, index) => <article className={`bv-feature bv-feature-${index % 2 ? 'reverse' : 'normal'}`} key={image.src}>
          <button className="bv-image-button" onClick={() => setLightbox(image)} aria-label={`Expand screenshot: ${image.caption}`}><img src={image.src} alt={image.alt} loading="lazy" /></button>
          <div className="bv-feature-copy"><p className="bv-kicker">MODULE 0{index + 1}</p><h3>{['Skeletal atlas','Muscle explorer','Brain anatomy','Neuro explorer'][index]}</h3><p>{[
            'Browse named skeletal structures alongside a 3D model. Search the atlas, select structures, rotate and zoom the view, isolate anatomy, and export models as GLB or OBJ.',
            'Compare bone view, superficial and deep muscle layers, or combine bones and muscles to see their spatial relationships.',
            'Explore a detailed brain atlas with named structures, browsable anatomy, and controls for changing layer visibility.',
            'Follow grouped peripheral nerve pathways and adjust visible layers in a dedicated nervous-system workspace.',
          ][index]}</p><span className="bv-image-caption">{image.caption}</span></div>
        </article>)}
      </section>

      <section className="bv-text-systems">
        <p className="bv-kicker">MORE WAYS TO EXPLORE</p>
        <div className="bv-text-grid">
          <article><span>05 / SPINE</span><h3>Vertebra by vertebra.</h3><p>Navigate individual structures across cervical, thoracic, lumbar, sacral, and coccygeal regions.</p><b>26 isolated vertebrae in the dashboard capture</b></article>
          <article><span>06 / RADIOGRAPHS</span><h3>A local X-ray workspace.</h3><p>View AP and lateral radiographs with zoom, pan, rotation, brightness, and contrast controls. Users can manually match an image to an atlas structure.</p><b>Images stay in the browser</b></article>
          <article><span>07 / BIOMECHANICS</span><h3>Make loading visible.</h3><p>An educational axial stress model lets learners experiment with loads and material properties, then see illustrative stress mapped onto an atlas bone.</p><b>Simplified 1D finite-element model</b></article>
        </div>
      </section>

      <section className="bv-learning">
        <p className="bv-kicker">03 / LEARNING THROUGH VISUALIZATION</p><h2>Move from seeing to understanding.</h2>
        <div className="bv-learning-grid">
          <article><span>01</span><h3>Anatomy study guide</h3><p>Seven guided study paths connect core concepts to workspace tools, with quick-recall cards for foundational skeletal anatomy.</p></article>
          <article><span>02</span><h3>NEET PG physiology</h3><p>Six animated topics pair narrated steps with high-yield notes and practice questions—from action potentials to cardiac conduction.</p></article>
          <article><span>03</span><h3>Bone biology</h3><p>Interactive scenes cover bone structure and cells, growth, remodelling, fracture healing, and clinical correlations.</p></article>
        </div>
      </section>

      <section className="bv-engineering">
        <p className="bv-kicker">04 / ENGINEERING THE WORKSPACE</p><h2>A client-side 3D learning environment.</h2>
        <p className="bv-engineering-intro">React and TypeScript organize the single-page application; Three.js and React Three Fiber render the anatomical scenes. Shared state keeps structure selection and layer visibility in step as people move between tools.</p>
        <div className="bv-stack-grid">
          <article><span>INTERFACE</span><p>React 19 · TypeScript · Vite · CSS Modules</p></article>
          <article><span>3D & VISUALIZATION</span><p>Three.js · React Three Fiber · Drei · Draco</p></article>
          <article><span>STATE & INTERACTION</span><p>Zustand · Framer Motion · Lucide</p></article>
          <article><span>ENGINEERING & EXPORT</span><p>jsPDF · GLTF / OBJ exporters · browser image processing</p></article>
        </div>
        <div className="bv-pipeline"><div><b>01</b><span>Choose a system</span></div><i>→</i><div><b>02</b><span>Select structures or layers</span></div><i>→</i><div><b>03</b><span>Inspect, learn, or export</span></div></div>
        <p className="bv-technical-note">The viewer uses Draco-compressed 3D assets. Structure selection and layer visibility are coordinated through shared application state; model and document exports run from the browser.</p>
      </section>

      <section className="bv-math">
        <div><p className="bv-kicker">05 / A CLOSER LOOK AT BIOMECHANICS</p><h2>A small model, made legible.</h2><p>The axial model uses a simplified one-dimensional axial-bar finite-element formulation. It assembles element stiffness matrices, solves the reduced system with Gaussian elimination, and calculates illustrative element stress for the visualization.</p><p className="bv-disclaimer">This is an educational 1D model—not full 3D or patient-specific stress analysis.</p></div>
        <div className="bv-equations"><span>ELEMENT STIFFNESS</span><code>kₑ = EA / L [ 1  −1 ; −1  1 ]</code><span>REDUCED SYSTEM</span><code>Kff · uf = Ff</code><span>ILLUSTRATIVE STRESS</span><code>σₑ = E (uⱼ − uᵢ) / L</code></div>
      </section>

      <section className="bv-responsibility">
        <p className="bv-kicker">06 / DESIGNING WITH RESPONSIBILITY</p><h2>For education, not clinical decisions.</h2>
        <div><p>BoneVista is an educational application, not a medical device. Its radiograph workspace supports local viewing and manual reference matching; it does not diagnose or automatically interpret images.</p><p>The deployed app does not generate patient-specific anatomy. An experimental reconstruction API scaffold exists in the repository, but AI reconstruction inference is not part of the live application.</p></div>
      </section>

      <section className="bv-cta">
        <p className="bv-kicker">07 / WHERE TO EXPLORE</p><h2>Open the workspace.</h2><p>Explore the anatomy tools, learning modules, and educational biomechanics in BoneVista.</p>
        <div className="bv-actions"><a className="bv-primary" href="https://bonevista.vercel.app/" target="_blank" rel="noreferrer">LAUNCH BONEVISTA ↗</a><a className="bv-secondary" href="https://github.com/spixcy/BoneVista" target="_blank" rel="noreferrer">EXPLORE SOURCE CODE ↗</a></div>
      </section>

      <footer className="bv-credits"><span>BUILT BY SPIXCY</span><p>Application code is MIT-licensed. Anatomy datasets are separately licensed and require their own attribution and share-alike terms.</p><div><a href="https://github.com/spixcy/BoneVista/blob/main/LICENSES.md" target="_blank" rel="noreferrer">LICENSES.md ↗</a><a href="https://github.com/spixcy/BoneVista/blob/main/THIRD-PARTY-NOTICES.md" target="_blank" rel="noreferrer">THIRD-PARTY-NOTICES.md ↗</a></div></footer>

      {lightbox && <div className="bv-lightbox" role="dialog" aria-modal="true" aria-label={lightbox.caption} onClick={() => setLightbox(null)}><button onClick={() => setLightbox(null)} aria-label="Close screenshot">×</button><img src={lightbox.src} alt={lightbox.alt} /><p>{lightbox.caption}</p></div>}
    </article>
  );
}
