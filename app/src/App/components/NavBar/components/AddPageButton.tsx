import React from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useBlog } from "../../../state";
import { useHistory } from "react-router-dom";
import { MenuItem } from "./MenuItem";

export const AddPageButton: React.FC = () => {
  const { blog, setBlog } = useBlog();
  const history = useHistory();

  const addPage = () => {
    const newPath = `/page${blog.pages.length}`;
    const newTitle = `Page ${blog.pages.length}`;
    setBlog(prevBlog => ({
      ...prevBlog,
      pages: [
        ...prevBlog.pages, 
        {
          path: newPath,
          title: newTitle,
          content: [newTitle],
        },
      ],
    }));

    history.push({
      pathname: newPath,
    });
  };

  return (
    <div onClick={addPage} data-testid="add-page-button">
      <MenuItem>
        <PlusCircleIcon className="h-6 w-6"/>
      </MenuItem>
    </div>
  );
};
