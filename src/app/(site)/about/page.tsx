import styles from "@/styles/Section.module.css";

export default function About() {
  return (
    <section className={`${styles.container} ${styles.section}`} id="about">
      <h2>About</h2>
      <p>
        I&apos;m Emilio, a <b>full stack web developer</b>. I began my web
        development journey in 2020, since then I have...
      </p>
      <ul>
        <li>
          Gained a <b>strong foundation in CSS and JavaScript</b> and moved on
          to learn frameworks such as Next.js, Astro.js, and Tailwind.
        </li>
        <li>
          <b>Developed several full stack web applications</b> with various
          technologies.
        </li>
        <li>
          <b>Created numerous web applications and deployed them</b> on services
          such as Heroku, Netlify, and Digital Ocean.
        </li>
        <li>
          <b>Delved deeper into back end programming</b> with Node.js frameworks
          such as Express and databases like MongoDB and PostgreSQL.
        </li>
        <li>
          <b>Continued to keep up with recent trends</b> such as AI by
          experimenting with OpenAI's APIs
        </li>
        <li>
          <b>Started writing articles based on my projects</b> to demonstrate my
          thought process and teaching newer developers.
        </li>
      </ul>
    </section>
  );
}
