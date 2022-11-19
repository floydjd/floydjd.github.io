import React from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useContent } from "../ContentProvider";
import { NavBar } from "./NavBarFrame";
import { EditModeButton } from "./EditModeButton";
import { ToggleThemeButton } from "./ToggleThemeButton";
import { PageNavDisplay } from "./PageNavDisplay";
import { useHistory } from "react-router-dom";

export const NavBarEditor: React.FC = () => {
  const { content, setContent } = useContent();
  const { title, allowThemeChange, allowEditMode } = content;
  const history = useHistory();

  const addPage = () => {
    const newPath = `/new-page${content.pages.length}`;
    const newTitle = `Page ${content.pages.length}`;
    setContent({
      ...content,
      pages: [
        ...content.pages, 
        {
          path: newPath,
          title: newTitle,
          content: [newTitle],
        },
      ],
    });

    history.push({
      pathname: newPath,
    });
  };

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent({
      ...content, 
      title: e.target.value,
    });
  };

  return (
    <NavBar
      title={(
        <NavBar.MenuItem>
          <NavBar.Title>
            <input
              value={title}
              onChange={onTitleChange}
            />
          </NavBar.Title>
        </NavBar.MenuItem>
      )}
      items={(
        <>
          <PageNavDisplay/>
          <div onClick={addPage}>
            <NavBar.MenuItem>
              <PlusCircleIcon className="h-6 w-6"/>
            </NavBar.MenuItem>
          </div>
          {allowThemeChange ? <ToggleThemeButton/> : null}
          {allowEditMode ? <EditModeButton/> : null}
        </>
      )}
    />
  );
};
