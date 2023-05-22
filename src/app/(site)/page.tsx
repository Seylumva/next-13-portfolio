import BlogPostCard from "@/components/BlogPostCard";
import { getPosts } from "@/sanity/sanityUtils";
import styles from "@/styles/Section.module.css";

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
