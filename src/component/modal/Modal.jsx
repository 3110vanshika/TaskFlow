import React from 'react'

const Modal = ({ onClose }) => {
    return (
        <div className="sm:w-[32rem] shadow-blue-100 mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
            <div className="relative py-6 pl-8 text-xl font-semibold uppercase tracking-wider">
                Create Space
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-0 m-5 h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} onClick={onClose}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <div className="space-y-4 px-8">
                <form className="flex flex-col pt-3 md:pt-8">
                    <div className="flex flex-col pt-4 mb-5">
                        <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                            <input type="text" id="login-email" className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Space name" />
                        </div>
                    </div>
                    <button type="submit" className="w-full mb-5 cursor-pointer rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2">Continue</button>
                </form>
            </div>
        </div>

    )
}

export default Modal