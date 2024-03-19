import { Link, useLocation } from "react-router-dom";
import { ContextType } from "../contexts/BlogsContext";
import useBlogsContext from "../hooks/useBlogsContext";

const Header = () => {
  const { setFormIsOpen, setEditFormIsOpen } = useBlogsContext() as ContextType;
  const url = useLocation();

  return (
    <header className="flex items-center justify-between bg-white px-5 py-4">
      <Link to="/" className="text-2xl font-bold">Blog App</Link>
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
        <button
          className="w-32 rounded bg-green-500 py-2 text-white"
          onClick={() => {
            setEditFormIsOpen((prev) => !prev);
          }}
        >
          Edit
        </button>
      )}
    </header>
  );
};

export default Header;
