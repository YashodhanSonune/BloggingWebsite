import React, { useEffect, useState } from "react";
import BlogComp from "./BlogComp";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div className="container mx-auto pt-10 w-full min-h-screen bg-[url('./images/MainSorry.png')] bg-blend-soft-light bg-contain bg-repeat-y bg-slate-300">
      {blogs.map((blog, index) => (
        <Link key={blog.id} to={`/blogs/${blog.id}`}>
          <BlogComp
            key={blog.id}
            title={blog.title}
            body={blog.body}
            author={blog.author}
            isFirst={index === 0}
          />
        </Link>
      ))}
    </div>
  );
}

export default Home;
