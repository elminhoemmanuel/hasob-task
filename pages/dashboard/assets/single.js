import React from 'react'
import DashProfile from '../../../components/DashProfile'
import DashNavTop from '../../../components/DashNavTop'
import DashSideNav from '../../../components/DashSideNav'
import DashAssetDetail from '../../../components/DashAssetDetail'

const DashIndex = () => {
    return (
        <div className='bg-hasobgray h-auto 2xl:max-w-screen-2xl 2xl:mx-auto pb-12'>
            <DashNavTop activePage='assets'/>
            <DashSideNav activePage='assets'/>
            <DashAssetDetail />

        </div>
    )
}

export default DashIndex
