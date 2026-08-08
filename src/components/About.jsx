import { skillGroups } from '../data/portfolio';

export default function About() {
  return (
    <section
      className="portfolio-section section-shell"
      id="about"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            // ABOUT
          </p>

          <h2>
            Somewhere between engineer
            and professional tinkerer.
          </h2>
        </div>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <p>
            I like building things at the
            intersection of software, security,
            games, and physical systems.
          </p>

          <p>
            My work ranges from full-stack
            applications and machine learning to
            game development and creative
            experiments.
          </p>

          <p>
            I am especially interested in
            cybersecurity, robotics, autonomous
            systems, and the increasingly blurry
            line between software and the physical
            world.
          </p>
        </div>

        <div className="skill-grid">
          {skillGroups.map((group) => (
            <div
              className="skill-group"
              key={group.title}
            >
              <h3>{group.title}</h3>

              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}