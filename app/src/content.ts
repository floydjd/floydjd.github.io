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
  allowDarkMode?: boolean;
}

export const content: ContentConfig = {
  "allowDarkMode": true,
  "title": "Jordan Floyd",
  "pages": [
    {
      "path": "/",
      "title": "Home",
      "content": [
        "My name is **Jordan Floyd**.",
      ],
    },
    {
      "path": "/editor",
      "title": "Editor",
      "content": [
        "All of the content for this site is stored in a JSON object. You can edit this JSON object below to see how changes effect the site.",
        "_(Don't worry, the changes are not saved.)_",
        {
          type: "contentEditor",
        },
      ],
    },
  ],
};
