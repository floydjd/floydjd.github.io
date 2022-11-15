export type PageContentConfig = string | {
  type: "orderedList";
  value: string[];
} | {
  type: "unorderedList";
  value: string[];
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
        "My name is Jordan Floyd.",
        "Here is a link to [Google](https://google.com).",
        "Here is an ordered list",
        {
          "type": "orderedList",
          "value": [
            "This is a **test item**",
            "Item 2",
            "Item 3",
          ],
        },
        "Here is an unordered list",
        {
          "type": "unorderedList",
          "value": [
            "This is a **test item**",
            "Item 2",
            "Item 3",
          ],
        },
      ],
    },
    {
      "path": "/about",
      "title": "About",
      "content": [
        "**Lorem** ipsum dolor sit amet, consectetur adipiscing elit.",
        "Nulla urna purus, ultricies vel vestibulum eget, tempus eu urna.",
        "Donec dictum, velit a tempor volutpat, nunc lorem accumsan urna, et hendrerit nibh sem ac leo.",
      ],
    },
  ],
};
