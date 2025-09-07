import { ClipboardClock, LayoutGrid, Plus, Snowflake, Users } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../modal/Modal'

const Sidebar = () => {
    const [activeLink, setActiveLink] = useState('dashboard')
    const [showModal, setShowModal] = useState(false)
    return (
        <div className='py-2 px-4 h-screen w-[256px] border-r border-neutral-200 sm:px-6 sm:py-0 lg:px-5 lg:py-4'>
            <span class="ml-1 mt-10 mb-2 block text-xs font-semibold text-gray-500">Analytics</span>
            <div className='flex mt-3 flex-1 flex-col space-y-2'>
                <div className="flex-1">
                    <Link className={`flex cursor-pointer items-center py-2 px-4 text-sm text-neutral-600 font-medium hover:bg-[#d9c5c4] ${activeLink === 'dashboard' ? 'border-l-4 border-l-[#d9c5c4]' : ''}`}>
                        <LayoutGrid className='w-4 h-4 mr-2' />
                        Dashboard</Link>
                </div>
                <div className="flex-1">
                    <Link className={`flex cursor-pointer items-center py-2 px-4 text-sm text-neutral-600 font-medium hover:bg-[#d9c5c4] ${activeLink === 'timesheet' ? 'border-l-4 border-l-[#d9c5c4]' : ''}`}>
                        <ClipboardClock className='w-4 h-4 mr-2' />
                        Timesheet</Link>
                </div>
            </div>
            <span class="ml-1 mt-10 mb-2 block text-xs font-semibold text-gray-500">Spaces</span>
            <div className='flex mt-3 flex-1 flex-col space-y-2'>
                <div className="flex-1">
                    <Link className={`flex cursor-pointer items-center py-2 px-4 text-sm text-neutral-600 font-medium hover:bg-[#d9c5c4] ${activeLink === 'everything' ? 'border-l-4 border-l-[#d9c5c4]' : ''}`}>
                        <Snowflake className='w-4 h-4 mr-2' />
                        Everything</Link>
                </div>
                <div className="flex-1">
                    <Link
                        className={`flex justify-between items-center py-2 px-4 text-sm text-neutral-600 font-medium hover:bg-[#d9c5c4] ${activeLink === 'timesheet' ? 'border-l-4 border-l-[#d9c5c4]' : ''
                            }`}
                        onClick={() => setActiveLink('timesheet')}
                    >
                        <span className="flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            Team's space
                        </span>
                        <Plus className="w-4 h-4 cursor-pointer" />
                    </Link>
                </div>
                <Link className='flex items-center gap-2 text-sm'>
                   <Plus className="w-4 h-4 cursor-pointer" />
                    <span>Create space</span>
                </Link>
            </div>
            {/* Modal trigger */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <Modal onClose={() => setShowModal(false)} />
                </div>
            )}

        </div>
    )
}

export default Sidebar