import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "@/sanity/schemas";

export default defineConfig({
  projectId: "q2o19ql0",
  dataset: "production",
  title: "Personal Blog",
  apiVersion: "2023-05-22",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});
