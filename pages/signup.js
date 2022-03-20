import React from 'react'

function signup() {
  return (
    <div>
        <section className="min-h-screen flex flex-col">
            <div className="flex flex-1 items-center justify-center">
                <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                    <form className="text-center">
                        <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                            Sign up
                        </h1>
                        <div className="py-2 text-left">
                            <input type="email" className="bg-gray-200 border-2 border-gray-100 focus:outline-non block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Email" />
                        </div>
                        <div className="py-2 text-left">
                            <input type="company" className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Company Name" />
                        </div>
                        <div className="py-2 text-left">
                            <input type="password" className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Password" />
                        </div>
                        <div className="py-2 mt-6">
                            <button type="submit" className="border-2 border-blie-500 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    </div>

  )


}

export default signup