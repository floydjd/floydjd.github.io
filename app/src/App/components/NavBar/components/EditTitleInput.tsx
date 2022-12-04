import React from "react";
import { useBlog } from "../../../state";
import { TextInput } from "../../TextInput";

export const EditTitleInput: React.FC = () => {
  const { blog, setBlog } = useBlog();
  const { title } = blog;

  const onTitleChange = (value: string) => {
    setBlog(prevBlog => ({
      ...prevBlog,
      title: value,
    }));
  };

  return (
    <TextInput
      value={title}
      onChange={onTitleChange}
      data-testid="blog-title-input"
    />
  );
};
