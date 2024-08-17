import React from 'react'

function NavBar({onSignInClick}) {
  return (
    <div className="w-full px-[1rem] py-8 flex justify-between text-black item-center">
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
                <button className="border-[1px] hover:bg-zinc-700 hover:text-white border-zinc-700 rounded-2xl px-4 py-1 text-black">
                    About Us
                </button>
                <button 
                    onClick={onSignInClick}
                    className="border-[1px] hover:bg-zinc-700 hover:text-white border-zinc-700 rounded-2xl px-4 py-1 text-black">
                    Sign In
                </button>
            </div>
        </div>
    </div>
  )
}

export default NavBar