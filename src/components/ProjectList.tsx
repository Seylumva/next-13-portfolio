import { Project } from "../lib/projects";
import ProjectCard from "./ProjectCard";
import styles from "../styles/ProjectList.module.css";

interface Props {
  projects: Project[];
}

function ProjectList({ projects }: Props) {
  return (
    <div className={styles.projectlist}>
      {projects &&
        projects.map((project: Project, index: number) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            year={project.year}
            link={project.link}
          />
        ))}
    </div>
  );
}

export default ProjectList;
