import React from "react";
import { WrenchIcon, NewspaperIcon } from "@heroicons/react/24/solid";
import { useEditMode } from "../EditModeProvider";
import { MenuItem } from "./MenuItem";

export const EditModeButton: React.FC = () => {
  const { editMode, setEditMode } = useEditMode();

  return (
    <div onClick={() => setEditMode(!editMode)}>
      <MenuItem>
        {
          editMode
            ? <NewspaperIcon className="h-6 w-6" /> 
            : <WrenchIcon className="h-6 w-6"/>
        }
      </MenuItem>
    </div>
  );
};
