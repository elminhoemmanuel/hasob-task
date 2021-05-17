import React from 'react'
import DashAssetsListAdd from '../../../components/DashAssetsListAdd'
import DashNavTop from '../../../components/DashNavTop'
import DashSideNav from '../../../components/DashSideNav'

const DashIndex = () => {
    return (
        <div className='bg-hasobgray h-auto 2xl:max-w-screen-2xl 2xl:mx-auto pb-12'>
            <DashNavTop activePage='assets'/>
            <DashSideNav activePage='assets'/>
            <DashAssetsListAdd />

        </div>
    )
}

export default DashIndex
