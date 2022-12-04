import React, { useContext, useState } from "react";

type ThemeName = "default" | "dark";

interface ThemeContextConfig {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

const ThemeContext = React.createContext<ThemeContextConfig>({
  theme: "default",
  setTheme: () => null,
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

export interface ThemeProps {
  initialTheme:  ThemeName;
}

export const Theme: React.FC<ThemeProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<ThemeName>(initialTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`bg-background text-primary w-full h-screen text-xs md:text-sm ${theme}`} data-testid="theme-wrapper">
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
