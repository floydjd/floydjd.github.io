export type PageContentConfig = string | {
  type: "orderedList";
  value: string[];
} | {
  type: "unorderedList";
  value: string[];
} | {
  type: "contentEditor",
};

export interface PageConfig {
  path: string;
  title: string;
  content: PageContentConfig[];
}

export interface ContentConfig {
  title: string;
  pages: PageConfig[];
  allowThemeChange?: boolean;
}

export const content: ContentConfig = {
  "allowThemeChange": true,
  "title": "floydjdx.github.io",
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
        "```json\\\n{ \n  \"path\": \"/my-page\", \n  \"title\": \"My Page\", \n  \"content\": [\"Hello world\"] \n}\n```",
        "into the \"pages\" array.",
      ],
    },
  ],
};
