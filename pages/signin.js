import Head from 'next/head'
import React from 'react'
import useForm from '../components/useForm';
import Link from 'next/link'
import { MdVpnKey } from "react-icons/md";
import { useRouter } from 'next/router'


const signin = () => {

    const router = useRouter();

    //Define the state schema used for validation
    const stateSchema = {
        email:{value:"" , error:""},
        password:{value:"" , error:""}
    }

    const stateValidatorSchema ={
        email:{
            required:true,
            validator:{
                func: value=> /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value),
                error:"invalid email format"
            }
        },
        password:{
            required:true,
            validator:{
                func: value=> /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(value),
                error:"password must be up to 6 characters and contain atleast one special character e.g '@,#,$,%,^,&,?,>,<'"
            }
        }
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema)
    const {email, password} = values;

    return (

        <>
        <Head>
                <title>Hasob | Login</title>
                <meta name="keywords" content="Hasob frontend task"/>
                <meta name="description" content="Hasob frontend task"/>
        </Head>

        <div className='bg-sign-box h-screen w-full bg-no-repeat bg-cover bg-center pt-20 pl-8 pr-8 md:pr-16 '>
            <div className='flex flex-row items-center justify-center md:justify-end'>
                <div className='mb-8 bg-hasobgray rounded-lg border-2 border-black p-7 '>
                    <div className='flex items-center justify-center p-2 mb-10'>
                        <div className='mr-3'>
                            <h1 className='text-black px-3 pb-2 border-b-4 border-black font-black text-lg md:text-2xl'>Sign in</h1>
                        </div>
                        <div className='ml-3'>
                            <h1 className='text-grayish px-3 pb-2 border-l-4 
                            border-divider font-bold text-lg md:text-2xl rounded'>Sign up</h1>
                        </div>
                    </div>

                    <div >
                        <form action="" onSubmit={(e)=>{
                            e.preventDefault()
                            router.push('/dashboard/')
                        }}>
                            <div className='relative mb-6 '>
                                <svg className="w-4 h-4 user-icon absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                <input className='placeholder-black py-2 pr-2 pl-10 border border-gray-700 rounded w-full focus:outline-none focus:border-hasobred bg-hasobgray'
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={handleOnChange}
                                    id='email'
                                    placeholder='Email'
                                    required
                                />
                                {errors.email && dirty.email && (
                                        <p className='text-red-500 text-xs'>{errors.email}</p>
                                )}

                            </div>
                            <div className='relative mb-3 '>
                                <MdVpnKey className='password-icon absolute w-4 h-4'/>
                                <input className='placeholder-black py-2 pr-2 pl-10 border border-gray-700 rounded w-full focus:outline-none focus:border-hasobred bg-hasobgray'
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={handleOnChange}
                                    id='password'
                                    placeholder='Password'
                                    required
                                />
                                {errors.password && dirty.password && (
                                        <p className='text-red-500 text-xs'>{errors.password}</p>
                                    )}

                            </div>

                            <div className='flex items-center justify-between mb-5'>
                                <div>
                                    <input className='bg-hasobgray'
                                        type="checkbox"
                                        name="remember"
                                        id='remember'
                                        placeholder=''
                                        required
                                    />
                                    <label htmlFor="remember" className='text-xs'> Remember me</label>

                                </div>

                                <div>
                                    <Link href="/forgotpassword">
                                        <a className='text-xs text-hasobred'>Forgot password?</a>
                                    </Link>
                                </div>

                            </div>

                            <div className='text-center mb-3'>
                                {
                                    errors.email || errors.password || email==="" || password==="" ?
                                    <button type='submit' className='pointer-events-none opacity-30 bg-hasobred px-3 py-1 border
                                 border-black text-center text-black font-black text-sm focus:outline-none
                                 hover:bg-red-900 rounded-lg'>
                                    Submit
                                </button> :
                                <button type='submit' className='bg-hasobred px-3 py-1 border
                                border-black text-center text-black font-black text-sm focus:outline-none
                                hover:bg-red-900 rounded-lg'>
                                   Submit
                               </button>
                                }
                            </div>

                            <div className='text-right'>
                                <Link href="/createaccount">
                                        <a  className='text-xs '>Dont have an account <span className='text-hasobred'>sign up</span></a>
                                </Link>
                            </div>
                        </form>

                    </div>
                </div>

            </div>

            
            
        </div>
        </>
    )
}

export default signin
