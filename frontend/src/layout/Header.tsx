import { useLocation } from "react-router-dom";
import { ContextType } from "../contexts/BlogsContext";
import useBlogsContext from "../hooks/useBlogsContext";

const Header = () => {
  const { setFormIsOpen } = useBlogsContext() as ContextType;
  const url = useLocation();

  return (
    <header className="flex items-center justify-between bg-white px-5 py-4">
      <h1 className="text-2xl font-bold">Blog App</h1>
      {url.pathname === "/" ? (
        <button
          className="w-32 rounded bg-sky-500 py-2 text-white"
          onClick={() => {
            setFormIsOpen((prev) => !prev);
          }}
        >
          Add Blog
        </button>
      ) : (
        <button className="w-32 rounded bg-green-500 py-2 text-white">
          Edit
        </button>
      )}
    </header>
  );
};

export default Header;
