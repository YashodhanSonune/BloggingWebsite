import React from "react";

function SignIn() {
  return (
    <div className="signin flex my-10 items-center justify-center">
      <div className="flex w-1/3 z-[999] bg-slate-200 rounded-lg flex-col justify-center px-8 py-12 ">
        <div className="flex justify-end pb-12"></div>
        <div className="flex justify-center items-center">
          <img
            className="relative h-[150px] w-[150px]"
            src="./images/MainSorry.png"
            alt="Logo"
          />
        </div>
        <div className="mt-10">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                for="email"
                className="block pl-3 font-oswald text-lg font-medium leading-6 text-black"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  className="block w-full rounded-xl border-0 px-4 py-1.5 text-black shadow-sm ring-1 ring-inset ring-zinc-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-black"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  for="password"
                  className="block pl-3 font-oswald text-lg font-medium leading-6 text-black"
                >
                  Password
                </label>
                <div class="text-sm">
                  <a
                    href="#"
                    className="font-bold font-gloria text-zinc-500 pr-4"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  className="block w-full rounded-xl border-0 px-4 py-1.5 text-black shadow-sm ring-1 ring-inset ring-zinc-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-black"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="flex border-[1px] border-black font-oswald w-1/3 justify-center rounded-xl mt-10 px-3 py-1.5 font-semibold text-xl leading-6 text-black shadow-sm hover:bg-black hover:text-white focus:outline-none"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
