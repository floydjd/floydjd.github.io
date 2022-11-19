import React from "react";
import { WrenchIcon, NewspaperIcon } from "@heroicons/react/24/solid";
import { NavBar } from "./NavBarFrame";
import { useEditMode } from "../EditModeProvider";

export const EditModeButton: React.FC = () => {
  const { editMode, setEditMode } = useEditMode();

  return (
    <div onClick={() => setEditMode(!editMode)}>
      <NavBar.MenuItem>
        {
          editMode
            ? <NewspaperIcon className="h-6 w-6" /> 
            : <WrenchIcon className="h-6 w-6"/>
        }
      </NavBar.MenuItem>
    </div>
  );
};
