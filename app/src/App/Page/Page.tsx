import React from "react";
import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PageConfig } from "../../content";
import { useContent } from "../ContentProvider";

const FreeText: React.FC<{ children: string }> = ({ children }) => (
  <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
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
  const { pages } = useContent();
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
    <div className="flex flex-row justify-center py-16">
      <div className="w-134">
        <div className="font-semibold text-xl mb-4">
          {page.title}
        </div>
        {page.content.map(c => (
          typeof c === "string" 
            ? <FreeText>{c}</FreeText>
            : c.type === "orderedList"
              ? <OrderedList list={c.value} />
              : c.type === "unorderedList"
                ? <UnorderedList list={c.value} />
                : null
        ))}
      </div>
    </div>
  );
};
