import { socialLinks } from '../data/portfolio';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a
          className="brand"
          href="#top"
          aria-label="Hyliangoat home"
        >
          HYLIANGOAT
          <span>_</span>
        </a>

        <nav
          className="site-nav"
          aria-label="Primary navigation"
        >
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>

          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}