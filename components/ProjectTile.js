import { Icon } from '@chakra-ui/react';
import {
  RiExternalLinkFill,
  RiFolder2Fill,
  RiGithubFill,
} from 'react-icons/ri';

export default function ProjectTile({ data }) {
  const { github, external, title, html, tech } = data;
  return (
    <div className="project-inner">
      <header>
        <div className="project-top">
          <div className="folder">
            <RiFolder2Fill />
          </div>
          <div className="project-links">
            {github && (
              <a
                href={github}
                aria-label="GitHub Link"
                target="_blank"
                rel="noreferrer"
              >
                <RiGithubFill />
              </a>
            )}
            {external && (
              <a
                href={external}
                aria-label="External Link"
                className="external"
                target="_blank"
                rel="noreferrer"
              >
                <RiExternalLinkFill />
              </a>
            )}
          </div>
        </div>

        <h3 className="project-title">
          <a href={external} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h3>

        <div
          className="project-description"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </header>

      <footer>
        {tech && (
          <ul className="project-tech-list">
            {tech.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        )}
      </footer>
    </div>
  );
}
