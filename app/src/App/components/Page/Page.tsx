import React from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useEditMode } from "../../state/EditModeProvider";
import { usePageAnchors } from "./hooks/usePageAnchors";
import { PageMetadataEditor } from "./components/PageMetadataEditor";
import { useActivePage } from "./hooks/useActivePage";
import { PageContent } from "./components/PageContent";

export const Page: React.FC = () => {
  const { page, setPage } = useActivePage();
  const { editMode } = useEditMode();
  usePageAnchors();

  const addContentItem = () => {
    setPage(prevPage => ({
      ...prevPage,
      content: [...prevPage.content, ""],
    }));
  };

  return (
    <div className="bg-background flex flex-row justify-center pt-4 pb-16">
      <div className="w-134 space-y-4 px-4">
        {
          editMode ? <PageMetadataEditor page={page} setPage={setPage} /> : null
        }
        <PageContent page={page} setPage={setPage} editMode={editMode}/>
        {
          editMode ? (
            <div onClick={addContentItem} className="flex flex-row justify-center border border-midContrast rounded p-4" data-testid="add-content-item-button">
              <PlusCircleIcon className="h-6 w-6"/>
            </div>
          ) : null
        }
      </div>
    </div>
  );
};
