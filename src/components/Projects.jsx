import { useMemo, useState } from 'react';

import {
  projectFilters,
  projects,
} from '../data/portfolio';

export default function Projects() {
  const [activeFilter, setActiveFilter] =
    useState('All');

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }

    return projects.filter((project) =>
      project.categories.includes(activeFilter),
    );
  }, [activeFilter]);

  return (
    <section
      className="portfolio-section section-shell"
      id="work"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            // SELECTED WORK
          </p>

          <h2>Things I have built.</h2>
        </div>

        <p>
          Software, experiments, games, and
          creative technical work.
        </p>
      </div>

      <div
        className="filter-list"
        aria-label="Filter projects"
      >
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={
              activeFilter === filter
                ? 'filter-button active'
                : 'filter-button'
            }
            aria-pressed={
              activeFilter === filter
            }
            onClick={() => {
              setActiveFilter(filter);
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {visibleProjects.length > 0 ? (
        <div className="project-grid">
          {visibleProjects.map((project) => (
            <article
              className={
                project.featured
                  ? 'project-card featured'
                  : 'project-card'
              }
              key={project.id}
            >
              <div className="project-number">
                {project.number}
              </div>

              <div className="project-card-content">
                <p className="project-kicker">
                  {project.subtitle}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <ul
                  className="technology-list"
                  aria-label={`${project.title} technologies`}
                >
                  {project.technologies.map(
                    (technology) => (
                      <li key={technology}>
                        {technology}
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div className="project-card-footer">
                <span>
                  {project.categories.join(' · ')}
                </span>

                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View project ↗
                  </a>
                ) : (
                  <span className="muted-link">
                    Link after publishing
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span>ARCHIVE_EMPTY</span>
          <p>
            Nothing published in this category yet.
          </p>
        </div>
      )}
    </section>
  );
}