import { useLocation } from "react-router-dom";
import { PageConfig } from "../../../../blog";
import { useBlog } from "../../../state";

export const useActivePage = () => {
  const { blog, setBlog } = useBlog();
  const { pathname } = useLocation();

  const targetPage = blog.pages.filter(p => p.path === pathname).at(-1);
  const notFoundPage: PageConfig = {
    title: "Page Not Found",
    path: pathname,
    content: [
      `Could not find page at ${pathname}`,
    ],
  };

  const page = targetPage || notFoundPage;
  const pageIndex = blog.pages.indexOf(page);

  const setPage: React.Dispatch<React.SetStateAction<PageConfig>> = (dispatch) => {
    if (pageIndex >= 0) {
      setBlog(prevBlog => ({
        ...prevBlog,
        pages: prevBlog.pages.map((p, i) => i === pageIndex ? (typeof dispatch === "function" ? dispatch(p) : dispatch) : p),
      }));
    }
  };

  return { page, setPage };
};
