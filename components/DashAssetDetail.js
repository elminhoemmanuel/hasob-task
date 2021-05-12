import React from 'react'
import Link from 'next/link'
import { MdStore } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { FaLink } from "react-icons/fa";


const DashAssetDetail = () => {
    return (
        <div className='pl-4 md:pl-72 lg:pl-80 pt-32 pr-4 md:pr-12 '>
            <div className='bg-white rounded-lg flex flex-col md:flex-row'>

                <div className='bg-white w-full md:w-2/5 border border-hasobgray pb-4 rounded-l'>
                    <div className='px-5 pb-2 pt-6 border-b border-hasobgray'>
                        <h1 className='font-black text-xl md:text-xl'>Assets detail</h1>
                    </div>
                    <div className='py-4 px-5 pb-6 flex items-center justify-center relative'>
                        <div className='bg-hasobred rounded-full pt-1 absolute camera-icon-dash w-8 h-8 flex itesm-center justify-center'>
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        </div>
                        <img className='w-32 h-32' src="/images/asset.jpeg" alt="asset avatar" />
                    </div>

                    <div className='px-5 mt-8'>
                        <div className='border border-hasobgray p-3 rounded'>
                            <h1 className='font-black text-sm md:text-base mb-2'>Vendor details</h1>
                            
                            <h1 className='font-black text-sm md:text-sm mb-2'>
                                <MdStore className="inline w-6 h-full text-black mr-2" />
                                HP Nigeria Limited
                            </h1>

                            <h1 className='font-black text-sm md:text-sm mb-2'>
                            <FiPhoneCall className="inline w-6 h-full text-gray-200 mr-2" />
                                08122278609
                            </h1>

                            <h1 className='font-black text-sm md:text-sm mb-2'>
                                <HiOutlineMail className="inline w-6 h-full text-gray-200 mr-2" />
                                chukwuma@hasob.ng
                            </h1>
                            
                            <h1 className='font-black text-sm md:text-sm mb-2'>
                                <FaLink className="inline w-6 h-full text-black mr-2" />
                                <a className='' href=''>www.hp-nigeria.com</a>
                            </h1>
                            
                        </div>

                    </div>

                </div>

                <div className='bg-white w-full md:w-3/5 border border-hasobgray pb-4 rounded-r'>
                    <div className='px-5 pb-3 pt-6 border-b border-hasobgray flex items-center justify-between'>
                        
                        <div>
                            <h1 className='font-black text-xl md:text-xl'>Basic information</h1>
                        </div>

                        <div className='flex'>
                            <div className='mr-2'>
                                <button type='submit' className='bg-hasobred px-3 py-1 border
                                        border-black text-center text-black font-black text-sm focus:outline-none
                                        hover:bg-red-900 rounded-lg'>
                                        Add asset
                                </button>
                            </div>
                            <div>
                                <button type='submit' className='bg-hasobred px-3 py-1 border
                                        border-black text-center text-black font-black text-sm focus:outline-none
                                        hover:bg-red-900 rounded-lg'>
                                        Edit asset
                                </button>
                            </div>
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
                                    <h1 className='font-black text-sm md:text-base '>Asset id:</h1>
                                </div>
                                <div className='w-2/3'>
                                    <h1 className='font-black text-sm md:text-base '>
                                        0113786
                                    </h1>
                                </div>

                            </div>
                            <div className='flex items-center justify-start mb-2'>
                                <div className='w-1/3'>
                                    <h1 className='font-black text-sm md:text-base '>Serial #:</h1>
                                </div>
                                <div className='w-2/3'>
                                    <h1 className='font-black text-sm md:text-base '>08122278609</h1>
                                </div>

                            </div>
                            <div className='flex items-center justify-start mb-2'>
                                <div className='w-1/3'>
                                    <h1 className='font-black text-sm md:text-base '>Date of purchase:</h1>
                                </div>
                                <div className='w-2/3'>
                                    <h1 className='font-black text-sm md:text-base '>23/11/2019</h1>
                                </div>

                            </div>
                            <div className='flex items-center justify-start mb-2'>
                                <div className='w-1/3'>
                                    <h1 className='font-black text-sm md:text-base '>Status:</h1>
                                </div>
                                <div className='w-2/3'>
                                    <h1 className='font-black text-sm md:text-base '>2Assigned</h1>
                                </div>

                            </div>
                            <div className='flex items-center justify-start mb-2'>
                                <div className='w-1/3'>
                                    <h1 className='font-black text-sm md:text-base '>Location:</h1>
                                </div>
                                <div className='w-2/3'>
                                    <h1 className='font-black text-sm md:text-base '>General Office 1</h1>
                                </div>

                            </div>
                            <div className='flex items-center justify-start mb-2'>
                                <div className='w-1/3'>
                                    <h1 className='font-black text-sm md:text-base '>Assigned to:</h1>
                                </div>
                                <div className='w-2/3'>
                                    <h1 className='font-black text-sm md:text-base '>Senior PHP Developer 1</h1>
                                </div>

                            </div>
                            <div className='flex items-center justify-start mb-2'>
                                <div className='w-1/3'>
                                    <h1 className='font-black text-sm md:text-base '>Issue_date:</h1>
                                </div>
                                <div className='w-2/3'>
                                    <h1 className='font-black text-sm md:text-base '>7th Dec 2019</h1>
                                </div>

                            </div>
                            <div className='flex items-center justify-start mb-2'>
                                <div className='w-1/3'>
                                    <h1 className='font-black text-sm md:text-base '>Due_date:</h1>
                                </div>
                                <div className='w-2/3'>
                                    <h1 className='font-black text-sm md:text-base '>30th Dec 2019</h1>
                                </div>

                            </div>
                            
                            
                        </div>

                    </div>

                </div>

                
            </div>
            
        </div>
    )
}

export default DashAssetDetail
