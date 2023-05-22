import { Post } from "@/types/post";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getPost(slug: string): Promise<Post> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      publishedAt,
      "author": author -> {
        name,
        "image": image.asset -> url
      },
      "slug": slug.current,
      body,
      categories,
      "mainImage": mainImage.asset->url
    }`,
    { slug }
  );
}

export async function getPosts(): Promise<Post[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post"]{
      _id,
      title,
      "slug": slug.current,
      categories,
      blurb
    }`
  );
}
