import React from 'react'
import DashProfile from '../../components/DashProfile'
import DashNavTop from '../../components/DashNavTop'
import DashSideNav from '../../components/DashSideNav'

const DashIndex = () => {
    return (
        <div className='bg-hasobgray h-screen 2xl:max-w-screen-2xl 2xl:mx-auto pb-12'>
            <DashNavTop activePage='profile'/>
            <DashSideNav activePage='profile'/>
            <DashProfile />

        </div>
    )
}

export default DashIndex
