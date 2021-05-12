import React from 'react'
import Link from 'next/link'

const DashSideNav = ({activePage}) => {
    return (
        <div className='md:flex shadow-xl flex-col hidden bg-white text-black md:w-1/3 lg:w-1/4 h-full fixed top-0 z-30 pt-8 max-w-screen-2xl transition  overflow-y-scroll'>
                <div className='px-6 pt-24 pb-3s relative'>
                    <div className='pr-16'>

                        <div className='relative mb-8'>
                            
                            <Link href="/dashboard/">
                                <a className=''>
                                    <img className='w-20 h-20' src="/images/user-profile-pic.jpeg" alt="vendor avatar"/>
                                </a>
                            </Link>
                        </div>

                        <div className='mb-8'>
                            <Link href="/dashboard/profile">
                            
                                <a className= {
                                    activePage==="profile" ? 'block w-auto rounded-r-full px-2 py-3 bg-hasobred font-black text-center border-b-2 border-r-2 border-l-2 border-dashgray transform hover:scale-105' :
                                    'block w-auto rounded-r-full px-2 py-3 bg-hasobgray font-black text-center border-b-2 border-r-2 border-l-2 border-dashgray transform hover:scale-105'
                                }>
                                    Profile
                                </a>
                            </Link>
                        </div>

                        <div className='mb-8'>
                            <Link href="/dashboard/">
                            <a className= {
                                    activePage==="dashboard" ? 'block w-auto rounded-r-full px-2 py-3 bg-hasobred font-black text-center border-b-2 border-r-2 border-l-2 border-dashgray transform hover:scale-105' :
                                    'block w-auto rounded-r-full px-2 py-3 bg-hasobgray font-black text-center border-b-2 border-r-2 border-l-2 border-dashgray transform hover:scale-105'
                                }>
                                    Dashboard
                                </a>
                            </Link>
                        </div>

                        <div className='mb-8'>
                            <Link href="/dashboard/assets">
                            <a className= {
                                    activePage==="assets" ? 'block w-auto rounded-r-full px-2 py-3 bg-hasobred font-black text-center border-b-2 border-r-2 border-l-2 border-dashgray transform hover:scale-105' :
                                    'block w-auto rounded-r-full px-2 py-3 bg-hasobgray font-black text-center border-b-2 border-r-2 border-l-2 border-dashgray transform hover:scale-105'
                                }>
                                    Assets
                                </a>
                            </Link>
                        </div>

                        <div className='mb-8'>
                            <Link href="/dashboard/user">
                            <a className= {
                                    activePage==="user" ? 'block w-auto rounded-r-full px-2 py-3 bg-hasobred font-black text-center border-b-2 border-r-2 border-l-2 border-dashgray transform hover:scale-105' :
                                    'block w-auto rounded-r-full px-2 py-3 bg-hasobgray font-black text-center border-b-2 border-r-2 border-l-2 border-dashgray transform hover:scale-105'
                                }>
                                    User
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
