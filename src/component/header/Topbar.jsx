import React from 'react'
import { ListTodo } from 'lucide-react';

const Topbar = () => {
    return (
        <div className='py-2 px-4 border-b border-neutral-200 sm:px-6 sm:py-0 lg:px-2 lg:py-4'>
            <div className="flex flex-wrap items-center justify-between">
                <div className="flex w-0 flex-1 items-center">
                    <p className="ml-3 text-center font-medium leading-5 sm:text-left">
                        <span className="flex items-center gap-2"><ListTodo /> Workspace Name</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Topbar