import { getPost } from "@/sanity/sanityUtils";
import styles from "@/styles/Section.module.css";
import blogStyles from "@/styles/BlogPostPage.module.css";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { post: string };
};

export default async function Post({ params }: Props) {
  const slug = params.post;
  const post = await getPost(slug);
  return (
    <section className={`${styles.container} ${styles.section}`}>
      <Image
        className={`${blogStyles["main-image"]}`}
        src={`${post.mainImage}?w=800&h=350&fit=crop`}
        alt={post.title}
        width={800}
        height={350}
      />
      <h2>{post.title}</h2>
      <PortableText value={post.body} />

      <div className={blogStyles.footer}>
        <p>Last updated: {post.publishedAt}</p>
        <div className={blogStyles.author}>
          <Image
            src={`${post.author.image}?width=55&height=55`}
            width={55}
            height={55}
            alt={post.author.name}
          />
          <span>{post.author.name}</span>
        </div>
      </div>
    </section>
  );
}
