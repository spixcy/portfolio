import { useEffect, useState, type CSSProperties } from 'react';

const itchEmbed = {
  src: 'https://itch.io/embed-upload/18985616?color=ffffff',
  title: 'The Autis browser build',
};

const gallery = [
  { src: '/images/the-autis/waterside.png', alt: 'Wooden dock and boats beside the lake', caption: 'A quiet lakeside, with a small dock and boats.' },
  { src: '/images/the-autis/night-field.png', alt: 'Night falls over a wooded hillside', caption: 'Fireflies and silhouettes shape the night landscape.' },
  { src: '/images/the-autis/gathering.png', alt: 'Gathering prompt over a field of flowers', caption: 'An in-world gathering prompt and held item.' },
  { src: '/images/the-autis/crafting.png', alt: 'Crafting menu with a stone axe recipe', caption: 'The crafting interface shows a stone axe recipe and its material requirements.' },
  { src: '/images/the-autis/night-sky.png', alt: 'A dark hillside beneath a bright night sky', caption: 'A distant fire breaks the silhouette of the hillside.' },
];

const backdrops = [gallery[1], gallery[4], gallery[0], { src: '/images/the-autis/title-screen.jpeg', alt: 'Sunlit valley', caption: 'The title screen' }];

const developmentImages = [
  { src: '/images/the-autis/unity-menu.png', alt: 'The Autis title screen running in the Unity editor', caption: 'Title screen running in the Unity editor.' },
  { src: '/images/the-autis/unity-terrain.png', alt: 'Unity game view with terrain wireframe visible', caption: 'Terrain and scene content viewed with editor overlays.' },
  { src: '/images/the-autis/unity-rock.png', alt: 'A selected respawn rock in the Unity scene editor', caption: 'A selected respawn rock and its scene components.' },
  { src: '/images/the-autis/unity-playtest.png', alt: 'Unity game view showing a wooded landscape', caption: 'A gameplay capture from the Unity editor.' },
  { src: '/images/the-autis/unity-errors.png', alt: 'Unity console showing compile errors and missing prefab import messages', caption: 'The captured console reports missing InventoryManager methods and a nested fire prefab. It does not show whether those issues were later resolved.' },
];

