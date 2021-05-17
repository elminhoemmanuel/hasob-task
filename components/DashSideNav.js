import React from 'react'
import Link from 'next/link'

const DashSideNav = ({activePage}) => {
    return (
        <div className='md:flex shadow-xl flex-col hidden bg-white text-black md:w-1/3 lg:w-1/4 xl:w-1/6 h-full fixed top-0 z-30 pt-8 max-w-screen-2xl transition  overflow-y-scroll'>
                <div className='px-4 pt-24 pb-3s relative'>
                    <div className='pr-16'>

                        <div className='relative mb-8'>
                            <div className='bg-hasobred rounded-full pt-1 absolute camera-icon w-8 h-8 flex itesm-center justify-center'>
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            
                            <Link href="/dashboard/profile">
                                <a className=''>
                                    <img className='w-20 h-20' src="/images/user-profile-pic.jpeg" alt="vendor avatar"/>
                                </a>
                            </Link>
                        </div>

                        <div className='mb-8'>
                            <Link href="/dashboard/profile">
                            
                                <a className= {
                                    activePage==="profile" ? 'block w-auto rounded-r-full pl-2 pr-3 py-3 bg-hasobred font-black text-center border-b-2 border-r-2 border-l-2 border-dashgray transform hover:scale-105' :
                                    'block w-auto rounded-r-full pl-2 pr-3 py-3 bg-hasobgray font-black text-center border-b-2 border-r-2 border-l-2 border-dashgray transform hover:scale-105'
                                }>
                                    Profile
                                </a>
                            </Link>
                        </div>

                        <div className='mb-8'>
                            <Link href="/dashboard/">
                            <a className= {
                                    activePage==="dashboard" ? 'block w-auto rounded-r-full pl-2 pr-3 py-3 bg-hasobred font-black text-center border-b-2 border-r-2 border-l-2 border-dashgray transform hover:scale-105' :
                                    'block w-auto rounded-r-full pl-2 pr-3 py-3 bg-hasobgray font-black text-center border-b-2 border-r-2 border-l-2 border-dashgray transform hover:scale-105'
                                }>
                                    Dashboard
                                </a>
                            </Link>
                        </div>

                        <div className='mb-8'>
                            <Link href="/dashboard/assets">
                            <a className= {
                                    activePage==="assets" ? 'block w-auto rounded-r-full pl-2 pr-3 py-3 bg-hasobred font-black text-center border-b-2 border-r-2 border-l-2 border-dashgray transform hover:scale-105' :
                                    'block w-auto rounded-r-full pl-2 pr-3 py-3 bg-hasobgray font-black text-center border-b-2 border-r-2 border-l-2 border-dashgray transform hover:scale-105'
                                }>
                                    Assets
                                </a>
                            </Link>
                        </div>

                        <div className='mb-8'>
                            <Link href="/dashboard/users">
                            <a className= {
                                    activePage==="users" ? 'block w-auto rounded-r-full pl-2 pr-3 py-3 bg-hasobred font-black text-center border-b-2 border-r-2 border-l-2 border-dashgray transform hover:scale-105' :
                                    'block w-auto rounded-r-full pl-2 pr-3 py-3 bg-hasobgray font-black text-center border-b-2 border-r-2 border-l-2 border-dashgray transform hover:scale-105'
                                }>
                                    Users
                                </a>
                            </Link>
                        </div>
                        
                    </div>
                    <div className='fixed bottom-0'>
                        <p className='text-base text-gray-300'>© copyright 2021 www.hasob.ng</p>
                    </div>
                </div>
                
            </div>
    )
}

export default DashSideNav
