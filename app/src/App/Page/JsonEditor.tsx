import React from "react";
import { JsonEditor as JsonEditorReact } from "jsoneditor-react";
import ace from "brace";
import "jsoneditor-react/es/editor.min.css";
import "brace/mode/json";
import "brace/theme/tomorrow_night";

export interface EditorProps {
  value: any;
  onChange: (value: any) => void;
}

export const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
  const props = {
    mode: "code",
    value,
    onChange,
    ace,
    mainMenuBar: false,
    navigationBar: false,
    statusBar: false,
  };
  return (
    <div className="h-full">
      <JsonEditorReact theme="ace/theme/tomorrow_night" {...props}/>
    </div>
  );
};
