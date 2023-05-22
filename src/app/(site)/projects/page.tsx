import ProjectList from "@/components/ProjectList";
import styles from "@/styles/Section.module.css";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section className={`${styles.container} ${styles.section}`} id="projects">
      <h2>Projects</h2>
      <p>A few of my past works to showcase my growth as a developer.</p>
      <ProjectList projects={projects} />
    </section>
  );
}
