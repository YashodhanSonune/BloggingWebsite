import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Filler from "./Filler";

const SingleBlog = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div className="blog-details mt-10">
      {isPending && <div className="font-oswald text-center">Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article className="flex w-full h-screen px-14">
          <div>
            <h2 className="font-oswald text-6xl text-center">{blog.title}</h2>
            <p className="font-oswald text-center mt-2 mb-6">
              Written by {blog.author}
            </p>
            <Filler />
            <div className="text-justify mt-10">{blog.body}</div>
          </div>
        </article>
      )}
    </div>
  );
};

export default SingleBlog;
