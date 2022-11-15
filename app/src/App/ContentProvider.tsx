import React, { useContext } from "react";
import { ContentConfig } from "../content";

interface ContentContextConfig {
  content: ContentConfig;
  setContent: (content: ContentConfig) => void;
}

const ContentContext = React.createContext<ContentContextConfig>({
  content: {
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
  setContent: () => { throw new Error("setContent not defined"); },
});

export const ContentProvider = ContentContext.Provider;

export const useContent = () => useContext(ContentContext).content;
export const useSetContent = () => useContext(ContentContext).setContent;
