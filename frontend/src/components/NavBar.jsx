import React from 'react'

function NavBar() {
  return (
    <div className="w-full px-[1rem] py-8 flex justify-between text-zinc-700 item-center bg-zinc-200">
        {/* <div className="icon flex px-8">
            <h1>SVG</h1>
        </div> */}
        <div className="flex name text-center text-4xl px-8 font-gloria">
            <h1>DoppelBlogger</h1>
        </div>
        <div className="links flex gap-12 px-4 text-sm">
            <button className="font-gloria text-md">
                Create Your DoppelBlogger
            </button>
            <div className="flex gap-4 font-semibold text-oswald">
                <button className="border-[1px] hover:bg-zinc-700 hover:text-zinc-200 border-zinc-700 rounded-2xl px-4 py-2 bg-zinc-200 text-zinc-700">
                    About Us
                </button>
                <button className="border-[1px] hover:bg-zinc-700 hover:text-zinc-200 border-zinc-700 rounded-2xl px-4 py-2 bg-zinc-200 text-zinc-700">
                    Sign In
                </button>
            </div>
        </div>
    </div>
  )
}

export default NavBar