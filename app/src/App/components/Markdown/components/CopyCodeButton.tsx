import React, { useEffect, useState } from "react";
import { ClipboardDocumentIcon, CheckIcon } from "@heroicons/react/24/solid";

const CHECKBOX_TIMEOUT_SECONDS = 2;

export interface CopyCodeButtonProps {
  children: any;
}

export const CopyCodeButton: React.FC<CopyCodeButtonProps> = ({ children }) => {
  const [copying, setCopying] = useState(false);

  useEffect(() => {
    if (copying) {
      setTimeout(() => setCopying(false), CHECKBOX_TIMEOUT_SECONDS * 1000);
    }
  }, [copying, setCopying]);

  const handleClick = () => {
    setCopying(true);
    navigator.clipboard.writeText(children[0].props.children[0]);
  };

  return (
    <div className="code-copy-btn w-4 mt-2" onClick={handleClick} data-testid="copy-code-button">
      {copying ? <CheckIcon/> : <ClipboardDocumentIcon color={"#c8c8c8"}/>}
    </div>
  );
};
