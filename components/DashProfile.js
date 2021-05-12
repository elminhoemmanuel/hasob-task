import React from 'react'
import Link from 'next/link'
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaTwitter, FaFacebookSquare } from "react-icons/fa";

const DashProfile = () => {
    return (
        <div className='pl-4 md:pl-72 lg:pl-96 pt-32 pr-4 md:pr-8 '>
            <div className='bg-white rounded-lg flex flex-col md:flex-row'>

                <div className='bg-white w-full md:w-2/5 border border-hasobgray pb-4 rounded-l'>
                    <div className='px-5 pb-2 pt-6 border-b border-hasobgray'>
                        <h1 className='font-black text-xl md:text-2xl'>User Profile</h1>
                    </div>
                    <div className='py-4 px-5 flex items-center justify-center'>
                        <img className='w-32 h-32' src="/images/user-profile-pic.jpeg" alt="user avatar" />
                    </div>

                    <div className='px-5'>
                        <div className='border border-hasobgray p-3 rounded'>
                            <h1 className='font-black text-sm md:text-base mb-2'>User Profile</h1>
                            <h1 className='font-black text-sm md:text-sm mb-2'>
                                <FiPhoneCall className="inline w-6 h-full text-gray-200 mr-2" />
                                08122278609
                            </h1>
                            <h1 className='font-black text-sm md:text-sm mb-2'>
                                <HiOutlineMail className="inline w-6 h-full text-gray-200 mr-2" />
                                chukwuma@hasob.ng
                            </h1>
                            <h1 className='font-black text-sm md:text-sm mb-2'>
                                <FaLinkedin className="inline w-6 h-full text-iconblue mr-2" />
                                www.linkedin.com/chukwu
                            </h1>
                            
                        </div>

                    </div>

                </div>

                <div className='bg-white w-full md:w-3/5 border border-hasobgray pb-4 rounded-r'>
                    <div className='px-5 pb-3 pt-6 border-b border-hasobgray flex justify-end'>
                        <div>
                            <button type='submit' className='bg-hasobred px-3 py-1 border
                                    border-black text-center text-black font-black text-sm focus:outline-none
                                    hover:bg-red-900 rounded-lg'>
                                    Edit info
                            </button>
                        </div>
                    </div>

                    <div className='px-5 pb-3 pt-6'>
                        <div className='mb-4'>
                                <textarea type="text" 
                                rows='3'
                                name='summary'
                                id='summary'
                                placeholder="Summary"
                                className='placeholder-black w-full border border-hasobgray rounded focus:border-black focus:outline-none p-3'
                                ></textarea>
                        </div>

                        <div className='border border-hasobgray p-3 rounded'>
                            <div className='flex items-center justify-start mb-2'>
                                <div className='w-1/3'>
                                    <h1 className='font-black text-sm md:text-base '>Full Name:</h1>
                                </div>
                                <div className='w-2/3'>
                                    <h1 className='font-black text-sm md:text-base '>
                                        Chukwuma Albert Obiazor
                                    </h1>
                                </div>

                            </div>
                            <div className='flex items-center justify-start mb-2'>
                                <div className='w-1/3'>
                                    <h1 className='font-black text-sm md:text-base '>Email:</h1>
                                </div>
                                <div className='w-2/3'>
                                    <h1 className='font-black text-sm md:text-base '>Chukwuma@hasob.ng</h1>
                                </div>

                            </div>
                            <div className='flex items-center justify-start mb-2'>
                                <div className='w-1/3'>
                                    <h1 className='font-black text-sm md:text-base '>Phone #:</h1>
                                </div>
                                <div className='w-2/3'>
                                    <h1 className='font-black text-sm md:text-base '>08122278609</h1>
                                </div>

                            </div>
                            <div className='flex items-center justify-start mb-2'>
                                <div className='w-1/3'>
                                    <h1 className='font-black text-sm md:text-base '>Office:</h1>
                                </div>
                                <div className='w-2/3'>
                                    <h1 className='font-black text-sm md:text-base '>General Office 1</h1>
                                </div>

                            </div>
                            <div className='flex items-center justify-start mb-2'>
                                <div className='w-1/3'>
                                    <h1 className='font-black text-sm md:text-base '>Designation:</h1>
                                </div>
                                <div className='w-2/3'>
                                    <h1 className='font-black text-sm md:text-base '>Chukwuma Albert Obiazor</h1>
                                </div>

                            </div>
                            <div className='flex items-center justify-start mb-2'>
                                <div className='w-1/3'>
                                    <h1 className='font-black text-sm md:text-base '>Social network:</h1>
                                </div>
                                <div className='w-2/3 flex flex-row items-center justify-evenly'>
                                    <FaLinkedin className="block w-6 h-full text-iconblue mr-2" />
                                    <FaTwitter className="block w-6 h-full text-twitterblue mr-2" />
                                    <FaFacebookSquare className="block w-6 h-full text-iconblue mr-2" />
                                    
                                </div>

                            </div>
                            
                        </div>

                    </div>

                </div>

                
            </div>
            
        </div>
    )
}

export default DashProfile