export function TheAutisCaseStudy() {
  const [playing, setPlaying] = useState(false);
  const [embedMessage, setEmbedMessage] = useState('');
  const [expandedImage, setExpandedImage] = useState<typeof gallery[number] | null>(null);
  const [backdropIndex, setBackdropIndex] = useState(0);

  useEffect(() => {
    if (!expandedImage) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setExpandedImage(null);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [expandedImage]);

  const startGame = () => {
    if (!itchEmbed.src) {
      setEmbedMessage('Setup needed: in your itch.io dashboard open The Autis → Distribute → Embed game, copy the official iframe code, and send it here. You can still play on itch.io below.');
      return;
    }
    setEmbedMessage('');
    setPlaying(true);
  };

  return (
    <article className="autis-study select-text" style={{ '--autis-backdrop': `url("${backdrops[backdropIndex].src}")` } as CSSProperties}>
      <header className="autis-hero">
        <p className="autis-kicker">GAMES / PROJECT 02 · RELEASED</p>
        <h1>THE AUTIS</h1>
        <p className="autis-lede">A calm, cozy adventure about exploring a peaceful world, gathering resources, crafting, and finding small stories along the way.</p>
        <div className="autis-scene-controls" aria-label="Choose page background scene">
          <span>SCENE {String(backdropIndex + 1).padStart(2, '0')} / {String(backdrops.length).padStart(2, '0')} · {backdrops[backdropIndex].caption}</span>
          <div>
            <button type="button" onClick={() => setBackdropIndex((backdropIndex - 1 + backdrops.length) % backdrops.length)} aria-label="Show previous background scene">← LAST</button>
            <button type="button" onClick={() => setBackdropIndex((backdropIndex + 1) % backdrops.length)} aria-label="Show next background scene">NEXT →</button>
          </div>
        </div>
        <dl className="autis-meta">
          <div><dt>DEVELOPER</dt><dd>spixcy</dd></div>
          <div><dt>ENGINE</dt><dd>Unity</dd></div>
          <div><dt>GENRE</dt><dd>Adventure / Survival</dd></div>
          <div><dt>PLATFORMS</dt><dd>HTML5 · Windows · macOS · Linux</dd></div>
        </dl>
        <button className="autis-image-button autis-cover" onClick={() => setExpandedImage({ src: '/images/the-autis/title-screen.jpeg', alt: 'The Autis title screen over a sunlit valley', caption: 'The Autis title screen.' })} aria-label="Expand The Autis title artwork">
          <img src="/images/the-autis/title-screen.jpeg" alt="The Autis title screen over a sunlit valley" fetchPriority="high" />
        </button>
        <p className="autis-caption">The Autis · title screen</p>
      </header>

      <section className="autis-section">
        <p className="autis-kicker">01 / THE EXPERIENCE</p>
        <h2>Take the long way through.</h2>
        <p>Explore at your own pace. Gather materials, craft tools, solve gentle puzzles, and look for small stories in the landscape. The game description promises no strict time limits; the supplied captures show a world that moves between bright fields, lakeside paths, and dark, firelit evenings.</p>
        <div className="autis-gallery-rail" aria-label="Gameplay screenshots; scroll horizontally for more">
          {gallery.map((image) => <button key={image.src} className="autis-image-button autis-rail-image" onClick={() => setExpandedImage(image)} aria-label={`Expand image: ${image.caption}`}><img src={image.src} alt={image.alt} loading="lazy" /><span>{image.caption}</span></button>)}
        </div>
      </section>

      <section className="autis-section">
        <p className="autis-kicker">02 / DEVELOPMENT MATERIAL</p>
        <h2>Inside the Unity project.</h2>
        <p>These editor captures document scenes and debugging in progress. They are grouped as development evidence, not arranged into a dated timeline: the images do not establish when each change happened or which problems were later resolved.</p>
        <div className="autis-gallery-rail autis-dev-rail" aria-label="Unity development screenshots; scroll horizontally for more">
          {developmentImages.map((image) => <figure key={image.src} className="autis-dev-slide"><img src={image.src} alt={image.alt} loading="lazy" /><figcaption>{image.caption}</figcaption></figure>)}
        </div>
        <p className="autis-build-note"><strong>BUILD NOTES</strong> · Unity · C# · HTML5. The captures show scene work, a crafting interface, and active debugging; they do not establish the implementation details or sequence of changes.</p>
      </section>

      <section className="autis-section autis-play-section" id="where-to-play">
        <p className="autis-kicker">03 / WHERE TO PLAY</p>
        <h2>THE AUTIS <span>· BROWSER BUILD</span></h2>
        <div className="autis-player">
          {playing ? (
            <iframe
              src={itchEmbed.src}
              title={itchEmbed.title}
              allow="autoplay; fullscreen; gamepad"
              allowFullScreen
              loading="lazy"
              onLoad={() => setEmbedMessage('The embed frame loaded. The game may take a moment to start.')}
              onError={() => setEmbedMessage('The browser build could not be loaded. Open the game on itch.io instead.')}
            />
          ) : (
            <div className="autis-player-preview">
              <img src="/images/the-autis/title-screen.jpeg" alt="" />
              <div className="autis-player-shade" />
              <div className="autis-player-label"><strong>THE AUTIS</strong><span>BROWSER BUILD</span><button type="button" onClick={startGame}>▶ PLAY HERE</button></div>
            </div>
          )}
        </div>
        {embedMessage && <p className="autis-embed-note" role="status">{embedMessage}</p>}
        <div className="autis-play-actions">
          <a className="autis-primary-link" href="https://spixcy.itch.io/the-autis" target="_blank" rel="noreferrer">PLAY ON ITCH.IO ↗</a>
          {playing && <button type="button" className="autis-secondary-link" onClick={() => document.querySelector('.autis-player')?.requestFullscreen?.()}>FULLSCREEN ↗</button>}
        </div>
        <p className="autis-caption">Click to load the browser build. Keyboard and mouse input are directed to the game while its frame is focused.</p>
      </section>

      <footer className="autis-footer">
        <p className="autis-kicker">CREDITS & LINKS</p>
        <p>Developed by <strong>spixcy</strong>.</p>
        <div className="autis-play-actions">
          <a className="autis-primary-link" href="https://spixcy.itch.io/the-autis" target="_blank" rel="noreferrer">ORIGINAL GAME ↗</a>
          <a className="autis-secondary-link" href="https://github.com/spixcy/Auti-the-game" target="_blank" rel="noreferrer">SOURCE ON GITHUB ↗</a>
        </div>
      </footer>

      {expandedImage && <div className="autis-lightbox" role="dialog" aria-modal="true" aria-label={expandedImage.caption} onClick={() => setExpandedImage(null)}><button type="button" aria-label="Close image" onClick={() => setExpandedImage(null)}>×</button><img src={expandedImage.src} alt={expandedImage.alt} /><p>{expandedImage.caption}</p></div>}
    </article>
  );
}
