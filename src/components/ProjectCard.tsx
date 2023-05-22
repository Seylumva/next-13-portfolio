import { Project } from "../lib/projects";
import styles from "../styles/ProjectCard.module.css";
import { GrLinkNext } from "react-icons/gr";

function ProjectCard({ name, description, year, link }: Project) {
  return (
    <a
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      className={styles.project}
    >
      <div className={styles["project-name"]}>
        <h3>{name}</h3>
        <span>{year}</span>
      </div>
      <p>{description}</p>
      <span>
        Source Code <GrLinkNext />
      </span>
    </a>
  );
}

export default ProjectCard;
