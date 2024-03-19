import { createContext, useReducer, useState } from "react";

export type Blog = {
  _id: string;
  author: string;
  title: string;
  content: string;
  createdAt: string;
};
type BlogsState = {
  blogs: Blog[];
  singleBlog?: Blog;
};

type Action = {
  type: string;
  payload: any;
};
export type ContextType = {
  state: BlogsState;
  dispatch: React.Dispatch<Action>;
  formIsOpen: boolean;
  setFormIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const blogsReducer = (state: BlogsState, action: Action) => {
  switch (action.type) {
    case "get_blogs":
      return {
        blogs: action.payload,
      };
    case "get_single_blog":
      return {
        blogs: action.payload,
      };
    case "create_blog":
      return {
        ...state,
        blogs: [action.payload, ...state.blogs],
      };
    case "delete_blog":
      return {
        blogs: state.blogs.filter((blog: Blog) => blog._id !== action.payload),
      };
    default:
      return state;
  }
};

export const blogsContext = createContext<ContextType | null>(null);
const BlogsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(blogsReducer, { blogs: [] });
  const [formIsOpen, setFormIsOpen] = useState(false);

  return (
    <blogsContext.Provider
      value={{ state, dispatch, formIsOpen, setFormIsOpen }}
    >
      {children}
    </blogsContext.Provider>
  );
};

export default BlogsContextProvider;
