import { socialLinks } from '../data/portfolio';

export default function Hero() {
  return (
    <section
      className="hero section-shell"
      id="top"
    >
      <div className="hero-copy">
        <p className="eyebrow">
          // HELLO, WORLD
        </p>

        <h1>
          HYLIANGOAT
          <span className="accent-dot">.</span>
        </h1>

        <p className="hero-role">
          SOFTWARE · CYBER · GAMES · CREATIVE TECH
        </p>

        <p className="hero-summary">
          I build software, games, systems, and
          occasionally things that probably did not
          need to exist — but I am glad they do.
        </p>

        <div className="hero-actions">
          <a
            className="button button-primary"
            href="#work"
          >
            Explore my work
          </a>

          <a
            className="button button-secondary"
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <div
        className="hero-visual"
        aria-hidden="true"
      >
        <div className="orbit orbit-large">
          <div className="orbit-dot" />
        </div>

        <div className="orbit orbit-medium" />
        <div className="orbit orbit-small" />

        <div className="orbit-core">
          HG
        </div>

        <div className="hero-status">
          <span>STATUS</span>
          <strong>
            <i /> ONLINE
          </strong>

          <span>MODE</span>
          <strong>BUILDING</strong>
        </div>
      </div>
    </section>
  );
}