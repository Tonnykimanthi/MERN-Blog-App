import { useEffect, useState } from "react";

type Blogs = {
  _id: number;
  author: string;
  title: string;
  content: string;
  createdAt: string;
}[];

const Main = () => {
  const [blogs, setBlogs] = useState<Blogs | null>([]);

  useEffect(() => {
    const handleFetch = async () => {
      const res = await fetch("http://localhost:4000/blogs");
      const json = await res.json();

      if (res.ok) {
        setBlogs(json);
      }
    };

    handleFetch();
  }, []);

  return (
    <main className="mt-5 flex flex-col items-center">
      <h2 className="text-3xl font-bold">
        Blogs{" "}
        <span className="align-middle text-base font-medium text-slate-500">
          (3 blogs)
        </span>
      </h2>

      <section className="mt-4 space-y-2">
        {blogs?.map((blog) => (
          <article
            key={blog._id}
            className="max-w-lg bg-slate-50 p-4 sm:min-w-96"
          >
            <h4 className="font-medium text-slate-500">
              author ({blog.author})
            </h4>
            <h3 className="text-2xl font-medium">{blog.title}</h3>
            <p className="leading-tight">{blog.content}</p>
            <small className="mt-2 block text-sm text-slate-600">
              {new Date(blog.createdAt).toDateString()}
            </small>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Main;
