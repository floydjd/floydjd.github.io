import React from "react";
import { Link } from "react-router-dom";
import { useBlog, useEditMode } from "../../state";
import { Markdown } from "../Markdown";
import { AddPageButton } from "./components/AddPageButton";
import { EditModeButton } from "./components/EditModeButton";
import { EditTitleInput } from "./components/EditTitleInput";
import { MenuItem } from "./components/MenuItem";
import { PageNavDisplay } from "./components/PageNavDisplay";
import { Title } from "./components/Title";
import { ToggleThemeButton } from "./components/ToggleThemeButton";

export const NavBar: React.FC = () => {
  const { blog } = useBlog();
  const { title, allowThemeChange, allowEditMode } = blog;
  const { editMode } = useEditMode();

  return (
    <div className="sticky top-0 flex flex-row border-b justify-center bg-background w-full z-10">
      <div className="flex flex-row w-134 px-4">
        {!editMode ? (
          <Link to="/">
            <MenuItem>
              <Title>
                <Markdown>{title}</Markdown>
              </Title>
            </MenuItem>
          </Link>
        ) : (
          <MenuItem>
            <Title>
              <EditTitleInput/>
            </Title>
          </MenuItem>
        )}
        <div className="flex flex-row flex-1"/>
        <div className="flex flex-row justify-end space-x-4">
          <PageNavDisplay/>
          {editMode ? <AddPageButton /> : null}
          {allowThemeChange ? <ToggleThemeButton/> : null}
          {allowEditMode ? <EditModeButton/> : null}
        </div>
      </div>
    </div>
  );
};
