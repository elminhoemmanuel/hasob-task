import React from 'react'
import Link from 'next/link'
import { assetsObjOne } from './AssetsData';
import { CgPushChevronRight } from "react-icons/cg";
import { FaImage } from "react-icons/fa";

const DashAssetsListAdd = () => {
    return (
        <div className='pl-4 md:pl-72 lg:pl-80 pt-32 pr-4 md:pr-12 '>

            {/* modal to add asset */}

            <div className='absolute top-52  w-3/5 md:w-1/2 lg:w-3/5 h-auto  rounded bg-white shadow-xl
            px-5 py-2 z-50 add-modal border border-hasobgray mb-5'>
                <div className='pb-2 pt-6 border-b border-hasobgray text-center'>
                    <h1 className='font-black text-xl md:text-2xl'>Add Asset</h1>
                </div>

                <div className='border-t border-hasobgray py-3'>
                    <form action="">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-4'>
                            <div>
                                <input type="text" 
                                className='w-full p-3 bg-hasobgray border border-hasobgray focus:outline-none focus:border-hasobred rounded placeholder-gray-600'
                                name='productname'
                                id='productname'
                                placeholder='Product Name'
                                />
                            </div>
                            <div>
                                <select
                                className='w-full p-3 bg-hasobgray border border-hasobgray focus:outline-none focus:border-hasobred rounded placeholder-gray-600'
                                name='category'
                                id='category'
                                >
                                    <option value="Category">Category</option>
                                    <option value="monitor">Monitor</option>
                                    <option value="printer">Printer</option>
                                </select>
                            </div>

                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-4'>
                            <div>
                                <input type="text" 
                                className='w-full p-3 bg-hasobgray border border-hasobgray focus:outline-none focus:border-hasobred rounded placeholder-gray-600'
                                name='serialnumber'
                                id='serialnumber'
                                placeholder='Serial Number'
                                />
                            </div>
                            <div>
                                <input type="text" 
                                className='w-full p-3 bg-hasobgray border border-hasobgray focus:outline-none focus:border-hasobred rounded placeholder-gray-600'
                                name='vendor'
                                id='vendor'
                                placeholder='Vendor'
                                />
                            </div>

                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-4'>
                            <div>
                                <input type="number" 
                                className='w-full p-3 bg-hasobgray border border-hasobgray focus:outline-none focus:border-hasobred rounded placeholder-gray-600'
                                name='price'
                                id='price'
                                placeholder='Price ()'
                                />
                            </div>
                            <div>
                                <input type="text" 
                                className='w-full p-3 bg-hasobgray border border-hasobgray focus:outline-none focus:border-hasobred rounded placeholder-gray-600'
                                name='purchasedate'
                                id='purchasedate'
                                placeholder='Date of purchase'
                                />
                            </div>

                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-4'>
                            <div>
                                <input type="text" 
                                className='w-full p-3 bg-hasobgray border border-hasobgray focus:outline-none focus:border-hasobred rounded placeholder-gray-600'
                                name='paymentmethod'
                                id='paymentmethod'
                                placeholder='Mode of Payment'
                                />
                            </div>
                            <div>
                                <select
                                className='w-full p-3 bg-hasobgray border border-hasobgray focus:outline-none focus:border-hasobred rounded placeholder-gray-600'
                                name='expirydate'
                                id='expirydate'
                                >
                                    <option value="expirydate">Warranty Expiry Date</option>
                                    <option value="monitor">2021</option>
                                    <option value="printer">2022</option>
                                </select>
                            </div>

                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-4'>
                            <div className=''>
                                <textarea type="text" 
                                    rows='2'
                                    name='description'
                                    id='description'
                                    placeholder="Description"
                                    className='h-full w-full p-3 bg-hasobgray border border-hasobgray focus:outline-none focus:border-hasobred rounded placeholder-gray-600'
                                ></textarea>
                            </div> 

                            <div className='relative'>
                                <input type="file" 
                                className='text-hasobgray opacity-0 h-full w-full p-3 bg-hasobgray border border-hasobgray focus:outline-none focus:border-hasobred rounded placeholder-gray-600'
                                name='assetimage'
                                id='assetimage'
                                placeholder='Upload image'
                                />
                                <div className='flex items-center pointer-events-none absolute top-0 left-0 text-hasobgray h-full w-full p-3 bg-hasobgray border border-hasobgray focus:outline-none focus:border-hasobred rounded placeholder-gray-600'>
                                    <div className='mr-4'>
                                        <FaImage className='text-black w-20 h-16'/>
                                    </div>
                                    <div className='text-gray-600'>
                                        Upload Image
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className=' flex flex-col-reverse lg:flex-row md:items-center justify-start lg:justify-between'>
                    
                            <div>
                                    <button type='button' className='whitespace-nowrap w-full text-lg text-center block p-2  text-gray-600 font-bold '> 
                                        Cancel
                                    </button>
                            </div>
                            <div>
                                    <button type='button' className='whitespace-nowrap w-full text-lg text-center block p-2  text-hasobred font-bold '> 
                                        Add User
                                    </button>
                            </div>
                        </div>
                    </form>

                </div>

            </div>

            <div className='bg-white rounded-lg '>
                <div className='px-5 pb-2 pt-6 border-b border-hasobgray'>
                    <h1 className='font-black text-xl md:text-2xl'>All Assets</h1>
                </div>

                <div className='px-5 pb-6 pt-6 flex justify-end'>
                    <div className='flex items-center'>
                        <div className='relative '>
                            <svg className="w-4 h-4 user-icon absolute text-hasobgray" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            <input className='h-10 py-2 pr-2 pl-10 border-b border-l border-t border-hasobgray rounded-l w-full focus:outline-none focus:border-hasobred bg-transparent'
                                    type="text"
                                    name="search"
                                    id='search'
                            />

                        </div>
                        <div>
                            <button type='submit' className='block h-10 bg-hasobred px-2 py-2 border-r- border-b border-t
                                border-black text-center text-black font-black text-sm focus:outline-none
                                hover:bg-red-900 rounded-r'>
                                   Search
                            </button>
                        </div>

                    </div>

                </div>

                <div className='px-5 pb-6 '>

                    <div className='overflow-x-scroll '>
                        <table className='rounded text-black w-full bg-hasobgray'>
                            <thead>
                                <tr className='bg-hasobgray rounded-t-lg p-2'>
                                    <th className='p-2 text-left'>
                                        S/N
                                    </th>
                                    <th className='p-2 text-left'>
                                        Name
                                    </th>
                                    <th className='p-2 text-left'>
                                        Category
                                    </th>
                                    <th className='p-2 text-left'>
                                        Quantity
                                    </th>
                                    <th className='p-2 text-left'>
                                        Location
                                    </th>
                                    <th className='p-2 text-left'>
                                        Edit
                                    </th>
                                </tr>
                            </thead>
                            {
                                assetsObjOne.map(item=>(
                                    <tbody key={item.sn}>
                                        <tr  className='bg-white border border-hasobgray rounded-t-lg p-2'>
                                            <th className='p-2 border-r border-hasobgray text-left'>
                                                {item.sn}
                                            </th>
                                            <th className='p-2 border-r border-hasobgray text-left'>
                                                {item.assetname}
                                            </th>
                                            <th className='p-2 border-r border-hasobgray text-left'>
                                                {item.category}
                                            </th>
                                            <th className='p-2 border-r border-hasobgray text-left'>
                                                {item.qty}
                                            </th>
                                            <th className='p-2 border-r border-hasobgray text-left'>
                                                {item.location}
                                            </th>
                                            <th className='p-2 border-r border-hasobgray text-left'>
                                                {item.edittext}
                                            </th>
                                        </tr>
                                    </tbody>
                                ))
                            }

                        </table>
                    </div>
                </div>

                <div className='px-5 pb-6 flex flex-col lg:flex-row md:items-center justify-start lg:justify-between'>
                    <div className='mb-2'>
                        <h1 className='font-black text-lg'>Showing entries 1-6 of 9</h1>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <button type='button' className='whitespace-nowrap text-sm block px-2 py-0.5 border-r-2 border-hasobgray text-gray-600 font-bold'>
                                <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                                Add
                            </button>
                        </div>
                        <div>
                            <button type='button' className='whitespace-nowrap text-sm block px-2 py-0.5 border-r-2 border-hasobgray text-gray-600 font-bold'>
                                Export
                            </button>
                        </div>
                        <div>
                            <button type='button' className='whitespace-nowrap text-sm block px-2 py-0.5 text-gray-600 font-bold'>
                                Next &nbsp;
                                <CgPushChevronRight className='inline w-6 h-6 p-1 border-2 border-gray-400 text-black'/>
                            </button>
                        </div>

                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default DashAssetsListAdd
