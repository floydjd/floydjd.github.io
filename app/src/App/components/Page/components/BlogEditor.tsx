import React from "react";
import { useBlog } from "../../../state";
import { Editor } from "./JsonEditor";

export const ContentEditor: React.FC = () => {
  const { blog, setBlog } = useBlog();
  return <Editor value={blog} onChange={setBlog}/>;
};
