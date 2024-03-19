import { useState } from "react";
import useBlogsContext from "../hooks/useBlogsContext";
import { ContextType } from "../contexts/BlogsContext";

const AddBlogForm = () => {
  const { dispatch, formIsOpen, setFormIsOpen } =
    useBlogsContext() as ContextType;

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateBlog = async () => {
    setIsLoading(true);
    const blog = { author, title, content };
    const res = await fetch("http://localhost:4000/blogs/create", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();

    if (res.ok) {
      setAuthor("");
      setTitle("");
      setContent("");
      setFormIsOpen(false);
      setIsLoading(false);
      dispatch({ type: "create_blog", payload: json });
    }
  };

  return (
    <form
      className={`absolute left-1/2 top-1/2 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 space-y-4 rounded-md border border-sky-100 bg-white p-5 shadow-lg shadow-sky-50 [&>div>input]:outline-none [&>div>label]:text-lg [&>div>label]:font-medium [&>div]:grid ${formIsOpen ? "" : "hidden"}`}
    >
      <div>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          className="border px-3 py-2 focus:border-sky-200"
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          className="border px-3 py-2 focus:border-sky-200"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          rows={5}
          className="border px-3 py-2 outline-none focus:border-sky-200"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <input type="text" name="content" />
      </div>

      <input
        type="button"
        value={isLoading ? "Adding..." : "Create blog"}
        className="mx-auto block w-40 cursor-pointer rounded bg-sky-400 py-2 text-white transition hover:bg-sky-500"
        onClick={handleCreateBlog}
      />
    </form>
  );
};

export default AddBlogForm;
