import React from 'react'
import DashHome from '../../components/DashHome'
import DashNavTop from '../../components/DashNavTop'
import DashSideNav from '../../components/DashSideNav'

const DashIndex = () => {
    return (
        <div className='bg-hasobgray h-screen 2xl:max-w-screen-2xl 2xl:mx-auto'>
            <DashNavTop activePage='dashboard'/>
            <DashSideNav activePage='dashboard'/>
            <DashHome />

        </div>
    )
}

export default DashIndex
