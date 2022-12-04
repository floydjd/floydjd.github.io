import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useBlog } from "../../../state";
import { MenuItem } from "./MenuItem";

export const PageNavDisplay: React.FC = () => {
  const { blog } = useBlog();
  const { pages } = blog;
  const { pathname } = useLocation();

  return (
    <>
      {
        pages
          .filter(page => page.showInNav)
          .map((page, i) => (
            <Link to={page.path} key={i}>
              <MenuItem selected={page.path === pathname}>
                  {page.title}
              </MenuItem>
            </Link>
          ))
      }
    </>
  );
};
