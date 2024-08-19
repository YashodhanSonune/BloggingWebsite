import React, { useState } from "react";

function CategoriesBar() {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("");

  const toggleDropDown = () => {
    setDropDownOpen(!dropDownOpen);
  };

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const categories = [
    "Technology",
    "Health",
    "Travel",
    "Lifestyle",
    "Finance",
    "Education",
    "Food",
    "Entertainment",
    "Sports",
    "Fashion",
    "Literature",
    "Computer Science",
    "Art",
  ];

  return (
    <div className="w-full flex items-center h-16 text-oswald font-semibold text-zinc-700 bg-slate-300">
      <div className="relative w-full">
        <button
          className={`pl-8 pr-12 ${
            activeButton === "For You" ? "underline underline-offset-4" : ""
          }`}
          onClick={() => handleClick("For You")}
        >
          For You
        </button>
        <button
          className={`pr-12  ${
            activeButton === "Following" ? "underline underline-offset-4" : ""
          }`}
          onClick={() => handleClick("Following")}
        >
          Following
        </button>
        <button
          className={`pr-12 ${
            activeButton === "Trending" ? "underline underline-offset-4" : ""
          }`}
          onClick={() => handleClick("Trending")}
        >
          Trending
        </button>
        <button
          className={`${
            activeButton === "Most Popular"
              ? "underline underline-offset-4"
              : ""
          }`}
          onClick={() => handleClick("Most Popular")}
        >
          Most Popular
        </button>
      </div>
      <button className="flex px-8" onClick={toggleDropDown}>
        <div className="mr-1">Categories</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {dropDownOpen && (
        <div className="absolute right-0 mt-72 w-48 bg-slate-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {categories.map((category, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              {category}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoriesBar;
