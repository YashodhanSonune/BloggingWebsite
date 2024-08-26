import React, { useEffect, useState } from "react";
import BlogComp from "./BlogComp";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CategoriesBar from "./CategoriesBar";
import Filler from "./Filler";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        setFilteredBlogs(data);
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredBlogs(
        blogs.filter((blog) => blog.category.includes(selectedCategory))
      );
    } else {
      setFilteredBlogs(blogs);
    }
  }, [selectedCategory, blogs]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <CategoriesBar onCategorySelect={handleCategorySelect} />
      <Filler />
      <div className="container mx-auto pt-10 w-full min-h-screen bg-[url('./images/MainSorry.png')] bg-blend-soft-light bg-contain bg-repeat-y bg-slate-300">
        {filteredBlogs.map((blog, index) => (
          <Link key={blog.id} to={`/blogs/${blog.id}`}>
            <BlogComp
              key={blog.id}
              title={blog.title}
              body={blog.body}
              author={blog.author}
              category={blog.category}
              isFirst={index === 0}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
