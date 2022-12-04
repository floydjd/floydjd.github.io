import React, { useContext } from "react";
import { BlogConfig } from "../../blog";

interface BlogContextConfig {
  blog: BlogConfig;
  setBlog: React.Dispatch<React.SetStateAction<BlogConfig>>;
}

const BlogContext = React.createContext<BlogContextConfig>({
  blog: {
    title: "Error",
    pages: [
      {
        title: "Error",
        path: "/",
        content: [
          "Could not load content configuration.",
        ],
      },
    ],
  },
  setBlog: () => { throw new Error("setBlog not defined"); },
});

export const BlogProvider = BlogContext.Provider;

export const useBlog = () => useContext(BlogContext);
