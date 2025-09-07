import React from 'react'
import { Link } from 'react-router-dom'
import workspace from '../../assets/workspace.jpg'
import { ListTodo } from 'lucide-react';

const Workspace = () => {
    return (
        <div className="flex flex-wrap">
            <div className="flex w-full flex-col md:w-1/2">
                <div className="flex justify-center pt-12 md:-mb-24 md:justify-start md:pl-12">
                    <Link href="#" className="flex items-center gap-2 border-b-gray-700 pb-2 text-2xl font-bold text-gray-900"> <ListTodo /> TaskFlow </Link>
                </div>
                <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
                    <p className="text-left text-3xl font-bold">Create Your Workspace</p>
                    <p className="mt-2 text-left text-gray-500">Set up your workspace to organize tasks, projects, and teams in one place.</p>
                    <form className="flex flex-col pt-3 md:pt-8">
                        <div className="flex flex-col pt-4 mb-10">
                            <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                                <input type="email" id="login-email" className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Workspace name" />
                            </div>
                        </div>
                        <button type="submit" className="w-full cursor-pointer rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2">Create your workspace</button>
                    </form>
                    {/* <div className="py-12 text-center">
                        <p className="whitespace-nowrap text-gray-600">
                            Don't have an account?
                            <Link to='/signup' className="underline-offset-4 font-semibold text-gray-900 underline ml-2">Sign up </Link>
                        </p>
                    </div> */}
                </div>
            </div>
            <div className="pointer-events-none relative h-screen select-none md:block md:w-1/2">
                <img
                    className="-z-1 absolute top-0 h-full w-full object-contain opacity-90"
                    src={workspace}
                />
            </div>
        </div>


    )
}

export default Workspace