import { createContext, useReducer } from "react";

type Blog = {
  _id: string
  author: string;
  title: string;
  content: string;
  createdAt: string 
};
type BlogsState = {
  blogs: Blog[];
};

type Action = {
  type: string;
  payload: any;
};
export type ContextType = {
  state: BlogsState;
  dispatch: React.Dispatch<Action>;
};

const blogsReducer = (state: BlogsState, action: Action) => {
  switch (action.type) {
    case "get_blogs":
      return {
        blogs: action.payload,
      };
    case "create_blog":
      return {
        blogs: [action.payload, ...state.blogs],
      };
    default:
      return state;
  }
};

export const blogsContext = createContext<ContextType | null>(null);
const BlogsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(blogsReducer, { blogs: [] });

  return (
    <blogsContext.Provider value={{ state, dispatch }}>
      {children}
    </blogsContext.Provider>
  );
};

export default BlogsContextProvider;
