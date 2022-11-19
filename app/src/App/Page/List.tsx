import React from "react";
import { Markdown } from "../Markdown";

interface ListProps {
  list: string[]; 
  type: "ordered" | "unordered";
}

export const List: React.FC<ListProps> = ({ list, type }) => (
  <div className="ml-4">
    <Markdown>
      {list.map((v, i) => (type === "ordered" ? `${i + 1}. ` : "- $") + v).join("\n")}
    </Markdown>
  </div>
);
