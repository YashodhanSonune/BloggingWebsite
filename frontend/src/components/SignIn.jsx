import React from 'react'

function SignIn({onClose}) {
  return (
    <div className="signin flex items-center justify-center">
        <div className="flex w-1/3 z-[999] bg-slate-100 rounded-lg flex-col justify-center px-8 py-12 border-black">
            <div className="flex justify-end pb-12">
                <button 
                    onClick={onClose}>
                        <svg className="h-8 w-8 text-zinc-500 hover:text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
                </button>
            </div>
            <div className="flex justify-center items-center">
                <img className="relative h-[150px] w-[150px]" src="./images/MainSorry.png" alt="Logo" />
            </div>
            <div className="mt-10">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label for="email" className="block pl-3 font-oswald text-lg font-medium leading-6 text-black">Username</label>
                        <div className="mt-2">
                            <input 
                                id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-xl border-0 px-4 py-1.5 text-black shadow-sm ring-1 ring-inset ring-zinc-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-black"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label for="password" className="block pl-3 font-oswald text-lg font-medium leading-6 text-black">Password</label>
                                <div class="text-sm">
                                    <a href="#" className="font-bold font-gloria text-zinc-500 pr-4">Forgot password?</a>
                                </div>
                        </div>
                        <div className="mt-2">
                            <input 
                                id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-xl border-0 px-4 py-1.5 text-black shadow-sm ring-1 ring-inset ring-zinc-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-black" 
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button 
                            type="submit" className="flex border-[1px] border-black font-oswald w-1/3 justify-center rounded-xl mt-10 px-3 py-1.5 font-semibold text-xl leading-6 text-black shadow-sm hover:bg-black hover:text-white focus:outline-none">Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignIn