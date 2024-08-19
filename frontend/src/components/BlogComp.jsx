import React from "react";

const BlogComp = ({ title, body, author, category, isFirst }) => {
  return (
    <div
      className={`${
        isFirst ? "mt-10" : ""
      } p-8 hover:bg-slate-200 hover:rounded-xl hover:transition-colors hover:duration-200 hover:ease-in`}
    >
      <div className="font-oswald flex">
        <h2 className="text-3xl w-full pb-10 underline underline-offset-4">
          {title}
        </h2>
        <div className="flex mt-4 pr-12 gap-2 underline underline-offset-4">
          <p className="">By</p>
          <p>{author}</p>
        </div>
      </div>
      <p className="line-clamp-4">{body}</p>
      <div className="mt-4">
        {category.map((category, index) => (
          <span
            key={index}
            className="bg-slate-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-lg"
          >
            {category}
          </span>
        ))}
      </div>
      <hr className="mt-4 border-zinc-400" />
    </div>
  );
};

export default BlogComp;
