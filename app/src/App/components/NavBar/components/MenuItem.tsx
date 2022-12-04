import React from "react";

export interface MenuItemProps {
  selected?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({ children, selected }) => (
  <div className={`py-4 hover:underline text-primary cursor-pointer ${selected ? "font-semibold" : ""}`}>
    {children}
  </div>
);
