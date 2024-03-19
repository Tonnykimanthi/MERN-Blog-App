import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditBlogForm from "../components/EditBlogForm";

type Blog = {
  _id: string;
  author: string;
  title: string;
  content: string;
  createdAt: string;
};

const Blog = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setiSLoading] = useState(true);
  const id = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`http://localhost:4000/blogs/${id.id}`);
        const json = await res.json();

        if (res.ok) {
          setBlog(json);
          setiSLoading(false);
        }
      } catch (error) {
        console.log(error);
        setiSLoading(false);
      }
    };
    fetchBlog();
  }, []);

  return (
    <div className="h-screen bg-sky-100/10 py-2">
      {isLoading && <p>isLoading...</p>}
      {!isLoading && blog && (
        <article className="flex flex-col px-5">
          <EditBlogForm _id={blog._id} _author={blog.author} _title={blog.title} _content={blog.content}/>
          <div className="relative">
            <h5 className="mx-auto max-w-3xl text-center text-3xl font-medium">
              {blog.title}
            </h5>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 font-medium text-sky-600">
              {new Date(blog.createdAt).toDateString()}
            </span>
          </div>
          <p className="mt-2 text-center text-lg leading-tight">
            {blog.content}
          </p>
          <p className="mt-2 self-center font-medium">
            Written by: {blog.author}
          </p>
        </article>
      )}
    </div>
  );
};

export default Blog;
