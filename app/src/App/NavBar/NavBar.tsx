import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useContent } from "../ContentProvider";
import { useTheme } from "../Theme";

interface MenuItemProps {
  selected?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ children, selected }) => (
  <div className={`py-4 hover:underline text-primary cursor-pointer ${selected ? "font-semibold" : ""}`}>
    {children}
  </div>
);

const Title: React.FC = ({ children }) => (
  <div className="font-semibold text-xl text-primary">
    {children}
  </div>
);

export const NavBar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { title, pages, allowDarkMode } = useContent();
  const { pathname } = useLocation();

  return (
    <div className="flex flex-row border-b justify-center">
      <div className="flex flex-row w-134">
      <Link to="/">
          <MenuItem>
            <Title>
              
                {title}
            </Title>
          </MenuItem>
        </Link>
        <div className="flex flex-row flex-1"/>
        <div className="flex flex-row justify-end space-x-4">
          {pages
            .filter(page => pathname === "/" ? page.path !== "/" : page)
            .map((page, i) => (
              <Link to={page.path} key={i}>
                <MenuItem selected={page.path === pathname}>
                    {page.title}
                </MenuItem>
              </Link>
            ))}
          {allowDarkMode ? (
            <div onClick={() => setTheme(theme === "default" ? "dark" : "default")}>
              <MenuItem>
                {
                  theme === "default" 
                    ? <MoonIcon className="h-6 w-6" /> 
                    : <SunIcon className="h-6 w-6"/>
                }
              </MenuItem>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
