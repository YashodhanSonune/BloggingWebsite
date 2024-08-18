import React, { useState } from 'react'

function CategoriesBar() {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  
  const toggleDropDown = () => {
    setDropDownOpen(!dropDownOpen);
  }

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
    "Art"
  ];

  return (
    <div className="w-full flex items-center h-16 text-oswald font-semibold text-zinc-700 bg-gray-300">
        <div className="relative w-full">
            <button className="pl-8 pr-12">
                Trending
            </button>
            <button>
                Most Popular
            </button>
        </div>
        <button className="flex px-8" onClick={toggleDropDown}>
            <div className="mr-1">
                Categories
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
        {dropDownOpen && (
          <div className="absolute right-0 mt-72 w-48 bg-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {categories.map((category, index) => (
              <a key={index} href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                {category}
              </a>
            ))}
          </div>
        )}
    </div>
  )
}

export default CategoriesBar