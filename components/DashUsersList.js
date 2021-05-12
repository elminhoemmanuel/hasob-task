import React from 'react'
import Link from 'next/link'
import { usersObjOne } from './UsersData';
import { CgPushChevronRight } from "react-icons/cg";

const DashUsersList = () => {
    return (
        <div className='pl-4 md:pl-72 lg:pl-80 pt-32 pr-4 md:pr-12 '>
            <div className='bg-white rounded-lg '>
                <div className='px-5 pb-2 pt-6 border-b border-hasobgray'>
                    <h1 className='font-black text-xl md:text-2xl'>Users</h1>
                </div>

                <div className='px-5 pb-6 pt-6 flex justify-end'>
                    <div className='flex items-center'>
                        <div className='relative '>
                            <svg className="w-4 h-4 user-icon absolute text-hasobgray" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            <input className='h-10 py-2 pr-2 pl-10 border-b border-l border-t border-hasobgray rounded-l w-full focus:outline-none focus:border-hasobred bg-transparent'
                                    type="text"
                                    name="search"
                                    id='search'
                            />

                        </div>
                        <div>
                            <button type='submit' className='block h-10 bg-hasobred px-2 py-2 border-r- border-b border-t
                                border-black text-center text-black font-black text-sm focus:outline-none
                                hover:bg-red-900 rounded-r'>
                                   Search
                            </button>
                        </div>

                    </div>

                </div>

                <div className='px-5 pb-6 '>

                    <div className='overflow-x-scroll '>
                        <table className='rounded text-black w-full bg-hasobgray'>
                            <thead>
                                <tr className='bg-hasobgray rounded-t-lg p-2'>
                                    <th className='p-2 text-left'>
                                        S/N
                                    </th>
                                    <th className='p-2 text-left'>
                                        Name
                                    </th>
                                    <th className='p-2 text-left'>
                                        Location
                                    </th>
                                    <th className='p-2 text-left'>
                                        Status
                                    </th>
                                    <th className='p-2 text-left'>
                                        Edit
                                    </th>
                                    <th className='p-2 text-left'>
                                        Delete
                                    </th>
                                    <th className='p-2 text-left'>
                                        Disable
                                    </th>
                                    <th className='p-2 text-left'>
                                        Change Password
                                    </th>
                                </tr>
                            </thead>
                            {
                                usersObjOne.map(item=>(
                                    <tbody key={item.sn}>
                                        <tr  className='bg-white border border-hasobgray rounded-t-lg p-2'>
                                            <th className='p-2 border-r border-hasobgray text-left'>
                                                {item.sn}
                                            </th>
                                            <th className='p-2 border-r border-hasobgray text-left'>
                                                {item.name}
                                            </th>
                                            <th className='p-2 border-r border-hasobgray text-left'>
                                                {item.location}
                                            </th>
                                            <th className='p-2 border-r border-hasobgray text-left'>
                                                {item.status}
                                            </th>
                                            <th className='p-2 border-r border-hasobgray text-left'>
                                                {item.edit}
                                            </th>
                                            <th className='p-2 border-r border-hasobgray text-left'>
                                                {item.deleteIcon}
                                            </th>
                                            <th className='p-2 border-r border-hasobgray text-left'>
                                                {item.disableIcon}
                                            </th>
                                            <th className='p-2 border-r border-hasobgray text-left'>
                                                {item.password}
                                            </th>
                                        </tr>
                                    </tbody>
                                ))
                            }

                        </table>
                    </div>
                </div>

                <div className='px-5 pb-6 flex flex-col lg:flex-row md:items-center justify-start lg:justify-between'>
                    <div className='mb-2'>
                        <h1 className='font-black text-lg'>Showing entries 1-6 of 9</h1>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <button type='button' className='whitespace-nowrap text-sm block px-2 py-0.5 border-r-2 border-hasobgray text-gray-600 font-bold'>
                                <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                                Add
                            </button>
                        </div>
                        <div>
                            <button type='button' className='whitespace-nowrap text-sm block px-2 py-0.5 border-r-2 border-hasobgray text-gray-600 font-bold'>
                                Export
                            </button>
                        </div>
                        <div>
                            <button type='button' className='whitespace-nowrap text-sm block px-2 py-0.5 text-gray-600 font-bold'>
                                Next &nbsp;
                                <CgPushChevronRight className='inline w-6 h-6 p-1 border-2 border-gray-400 text-black'/>
                            </button>
                        </div>

                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default DashUsersList
