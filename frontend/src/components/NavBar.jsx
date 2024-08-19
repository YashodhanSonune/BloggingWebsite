import React from 'react'

function NavBar({onSignInClick}) {
  return (
    <div className="w-full px-4 py-4 flex justify-between text-black item-center bg-slate-300">
        {/* <div className="icon flex px-8">
            <h1>SVG</h1>
        </div> */}
        <div className="name px-4">
            <img className="relative h-16 w-16" src="./images/MainSorry.png" alt="Logo" />
        </div>
        <div className="links flex gap-12 px-4 text-sm">
            {/* <button className="font-gloria text-md">
                Create Your DoppelBlogger
            </button> */}
            <div className="flex gap-4 font-bold text-oswald">
                <button className="transition-colors duration-100 ease-in border-[1px] hover:bg-zinc-700 hover:text-white border-zinc-700 rounded-2xl px-4 text-black">
                    Home
                </button>
                <button className="transition-colors duration-100 ease-in border-[1px] hover:bg-zinc-700 hover:text-white border-zinc-700 rounded-2xl px-4 text-black">
                    About Us
                </button>
                <button 
                    onClick={onSignInClick}
                    className="transition-colors duration-100 ease-in border-[1px] hover:bg-zinc-700 hover:text-white border-zinc-700 rounded-2xl px-4 py-1 text-black">
                    Sign In
                </button>
            </div>
        </div>
    </div>
  )
}

export default NavBar