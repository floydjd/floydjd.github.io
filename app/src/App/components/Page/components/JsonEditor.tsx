import React, { useEffect, useRef, useState } from "react";
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
  const [focus, setFocus] = useState(false);
  const jsonEditorRef = useRef<any>();

  useEffect(
    () => {
      if (!focus) {
        const editor = jsonEditorRef && jsonEditorRef.current && jsonEditorRef.current.jsonEditor;
        if (editor && value) {
          editor.update(value);
        }
      }
    },
    [focus, jsonEditorRef, value],
  );

  return (
    <div className="h-full w-full">
      <JsonEditorReact 
        ref={jsonEditorRef}
        mode="code"
        value={value}
        onChange={onChange}
        ace={ace}
        mainMenuBar={false}
        navigationBar={false}
        statusBar={false}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        theme="ace/theme/tomorrow_night"
        style={{ body: { fontSize: "8px" } }}
      />
    </div>
  );
};
