import React from "react";
import { JsonEditor } from "jsoneditor-react";
import ace from "brace";
import "jsoneditor-react/es/editor.min.css";
import "brace/mode/json";
import "brace/theme/tomorrow";
import "brace/theme/tomorrow_night";
import { ContentConfig } from "../../content";
import { useTheme } from "../Theme";

export interface EditorProps {
  content: ContentConfig;
  onChange: (content: ContentConfig) => void;
}

export const Editor: React.FC<EditorProps> = ({ content, onChange }) => {
  const { theme } = useTheme();
  const props = {
    mode: "code",
    value: content,
    onChange,
    ace,
  };
  return (
    <div className="h-full">
      {/* Workaround due to the JsonEditor component not rerendering when updating the "theme" prop. */}
      {theme === "dark" ? <JsonEditor theme="ace/theme/tomorrow_night" {...props}/> : null}
      {theme !== "dark" ? <JsonEditor theme="ace/theme/tomorrow" {...props}/> : null}
    </div>
  );
};
