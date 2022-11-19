import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useContent } from "../ContentProvider";
import { MenuItem } from "./MenuItem";

export const PageNavDisplay: React.FC = () => {
  const { content } = useContent();
  const { pages } = content;
  const { pathname } = useLocation();

  return (
    <>
      {
        pages
          .filter(page => pathname === "/" ? page.path !== "/" : page)
          .filter(page => !page.hideFromNav)
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
