import React, { useContext } from "react";
import { ContentConfig } from "../content";

const ContentContext = React.createContext<ContentConfig>({
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
});

export const ContentProvider = ContentContext.Provider;

export const useContent = () => useContext(ContentContext);
