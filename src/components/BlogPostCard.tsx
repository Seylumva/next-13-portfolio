import { Post } from "@/types/post";
import { GrLinkNext } from "react-icons/gr";
import Link from "next/link";
import styles from "@/styles/BlogPostCard.module.css";

type Props = {
  post: Post;
};

function BlogPostCard({ post }: Props) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.card}>
      <h3>{post.title}</h3>
      <span className={styles.blurb}>{post.blurb}</span>
      <span>
        Read more <GrLinkNext />
      </span>
    </Link>
  );
}

export default BlogPostCard;
