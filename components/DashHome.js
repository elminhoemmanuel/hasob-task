import React from 'react'
import Link from 'next/link'

const DashHome = () => {
    return (
        <div className='pl-4 md:pl-72 lg:pl-80 pt-32 pr-4 md:pr-12 '>
            <div className='bg-white rounded'>
                <div className='px-6 pb-2 pt-6 border-b border-hasobgray'>
                    <h1 className='font-black text-xl md:text-2xl'>Dashboard</h1>
                </div>

                <div className='px-6 py-6 border-b border-hasobgray 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    <div>
                        <Link href='dashboard/assets'>
                            <a className='bg-assetsbox block h-24 px-3 py-4 text-center font-black rounded shadow-lg'>
                                Assets
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Link href='dashboard/assets'>
                            <a className='bg-assignedbox block h-24 px-3 py-4 text-center font-black rounded shadow-lg'>
                                Assigned assets
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Link href='dashboard/assets'>
                            <a className='bg-unassignedbox block h-24 px-3 py-4 text-center font-black rounded shadow-lg'>
                                Unassigned assets
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Link href='dashboard/'>
                            <a className='bg-vendorsbox block h-24 px-3 py-4 text-center font-black rounded shadow-lg'>
                                Vendors
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Link href='dashboard/'>
                            <a className='bg-locationsbox block h-24 px-3 py-4 text-center font-black rounded shadow-lg'>
                                Locations
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Link href='dashboard/user'>
                            <a className='bg-usersbox block h-24 px-3 py-4 text-center font-black rounded shadow-lg'>
                                Users
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Link href='dashboard/'>
                            <a className='bg-notifybox block h-24 px-3 py-4 text-center font-black rounded shadow-lg'>
                                Notifications
                            </a>
                        </Link>
                    </div>

                </div>

                <div className='px-6 pb-2 pt-6 border-b border-hasobgray'>
                    <h1 className='font-black text-xl md:text-2xl'>Visualization</h1>
                </div>

                <div className='px-6 pb-6 pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    <div className='h-24'>
                        <img className='w-full h-full' src="/images/asset-chart-diagram.jpeg" alt="chart image" />
                    </div>
                    <div className='h-24'>
                        <img className='w-full h-full' src="/images/asset-pie-chart.jpeg" alt="chart image" />
                    </div>
                    <div className='h-24'>
                        <img className='w-full h-full' src="/images/asset-chart.jpeg" alt="chart image" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default DashHome
