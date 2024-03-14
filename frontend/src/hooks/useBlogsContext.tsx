import { useContext } from "react";
import { blogsContext } from "../contexts/BlogsContext";

const useBlogsContext = () => {
  const context = useContext(blogsContext);

  return context;
};

export default useBlogsContext;
