import React from 'react'
import DashNavTop from '../../../components/DashNavTop'
import DashSideNav from '../../../components/DashSideNav'
import DashUsersList from '../../../components/DashUsersList'

const DashIndex = () => {
    return (
        <div className='bg-hasobgray h-auto 2xl:max-w-screen-2xl 2xl:mx-auto pb-12'>
            <DashNavTop activePage='users'/>
            <DashSideNav activePage='users'/>
            <DashUsersList />

        </div>
    )
}

export default DashIndex
