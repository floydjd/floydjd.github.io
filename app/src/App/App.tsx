import React, { useState } from "react";
import { HashRouter } from "react-router-dom";
import { BlogConfig } from "../blog";
import { Page, NavBar } from "./components";
import { BlogProvider, EditModeProvider, Theme } from "./state";

interface AppProps {
  blog: BlogConfig;
}

const App: React.FC<AppProps> = ({ blog: initialBlog }) => {
  const [blog, setBlog] = useState(initialBlog);
  const [editMode, setEditMode] = useState(false);
  return (
    <Theme initialTheme="dark">
      <EditModeProvider value={{ editMode, setEditMode }}>
        <BlogProvider value={{ blog, setBlog }}>
          <HashRouter>
            <NavBar/>
            <Page/>
          </HashRouter>
        </BlogProvider>
      </EditModeProvider>
    </Theme>
  );
};

export default App;
