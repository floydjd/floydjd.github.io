import React, { useEffect, useRef } from "react";
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
  const jsonEditorRef = useRef<any>();

  useEffect(
    () => {
      const editor = jsonEditorRef && jsonEditorRef.current && jsonEditorRef.current.jsonEditor;
      if (editor && value) { editor.update(value); }
    },
    [jsonEditorRef, value],
  );

  return (
    <div className="h-full">
      <JsonEditorReact 
        ref={jsonEditorRef}
        mode="code"
        value={value}
        onChange={onChange}
        ace={ace}
        mainMenuBar={false}
        navigationBar={false}
        statusBar={false}
        theme="ace/theme/tomorrow_night"
      />
    </div>
  );
};
