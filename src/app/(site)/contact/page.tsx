import styles from "@/styles/Section.module.css";

export default function Contact() {
  return (
    <section className={`${styles.container} ${styles.section}`}>
      <h2>Contact</h2>
      <p>
        If you&apos;d like to get in touch, feel free to{" "}
        <a href="mailto:sc2nem@gmail.com" className={styles["external-link"]}>
          send me an email
        </a>
        . You can also keep up to date with me through{" "}
        <a
          href="https://github.com/Seylumva"
          rel="noopener noreferrer"
          target="_blank"
          className={styles["external-link"]}
        >
          Github
        </a>{" "}
        and{" "}
        <a
          href="https://www.linkedin.com/in/emilio-noa/"
          rel="noopener noreferrer"
          target="_blank"
          className={styles["external-link"]}
        >
          LinkedIn
        </a>
        .
      </p>
    </section>
  );
}
