import { useEffect, useState } from "react";
import useBlogsContext from "../hooks/useBlogsContext";
import { ContextType } from "../contexts/BlogsContext";

type Blog = {
  _id: string;
  _author: string;
  _title: string;
  _content: string;
};

const EditBlogForm = ({ _id, _author, _title, _content }: Blog) => {
  const { dispatch, editFormIsOpen, setEditFormIsOpen } =
    useBlogsContext() as ContextType;
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setAuthor(_author);
    setTitle(_title);
    setContent(_content);
  }, []);
  const fetchBlog = async () => {
    setIsLoading(true);
    const blog = { author, title, content };
    try {
      const res = await fetch(`http://localhost:4000/blogs/update/${_id}`, {
        method: "PUT",
        body: JSON.stringify(blog),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await res.json();
      dispatch({ type: "update", payload: json });
      setIsLoading(false);
      setEditFormIsOpen(false)
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <form
      className={`absolute left-1/2 top-1/2 z-10 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 space-y-4 rounded-md border border-green-100 bg-white p-5 shadow-lg shadow-green-50 [&>div>input]:outline-none [&>div>label]:text-lg [&>div>label]:font-medium [&>div]:grid ${editFormIsOpen ? "" : "hidden"}`}
    >
      <div>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          value={author}
          className="border px-3 py-2 focus:border-sky-200"
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          className="border px-3 py-2 focus:border-sky-200"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          rows={5}
          value={content}
          className="border px-3 py-2 outline-none focus:border-sky-200"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <input type="text" name="content" />
      </div>

      <input
        type="button"
        value={isLoading ? "Updating..." : "Edit blog"}
        className="mx-auto block w-40 cursor-pointer rounded bg-green-500 py-2 text-white transition hover:bg-green-500"
        onClick={fetchBlog}
      />
    </form>
  );
};

export default EditBlogForm;
