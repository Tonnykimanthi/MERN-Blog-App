import { Link } from "react-router-dom";
import { Blog, ContextType } from "../contexts/BlogsContext";
import useBlogsContext from "../hooks/useBlogsContext";

type BlogDetails = {
  blog: Blog;
};

const BlogDetails = ({ blog }: BlogDetails) => {
  const { dispatch } = useBlogsContext() as ContextType;
  const handleDelete = async () => {
    const id = blog._id;
    const res = await fetch(`http://localhost:4000/blogs/delete/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      dispatch({ type: "delete_blog", payload: id });
    }
  };

  return (
    <div className="flex max-w-lg justify-between bg-slate-50 p-4 sm:min-w-96">
      <article>
        <h4 className="font-medium text-slate-500">author ({blog.author})</h4>
        <h3 className="text-2xl font-medium">{blog.title}</h3>
        <p className="leading-tight">{blog.content}</p>
        <Link
          to={`blogs/${blog._id}`}
          className="mt-2 inline-block rounded-sm bg-black px-2 py-1 text-sm text-white"
        >
          Read more
        </Link>
      </article>
      <button className="self-start text-red-500" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default BlogDetails;
