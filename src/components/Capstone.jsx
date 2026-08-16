import {
  capstoneEnhancements,
  codeReview,
  professionalAssessment,
} from '../data/capstone';

export default function Capstone() {
  return (
    <section
      className="portfolio-section section-shell capstone"
      id="capstone"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            // CS 499 CAPSTONE
          </p>

          <h2>
            Computer Science ePortfolio.
          </h2>
        </div>

        <p>
          Poké Planets evolved through three
          major enhancements demonstrating
          software engineering, algorithms,
          databases, and secure full-stack
          development.
        </p>
      </div>

      <SelfAssessment />
      <CodeReview />
      <div className="capstone-grid">
        {capstoneEnhancements.map(
          (enhancement) => (
            <EnhancementCard
              key={enhancement.id}
              enhancement={enhancement}
            />
          ),
        )}
      </div>

    </section>
  );
}

function CodeReview() {
  return (
    <article className="capstone-video-card">
      <div className="capstone-card-header">
        <div>
          <span className="capstone-number">
            00
          </span>

          <p className="project-kicker">
            Code Review
          </p>

          <h3>
            Initial Review + Enhancement Plan
          </h3>
        </div>
      </div>

      <div className="video-wrapper">
        <iframe
          src={codeReview.videoUrl}
          title="CS 499 Poké Planets Code Review"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <p className="capstone-description">
        {codeReview.description}
      </p>
    </article>
  );
}

function EnhancementCard({
  enhancement,
}) {
  return (
    <article
      className="capstone-card"
      id={`capstone-${enhancement.id}`}
    >
      <div>
        <span className="capstone-number">
          {enhancement.number}
        </span>

        <p className="project-kicker">
          {enhancement.category}
        </p>

        <h3>
          {enhancement.title}
        </h3>

        <p className="capstone-description">
          {enhancement.summary}
        </p>
      </div>

      <div className="artifact-links">
        <a
          className="button button-secondary"
          href={enhancement.originalUrl}
          target="_blank"
          rel="noreferrer"
        >
          Original ↗
        </a>

        <a
          className="button button-primary"
          href={enhancement.polishedUrl}
          target="_blank"
          rel="noreferrer"
        >
          Polished ↗
        </a>
      </div>

      <details className="capstone-details">
        <summary>
          Read narrative
        </summary>

        <div className="capstone-details-content">
          {enhancement.narrative.map(
            (paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ),
          )}
        </div>
      </details>
    </article>
  );
}

function SelfAssessment() {
  return (
    <article className="self-assessment">
      <div>

        <p className="project-kicker">
          Professional Self-Assessment
        </p>

        <h3>
          Reflecting on the Computer Science
          program.
        </h3>

        <p className="capstone-description">
          A reflection on my growth as a
          computer scientist and how the
          artifacts in this portfolio
          demonstrate the program outcomes.
        </p>
      </div>

      <details className="capstone-details">
        <summary>
          Read professional self-assessment
        </summary>

        <div className="capstone-details-content">
          {professionalAssessment.map(
            (paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ),
          )}
        </div>
      </details>
    </article>
  );
}