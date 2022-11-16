import React from "react";
import { useLocation } from "react-router-dom";
import { PageConfig } from "../../content";
import { useContent, useSetContent } from "../ContentProvider";
import { Editor } from "./JsonEditor";
import { Markdown } from "./Markdown";

const FreeText: React.FC<{ children: string }> = ({ children }) => (
  <Markdown>{children}</Markdown>
);

interface ListProps {
  list: string[]; 
}

const OrderedList: React.FC<ListProps> = ({ list }) => (
  <div className="ml-4">
    <FreeText>
      {list.map((v, i) => `${i + 1}. ${v}`).join("\n")}
    </FreeText>
  </div>
);

const UnorderedList: React.FC<ListProps> = ({ list }) => (
  <div className="ml-4">
    <FreeText>
      {list.map((v) => `- ${v}`).join("\n")}
    </FreeText>
  </div>
);

export const Page: React.FC = () => {
  const content = useContent();
  const { pages } = content;
  const setContent = useSetContent();
  const { pathname } = useLocation();
  const targetPage = pages.find(p => p.path === pathname);
  const notFoundPage: PageConfig = {
    title: "Page Not Found",
    path: pathname,
    content: [
      `Could not find page at ${pathname}`,
    ],
  };

  const page = targetPage || notFoundPage;
  return (
    <div className="flex flex-row justify-center pt-20 pb-12">
      <div className="w-134 space-y-4 px-4">
        {page.content.map((c, i) => (
          <div key={i}>
            {
              typeof c === "string" 
                ? <FreeText>{c}</FreeText>
                : c.type === "orderedList"
                  ? <OrderedList list={c.value} />
                  : c.type === "unorderedList"
                    ? <UnorderedList list={c.value} />
                    : c.type === "contentEditor"
                      ? <Editor value={content} onChange={setContent}/>
                      : null
            }
          </div>
        ))}
      </div>
    </div>
  );
};
