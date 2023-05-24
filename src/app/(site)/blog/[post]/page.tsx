import { getPost } from "@/sanity/sanityUtils";
import styles from "@/styles/Section.module.css";
import blogStyles from "@/styles/BlogPostPage.module.css";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Metadata } from "next";
import ExternalLinkRenderer from "@/components/PostComponents/ExternalLinkRenderer";
import InternalLinkRenderer from "@/components/PostComponents/InternalLinkRenderer";
type Props = {
  params: { post: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.post);
  return {
    title: post.title,
    description: post.blurb,
  };
}

const serializers = {
  marks: {
    internalLink: ({ children, value }: any) => (
      <InternalLinkRenderer children={children} value={value} />
    ),
    link: ({ children, value }: any) => (
      <ExternalLinkRenderer children={children} value={value} />
    ),
  },
};

export default async function Post({ params }: Props) {
  const slug = params.post;
  const post = await getPost(slug);
  return (
    <section className={`${styles.container} ${styles.section}`}>
      <div className={`${blogStyles["image-wrapper"]}`}>
        <Image
          fill
          className={`${blogStyles.image}`}
          src={`${post.mainImage}?auto=format&w=1100&h=600&fit=crop`}
          alt={post.title}
        />
      </div>
      <h2>{post.title}</h2>
      <PortableText value={post.body} components={serializers} />

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
