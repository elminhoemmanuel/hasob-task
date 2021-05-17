import React from 'react'
import DashNavTop from '../../../components/DashNavTop'
import DashSideNav from '../../../components/DashSideNav'
import DashUsersListAdd from '../../../components/DashUsersListAdd'

const DashIndex = () => {
    return (
        <div className='bg-hasobgray h-auto 2xl:max-w-screen-2xl 2xl:mx-auto md:pb-12 pb-20'>
            <DashNavTop activePage='users'/>
            <DashSideNav activePage='users'/>
            <DashUsersListAdd />

        </div>
    )
}

export default DashIndex
