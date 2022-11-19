import React from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useContent } from "../ContentProvider";
import { useHistory } from "react-router-dom";
import { MenuItem } from "./MenuItem";

export const AddPageButton: React.FC = () => {
  const { content, setContent } = useContent();
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

  return (
    <div onClick={addPage}>
      <MenuItem>
        <PlusCircleIcon className="h-6 w-6"/>
      </MenuItem>
    </div>
  );
};
