import React from "react";
import { useHistory } from "react-router-dom";
import { PageConfig } from "../../../../blog";
import { TextInput } from "../../TextInput";

interface PageMetadataEditorProps {
  page: PageConfig;
  setPage: React.Dispatch<React.SetStateAction<PageConfig>>;
}

export const PageMetadataEditor: React.FC<PageMetadataEditorProps> = ({ page, setPage }) => {
  const history = useHistory();
  const setPath = (path: string) => {
    if (path) {
      setPage(prevPage => ({
        ...prevPage,
        path,
      }));
      history.push({
        pathname: path,
      });
    }
  };
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-row space-x-4">
        <div>Path</div> 
        <TextInput value={page.path} onChange={setPath} data-testid="page-path-input"/>
      </div>
      <div className="flex flex-row space-x-4">
        <div>Title</div>
        <TextInput value={page.title} onChange={value => setPage(prevPage => ({ ...prevPage, title: value }))} data-testid="page-title-input"/>
      </div>
      <div className="flex flex-row space-x-4">
        <div>Show in Nav Bar</div>
        <input type="checkbox" checked={page.showInNav} onChange={e => setPage(prevPage => ({ ...prevPage, showInNav: e.target.checked }))} data-testid="page-showInNav-checkbox"/>
      </div>
    </div>
  );
};
