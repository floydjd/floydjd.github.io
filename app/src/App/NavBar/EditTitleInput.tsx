import React from "react";
import { useContent } from "../ContentProvider";
import { TextInput } from "../TextInput";

export const EditTitleInput: React.FC = () => {
  const { content, setContent } = useContent();
  const { title } = content;

  const onTitleChange = (value: string) => {
    setContent({
      ...content,
      title: value,
    });
  };

  return (
    <TextInput
      value={title}
      onChange={onTitleChange}
    />
  );
};
