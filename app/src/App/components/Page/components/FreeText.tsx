import React from "react";
import { useEditMode } from "../../../state/EditModeProvider";
import { Markdown } from "../../Markdown";
import { TextArea } from "./TextArea";

export interface FreeTextProps {
  value: string;
  updateContentItem: (value: string) => void;
}

export const FreeText: React.FC<FreeTextProps> = ({ value, updateContentItem }) => {
  const { editMode } = useEditMode();

  return !editMode ? <Markdown>{value}</Markdown> : <TextArea value={value} onChange={updateContentItem} />;
};
