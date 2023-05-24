import { Post } from "@/types/post";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getPost(slug: string): Promise<Post> {
  return createClient(clientConfig).fetch(
    groq`*[slug.current == $slug][0]{
      _id,
      title,
      publishedAt,
      "author": author -> {
        name,
        "image": image.asset -> url
      },
      categories,
      "mainImage": mainImage.asset->url,
      body[]{
        ...,
        markDefs[]{
          ...,
          _type == "internalLink" => {
            ...,
            "slug": @.post->slug,
            "url": "https://www.emilionoa.com/blog/" + @.post->slug.current
          }
        }
      }
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
