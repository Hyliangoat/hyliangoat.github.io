import { socialLinks } from '../data/portfolio';

export default function Contact() {
  return (
    <section
      className="contact section-shell"
      id="contact"
    >
      <p className="eyebrow">
        // CONNECTIONS
      </p>

      <h2>
        Interested in what I am building?
      </h2>

      <p>
        Find the code, follow the work, or get
        in touch.
      </p>

      <div className="contact-links">
        <a
          className="button button-primary"
          href={socialLinks.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>

        {socialLinks.linkedin && (
          <a
            className="button button-secondary"
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        )}

        {socialLinks.email && (
          <a
            className="button button-secondary"
            href={`mailto:${socialLinks.email}`}
          >
            Email
          </a>
        )}
      </div>
    </section>
  );
}