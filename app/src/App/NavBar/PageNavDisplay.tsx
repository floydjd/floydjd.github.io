import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useContent } from "../ContentProvider";
import { NavBar } from "./NavBarFrame";

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
              <NavBar.MenuItem selected={page.path === pathname}>
                  {page.title}
              </NavBar.MenuItem>
            </Link>
          ))
      }
    </>
  );
};
