import React from "react";
import { useLocation } from "react-router-dom";
import { PageConfig, PageContentComponentConfig } from "../../content";
import { useContent } from "../ContentProvider";
import { Editor } from "./JsonEditor";
import { Markdown } from "../Markdown";
import { List } from "./List";

export const Page: React.FC = () => {
  const { content, setContent } = useContent();
  const { pathname } = useLocation();
  const targetPage = content.pages.find(p => p.path === pathname);
  const notFoundPage: PageConfig = {
    title: "Page Not Found",
    path: pathname,
    content: [
      `Could not find page at ${pathname}`,
    ],
  };

  const page = targetPage || notFoundPage;

  const getContentItem = (contentItem: PageContentComponentConfig) => {
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

  return (
    <div className="flex flex-row justify-center pt-20 pb-12">
      <div className="w-134 space-y-4 px-4">
        {page.content.map((c, i) => (
          <div key={i}>
            {
              typeof c === "string" ? <Markdown>{c}</Markdown> : getContentItem(c)
            }
          </div>
        ))}
      </div>
    </div>
  );
};
