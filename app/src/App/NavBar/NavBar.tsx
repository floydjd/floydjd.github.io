import React from "react";
import { Link } from "react-router-dom";
import { useContent } from "../ContentProvider";
import { useEditMode } from "../EditModeProvider";
import { Markdown } from "../Markdown";
import { AddPageButton } from "./AddPageButton";
import { EditModeButton } from "./EditModeButton";
import { EditTitleInput } from "./EditTitleInput";
import { MenuItem } from "./MenuItem";
import { PageNavDisplay } from "./PageNavDisplay";
import { Title } from "./Title";
import { ToggleThemeButton } from "./ToggleThemeButton";

export const NavBar: React.FC = () => {
  const { content } = useContent();
  const { title, allowThemeChange, allowEditMode } = content;
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
