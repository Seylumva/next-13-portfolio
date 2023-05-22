import BlogPostCard from "@/components/BlogPostCard";
import { getPosts } from "@/sanity/sanityUtils";
import styles from "@/styles/Section.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emilio Noa",
  description:
    "Results-driven web developer with a passion for creating seamless user experiences and innovative digital solutions. Specializing in front-end development, with a focus on React, I have a proven ability to quickly adapt to new technologies and thrive in fast-paced environments.",
};

const Home = async () => {
  const posts = await getPosts();
  return (
    <section className={`${styles.section} ${styles.container}`}>
      <p className={`${styles["recent-posts"]}`}>Recent posts</p>
      {posts.map((post) => (
        <BlogPostCard post={post} key={post._id} />
      ))}
    </section>
  );
};

export default Home;
