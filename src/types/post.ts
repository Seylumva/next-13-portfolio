import { PortableTextBlock } from "sanity";

type Author = {
  name: string;
  image: string;
};

export type Post = {
  _id: string;
  publishedAt: string;
  title: string;
  author: Author;
  mainImage: string;
  body: PortableTextBlock[];
  slug: string;
  blurb: string;
};
