import React, { useEffect, useState } from 'react'
import BlogComp from './BlogComp';
import Filler from './Filler';

function Home() {
  const [blogs, setBlogs] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error('Error fetching blogs:', error));
  }, []);
 
  return (
    <div className="container mx-auto pt-10">
      {blogs.map((blog, index) => (
        <BlogComp key={blog.id} title={blog.title} body={blog.body} author={blog.author} isFirst={index === 0}/>
      ))}
    </div>
  )
}

export default Home