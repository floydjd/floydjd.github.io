import React from "react";

interface MenuItemProps {
  selected?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ children, selected }) => (
  <div className={`py-4 hover:underline text-primary cursor-pointer ${selected ? "font-semibold" : ""}`}>
    {children}
  </div>
);

const Title: React.FC = ({ children }) => (
  <div className="text-xl text-primary">
    {children}
  </div>
);

export interface NavBarProps {
  title: React.ReactNode;
  items: React.ReactNode;
}

export const NavBarBase: React.FC<NavBarProps> = ({ title, items }) => {
  return (
    <div className="flex flex-row border-b justify-center fixed bg-background w-full z-10">
      <div className="flex flex-row w-134 px-4">
        {title}
        <div className="flex flex-row flex-1"/>
        <div className="flex flex-row justify-end space-x-4">
          {items}
        </div>
      </div>
    </div>
  );
};

export const NavBar = Object.assign(NavBarBase, {
  MenuItem,
  Title,
});
