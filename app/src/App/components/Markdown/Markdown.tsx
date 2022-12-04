import React from "react";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rangeParser from "parse-numeric-range";
import { Link } from "react-router-dom";
import { CopyCodeButton } from "./components/CopyCodeButton";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);

export interface MarkdownProps {
  children: string;
  "data-testid"?: string;
}

export const Markdown: React.FC<MarkdownProps> = ({ children }) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      components={{
        pre: (props) => (
          <pre className="blog-pre">
            <CopyCodeButton>{props.children}</CopyCodeButton>
            {props.children}
          </pre>
        ),
        a: (props) => {
          const isAbsolutePath = props.href?.match(/^(https?:)?\/\//);
          const text = props.children.join("");
          const anchorId = props.href && props.href.startsWith("#") ? props.href.slice(1) : undefined;

          return (
            !isAbsolutePath && props.href
              ? <Link to={props.href} id={anchorId}>{text}</Link>
              : <a href={props.href} id={anchorId}>{text}</a>
          );
        },
        code({ node, className, children: rawText }: any) {
          const match = /language-(\w+)/.exec(className || "");
          const hasMeta = node?.data?.meta;
    
          const applyHighlights: object = (hightlights: number) => {
            if (hasMeta) {
              const RE = /{([\d,-]+)}/;
              const metadata = node.data.meta?.replace(/\s/g, "");
              const strlineNumbers = RE.test(metadata)
                ? RE.exec(metadata)?.at(1) || "0"
                : "0";
              const highlightLines = rangeParser(strlineNumbers);
              const highlight = highlightLines;
              const data = highlight.includes(hightlights)
                ? "highlight"
                : null;
              return { data };
            } else {
              return {};
            }
          };
    
          // Workaround for extra line bug https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/443
          const text = (rawText || []).map((t: string) => t.replace(new RegExp("\\n$"), ""));
    
          return match ? (
            <SyntaxHighlighter
              style={oneDark}
              language={match[1]}
              PreTag="div"
              className="codeStyle"
              showLineNumbers={true}
              wrapLines={!!hasMeta}
              useInlineStyles={true}
              lineProps={applyHighlights}
            >
              {text}
            </SyntaxHighlighter>
          ) : (
            <code className={className}>
              {text}
            </code>
          );
        },
      }}
    >
        {children}
    </ReactMarkdown>
  );
};
