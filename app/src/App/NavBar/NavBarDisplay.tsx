import React from "react";
import { Link } from "react-router-dom";
import { useContent } from "../ContentProvider";
import { Markdown } from "../Markdown";
import { NavBar } from "./NavBarFrame";
import { EditModeButton } from "./EditModeButton";
import { ToggleThemeButton } from "./ToggleThemeButton";
import { PageNavDisplay } from "./PageNavDisplay";

export const NavBarDisplay: React.FC = () => {
  const { content } = useContent();
  const { title, allowThemeChange, allowEditMode } = content;

  return (
    <NavBar
      title={(
        <Link to="/">
          <NavBar.MenuItem>
            <NavBar.Title>
              <Markdown>
                {title}
              </Markdown>
            </NavBar.Title>
          </NavBar.MenuItem>
        </Link>
      )}
      items={(
        <>
          <PageNavDisplay/>
          {allowThemeChange ? <ToggleThemeButton/> : null}
          {allowEditMode ? <EditModeButton/> : null}
        </>
      )}
    />
  );
};
