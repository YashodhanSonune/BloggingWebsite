import React from 'react'

function SignIn() {
  return (
    <div className="flex items-center justify-center">
        <div className="flex bg-zinc-200 w-1/4 rounded-lg flex-col justify-center px-8 py-12 border-zinc-500">
            <div>
                <h2 className="mt-10 text-center text-3xl font-semibold font-oswald leading-9 text-zinc-800">
                    Sign In
                </h2>
            </div>
            <div className="mt-10">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label for="email" className="block pl-3 font-oswald text-lg font-medium leading-6 text-gray-700">Username</label>
                        <div className="mt-2">
                            <input 
                                id="email" name="email" type="email" autocomplete="email" required className="block w-full bg-zinc-200 rounded-xl border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-black"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label for="password" className="block pl-3 font-oswald text-lg font-medium leading-6 text-gray-700">Password</label>
                                <div class="text-sm">
                                    <a href="#" className="font-bold font-gloria text-zinc-500 pr-4">Forgot password?</a>
                                </div>
                        </div>
                        <div className="mt-2">
                            <input 
                                id="password" name="password" type="password" autocomplete="current-password" required className="block w-full bg-zinc-200 rounded-xl border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-black" 
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button 
                            type="submit" className="flex border-[1px] border-zinc-700 font-oswald w-1/3 justify-center rounded-xl mt-10 bg-zinc-200 px-3 py-1.5 text-xl leading-6 text-zinc-700 shadow-sm hover:bg-zinc-700 hover:text-zinc-100 focus:outline-none">Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignIn