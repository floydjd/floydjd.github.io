import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ContentConfig } from "../content";
import { ContentProvider } from "./ContentProvider";
import { Theme } from "./Theme";
import { EditModeProvider } from "./EditModeProvider";
import { Page } from "./Page/Page";
import { NavBar } from "./NavBar";

interface AppProps {
  content: ContentConfig;
}

const App: React.FC<AppProps> = ({ content: initialConfig }) => {
  const [content, setContent] = useState(initialConfig);
  const [editMode, setEditMode] = useState(false);
  return (
    <Theme initialTheme="dark">
      <EditModeProvider value={{ editMode, setEditMode }}>
        <ContentProvider value={{ content, setContent }}>
          <BrowserRouter>
            <NavBar/>
            <Page/>
          </BrowserRouter>
        </ContentProvider>
      </EditModeProvider>
    </Theme>
  );
};

export default App;
