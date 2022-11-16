import React, { useState } from "react";
import {
  BrowserRouter,
} from "react-router-dom";
import { ContentConfig } from "../content";
import { ContentProvider } from "./ContentProvider";
import { Page } from "./Page";
import { NavBar } from "./NavBar";
import { Theme } from "./Theme";

interface AppProps {
  content: ContentConfig;
}

const App: React.FC<AppProps> = ({ content: initialConfig }) => {
  const [content, setContent] = useState(initialConfig);
  return (
    <Theme initialTheme="dark">
      <ContentProvider value={{ content, setContent }}>
        <BrowserRouter>
          <NavBar/>
          <Page/>
        </BrowserRouter>
      </ContentProvider>
    </Theme>
  );
};

export default App;
