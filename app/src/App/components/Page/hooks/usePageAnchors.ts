import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Y_OFFSET = -75;

export const usePageAnchors = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash === "") {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: yCoordinate + Y_OFFSET, behavior: "smooth" }); 
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change
};