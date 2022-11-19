import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ContentConfig } from "../content";
import { ContentProvider } from "./ContentProvider";
import { Page } from "./Page";
import { Theme } from "./Theme";
import { EditModeProvider } from "./EditModeProvider";
import { NavBarDisplay } from "./NavBar/NavBarDisplay";
import { NavBarEditor } from "./NavBar/NavBarEditor";

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
            {!editMode ? <NavBarDisplay/> : <NavBarEditor/>}
            <Page/>
          </BrowserRouter>
        </ContentProvider>
      </EditModeProvider>
    </Theme>
  );
};

export default App;
