import { useEffect } from "react";
import useBlogsContext from "../hooks/useBlogsContext";
import { ContextType } from "../contexts/BlogsContext";
import BlogDetails from "../components/BlogDetails";

const Home = () => {
  const { state, dispatch } = useBlogsContext() as ContextType;

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("http://localhost:4000/blogs");
      const json = await res.json();

      if (res.ok) {
        dispatch({ type: "get_blogs", payload: json });
      }
    };

    fetchBlogs();
  }, [dispatch]);

  return (
    <main className="mt-5 flex flex-col items-center">
      <h2 className="text-3xl font-bold">
        Blogs{" "}
        <span className="align-middle text-base font-medium text-slate-500">
          ({state.blogs.length})
        </span>
      </h2>

      <section className="mt-4 space-y-2">
        {state.blogs?.map((blog) => <BlogDetails key={blog._id} blog={blog} />)}
      </section>
    </main>
  );
};

export default Home;
