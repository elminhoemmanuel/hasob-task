import React , {useState , useEffect} from 'react'
import Link from 'next/link'
import { MdNotificationsActive } from "react-icons/md";

const DashNavTop = ({activePage}) => {

    const [menuclick, setMenuClick] = useState(false);

    const handleClick = () => {
        setMenuClick(!menuclick);
        
    }
    const handleClickMobile = () => {
        setMenuClick(!menuclick);
    }

    return (
        <>

            {/* mobile screens vertical nav */}
            <div className={menuclick ? 'mobile-box-show flex shadow-xl flex-col md:hidden bg-white text-black w-3/5 md:w-2/4 h-full fixed top-0 z-30 pt-8 max-w-screen-2xl transition  overflow-y-scroll'
            : 'mobile-box flex shadow-xl flex-col md:hidden bg-white text-black w-3/4 h-full fixed top-0  z-50 pt-8 max-w-screen-2xl '}>
                <div className='px-6 pt-20 pb-3s relative'>
                    <div className=''>

                        <div className='relative mb-8'>
                            <div className='bg-hasobred rounded-full pt-1 absolute camera-icon w-8 h-8 flex itesm-center justify-center'>
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
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

            <nav className='border-b border-hasobgray flex flex-row py-6 px-6 md:px-10 lg:px-12 justify-between items-center fixed top-0 w-full bg-white max-w-screen-2xl z-50'>
                    <div className='flex flex-row items-center justify-start'>
                        <div className='md:hidden'>
                            <button onClick={handleClick} className='mr-4 block focus:outline-none outline-none' type='button'><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg></button>
                        </div>
                        <div className='pl-0'>
                            <Link href="/dashboard/"><a><img alt="hasob-logo" src='/images/logo.jpeg' className='pl-0 h-10 w-28 md:h-12 md:w-40 
                            ' /></a>
                            </Link>
                        </div>

                    </div>
                    <div className='flex flex-row items-center justify-start'>

                        <div className='pr-3 hidden md:block'>
                            <Link href="/dashboard/profile">
                                <a className=''>
                                    <img className='w-10 h-10' src="/images/user-profile-pic.jpeg" alt="vendor avatar"/>
                                </a>
                            </Link>
                        </div>

                        <div className='text-center pr-3 hidden md:block'>
                            <h1 className='font-black text-xs md:text-sm'>Chukwuma Albert Obiazor</h1>
                            <h1 className='font-black text-xs md:text-sm'>Snr. Software Developer</h1>
                        </div>

                        <div className='pr-3 flex items-center'>
                            <Link href="/dashboard/">
                                <a className='block'>
                                <svg className="w-10 h-full text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" /></svg>
                                </a>
                            </Link>
                            <Link href="/dashboard/">
                                <a className='block'>
                                    <MdNotificationsActive className='w-10 h-full text-hasobred' name='notification-icon'/>
                                </a>
                            </Link>
                        </div>

                    </div>
            </nav>
        </>
    )
}

export default DashNavTop
