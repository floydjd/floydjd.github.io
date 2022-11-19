export type PageContentComponentConfig = {
  type: "orderedList";
  value: string[];
} | {
  type: "unorderedList";
  value: string[];
} | {
  type: "contentEditor",
} | {
  type: "code",
  language: string;
  lines: string[];
};

export type PageContentConfig = string | PageContentComponentConfig;

export interface PageConfig {
  path: string;
  title: string;
  content: PageContentConfig[];
  hideFromNav?: boolean;
}

export interface ContentConfig {
  title: string;
  pages: PageConfig[];
  allowThemeChange?: boolean;
  allowEditMode?: boolean;
}

export const content: ContentConfig = {
  "allowThemeChange": true,
  "allowEditMode": true,
  "title": "**floydjdx**.github.io",
  "pages": [
    {
      "path": "/",
      "title": "Home",
      "content": [
        "My name is **Jordan Floyd** and this is my blog. I'm a full-stack software engineer who believes in a holistic approach to problem solving. I intend to fill this blog with a collection of my thoughts on software development and some code I've written in my free time. Predictably, this blog is an example of the latter.",
        "I've created this site using React, but all of the content is stored in a single JSON object, which can be seen and edited below.",
        {
          "type": "contentEditor",
        },
        "You can add a new page by copying",
        {
          "type": "code",
          "language": "json",
          "lines": [
            "{",
            "  \"path\": \"/my-page\",",
            "  \"title\": \"My Page\",",
            "  \"content\": [\"Hello world\"]",
            "}",
          ],
        },
        "into the \"pages\" array.",
        "See more about how I created this blog in [Blog Configs](blog-configs)",
      ],
    },
    {
      "path": "/blog-configs",
      "title": "Blog Configs",
      "hideFromNav": true,
      "content": [
        "Here I will explain how I approached making this configurable blog.",
        "# Config",
        {
          "type": "contentEditor",
        },
        "At the top level, the config describes the structure of the blog but most of the content is contained in the \"pages\", and more specifically the \"content\" properties of each page. Each value in the \"content\" array is either a string, which is interpretted as Markdown, or an object, which must contain a \"type\" property so the app knows how it should be interpretted.",
        {
          "type": "code",
          "language": "typescript",
          "lines": [
            "const getComponent = (contentItem) => {",
            "  if (contentItem.type === \"unorderedList\") return <List ... />;",
            "  if (contentItem.type === \"orderedList\") return <List ... />;",
            "  if (contentItem.type === \"contentEditor\") return <Editor ... />;",
            "  if (contentItem.type === \"code\") return ...",
          ],
        },
        "Every type corresponds to a component type and any additional fields can be used as props.",
        "# Config Builder",
        "While editing the config directly works, it isn't ideal. It's especially cumbersome for component types like \"code\" where you need to escape a lot of quotes and seperate lines manually. To improve upon this, I created a blog config builder.",
      ],
    },
  ],
};
