import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../Theme";
import { NavBar } from "./NavBarFrame";

export const ToggleThemeButton: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div onClick={() => setTheme(theme === "default" ? "dark" : "default")}>
      <NavBar.MenuItem>
        {
          theme === "default" 
            ? <MoonIcon className="h-6 w-6" /> 
            : <SunIcon className="h-6 w-6"/>
        }
      </NavBar.MenuItem>
    </div>
  );
};
