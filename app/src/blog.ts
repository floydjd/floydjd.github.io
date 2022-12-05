export type PageContentComponentConfig = {
  type: "orderedList";
  value: string[];
} | {
  type: "unorderedList";
  value: string[];
} | {
  type: "blogEditor",
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
  showInNav?: boolean;
}

export interface BlogConfig {
  title: string;
  pages: PageConfig[];
  allowThemeChange?: boolean;
  allowEditMode?: boolean;
}

export const blog: BlogConfig = {
  "allowThemeChange": true,
  "allowEditMode": true,
  "title": "**floydjdx**.github.io",
  "pages": [
    {
      "path": "/",
      "title": "Home",
      "content": [
        "My name is **Jordan Floyd** and this is my blog. I'm a full-stack software engineer who believes in a holistic approach to problem solving. I intend to fill this blog with a collection of my thoughts on software development and some code I've written in my free time. Predictably, this blog is an example of the latter.",
        "I've created this blog using React, with all of the content is stored in a single JSON object, which can be seen and edited below.",
        "_(Don't worry, the object is stored in local state, so your changes won't be saved.)_",
        {
          "type": "blogEditor",
        },
        "You can add a new page by copying",
        {
          "type": "code",
          "language": "json",
          "lines": [
            "{",
            "  \"path\": \"/my-page\",",
            "  \"title\": \"My Page\",",
            "  \"content\": [\"Hello world\"],",
            "  \"showInNav\": true",
            "}",
          ],
        },
        "into the \"pages\" array.",
        "See more about how I created this blog in [Blog Configs](blog-configs#)",
      ],
    },
    {
      "path": "/about",
      "title": "About",
      "showInNav": true,
      "content": [
        "I have been a senior software engineer for the past six years, specializing in a wide range of areas including web development, mobile development, and backend architecture. During my career, I have had the opportunity to work with a variety of technologies and platforms, such as JavaScript, React, Node.js, and Kubernetes. I take pride in my ability to quickly learn and adapt to new technologies and I am always looking for ways to improve and optimize existing systems.",

        "I am most passionate about creating high-quality, reliable software that meets the needs of its users. I am an effective communicator and enjoy working with teams to ensure that all stakeholders have a clear understanding of the project goals and how best to achieve them. I am excited to be part of a team that is passionate about their work and dedicated to delivering results.",
        
        "My ultimate goal is to be at the leading edge of technology, developing software solutions that are both innovative and reliable. I am looking for an opportunity that will allow me to continue to grow and develop my skills and expertise, while also providing a competitive compensation package.",
      ],
    },
    {
      "path": "/blog-configs",
      "title": "Blog Configs",
      "content": [
        "# Blog Configs",
        "Here I will explain how I approached making this configurable blog.",
        {
          "type": "blogEditor",
        },
        "At the top level, the config describes the structure of the blog but most of the content is contained in the \"pages\", and more specifically the \"content\" properties of each page. Each value in the \"content\" array is either a string, which is interpretted as Markdown, or an object, which must contain a \"type\" property so the app knows how it should be interpretted.",
        {
          "type": "code",
          "language": "typescript",
          "lines": [
            "const getContentItem = (item) => {",
            "  if (item.type === \"unorderedList\") return <List ... />;",
            "  if (item.type === \"orderedList\") return <List ... />;",
            "  if (item.type === \"contentEditor\") return <Editor ... />;",
            "  if (item.type === \"code\") return ...",
          ],
        },
        "Every type corresponds to a component type and any additional fields can be used as props.",
        "# Config Edit Mode",
        "While editing the config directly works, it isn't ideal. To improve upon this, I created an edit mode, which can be enabled by pressing the wrench icon in the top right corner.",
      ],
    },
  ],
};
