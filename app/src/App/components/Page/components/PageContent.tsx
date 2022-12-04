import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { PageConfig, PageContentConfig } from "../../../../blog";
import { Markdown } from "../../Markdown";
import { ContentEditor } from "./BlogEditor";
import { FreeText } from "./FreeText";
import { List } from "./List";

export interface PageContentProps {
  page: PageConfig;
  setPage: (page: PageConfig) => void;
  editMode: boolean;
}

export const PageContent: React.FC<PageContentProps> = ({ page, setPage, editMode }) => {
  const updateContentItemForIndex = (index: number) => (contentItem: PageContentConfig) => {
    setPage({
      ...page,
      content: page.content.map((c, i) => i === index ? contentItem : c),
    });
  };

  const removeContentItem = (index: number) => {
    setPage({
      ...page,
      content: page.content.filter((_, i) => i !== index),
    });
  };

  const getContentItem = (contentItem: PageContentConfig, index: number) => {
    const updateContentItem = updateContentItemForIndex(index);
    if (typeof contentItem === "string") return <FreeText value={contentItem} updateContentItem={updateContentItem} />;
    if (contentItem.type === "unorderedList" && Array.isArray(contentItem.value)) return <List list={contentItem.value} type="unordered" />;
    if (contentItem.type === "orderedList" && Array.isArray(contentItem.value)) return <List list={contentItem.value} type="ordered" />;
    if (contentItem.type === "blogEditor") return <ContentEditor/>;
    if (contentItem.type === "code" && Array.isArray(contentItem.lines)) return (
      <Markdown data-testid="content-code">
        {`\`\`\`${contentItem.language}\n${contentItem.lines.join("\n")}\n\`\`\``}
      </Markdown>
    );

    console.error(`Unknown component type for ${JSON.stringify(contentItem)}`);
    return null;
  };

  return (
    <>
      {
        page.content.map((c, i) => (
          <div key={i} className="flex flex-row">
            <div className="flex flex-col w-full">
              {getContentItem(c, i)}
            </div>
            {editMode ? (
              <div className="flex flex-col justify-center m-2 w-1/12">
                <div onClick={() => removeContentItem(i)} data-testid={`content${i}`} className="cursor-pointer">
                  <TrashIcon className="h-6 w-6 m-1"/>
                </div>
              </div>
            ) : null}
          </div>
        ))
      }
    </>
  );
};
