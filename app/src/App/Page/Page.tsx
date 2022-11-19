import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { TrashIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import { PageConfig, PageContentConfig } from "../../content";
import { useContent } from "../ContentProvider";
import { Editor } from "./JsonEditor";
import { Markdown } from "../Markdown";
import { List } from "./List";
import { FreeText } from "./FreeText";
import { useEditMode } from "../EditModeProvider";
import { TextInput } from "../TextInput";
import { usePageAnchors } from "./usePageAnchors";

export const Page: React.FC = () => {
  const { editMode } = useEditMode();
  const { content, setContent } = useContent();
  const { pathname } = useLocation();
  const history = useHistory();
  usePageAnchors();
  const targetPage = content.pages.find(p => p.path === pathname);
  const notFoundPage: PageConfig = {
    title: "Page Not Found",
    path: pathname,
    content: [
      `Could not find page at ${pathname}`,
    ],
  };

  const page = targetPage || notFoundPage;

  const updateContentItemForIndex = (index: number) => (contentItem: PageContentConfig) => {
    page.content[index] = contentItem;
    setContent({
      ...content,
    });
  };

  const getContentItem = (contentItem: PageContentConfig, index: number) => {
    const updateContentItem = updateContentItemForIndex(index);
    if (typeof contentItem === "string") return <FreeText value={contentItem} updateContentItem={updateContentItem} />;
    if (contentItem.type === "unorderedList") return <List list={contentItem.value} type="unordered" />;
    if (contentItem.type === "orderedList") return <List list={contentItem.value} type="ordered" />;
    if (contentItem.type === "contentEditor") return <Editor value={content} onChange={setContent}/>;
    if (contentItem.type === "code" && Array.isArray(contentItem.lines)) return (
      <Markdown>
        {`\`\`\`${contentItem.language}\n${contentItem.lines.join("\n")}\n\`\`\``}
      </Markdown>
    );

    console.error(`Unknown component type for ${JSON.stringify(contentItem)}`);
    return null;
  };

  const removeContentItem = (index: number) => {
    page.content = page.content.filter((_, i) => i !== index);
    setContent({
      ...content,
    });
  };

  const addContentItem = () => {
    page.content.push("");
    setContent({
      ...content,
    });
  };

  const setPath = (path: string) => {
    if (path) {
      page.path = path;
      setContent({
        ...content,
      });
      history.push({
        pathname: path,
      });
    }
  };

  const setTitle = (title: string) => {
    page.title = title;
    setContent({
      ...content,
    });
  };

  return (
    <div className="bg-background flex flex-row justify-center pt-4 pb-16">
      <div className="w-134 space-y-4 px-4">
        {
          editMode ? (
            <div className="flex flex-col space-y-4">
              <div className="flex flex-row space-x-4">
                <div>Path</div> 
                <TextInput value={page.path} onChange={setPath}/>
              </div>
              <div className="flex flex-row space-x-4">
                <div>Title</div>
                <TextInput value={page.title} onChange={setTitle}/>
              </div>
            </div>
          ) : null
        }
        {
          page.content.map((c, i) => (
            <div key={i} className="flex flex-row">
              <div className="flex flex-row w-11/12">
                {getContentItem(c, i)}
              </div>
              {editMode ? (
                <div className="flex flex-col justify-center m-2">
                  <div onClick={() => removeContentItem(i)} className="cursor-pointer">
                    <TrashIcon className="h-6 w-6 m-1"/>
                  </div>
                </div>
              ) : null}
            </div>
          ))
        }
        {
          editMode ? (
            <div onClick={addContentItem} className="flex flex-row justify-center border border-midContrast rounded p-4">
              <PlusCircleIcon className="h-6 w-6"/>
            </div>
          ) : null
        }
      </div>
    </div>
  );
};
