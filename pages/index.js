import Head from 'next/head';
import Link from 'next/head';
import React, { useState } from "react";
import styles from '../styles/Home.module.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import { userState } from 'react';

export default function Home() {

  const  [verify, setVarify] = useState(false);

  const  [signup, setSignup] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

       
      <div className="max-w-2xl drop-shadow rounded-lg	mx-auto sm:px-6 lg:px-8 w-full">

      
      

          <div className="overflow-hidden shadow-md">
            <div className="px-6 py-4 text-center text-orange-600 bg-white border-b border-gray-200 font-bold uppercase">
                SIGN UP
            </div>

            

            <div className="p-6 bg-white border-b border-gray-200">
            <div className="flex flex-wrap items-stretch w-full mb-4 relative">
              <span className='mx-9 pt-2 md:w-1/3'>Phone Number <span className='text-red'>*</span></span>
            
              <div className="flex -mr-px">
                <span className="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">880</span>
              </div>	
              <input type="text" name='phone' className="flex-shrink flex-grow leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-green-400" />
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <button onClick={()=>{setVarify(true)}} className="font-bold text-green transition duration-300 ease-in-out mr-2">
                        Verify
                    </button>

                </div>

            </div>



          {verify && (<div className='text-center mt-8'>



                  <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                  <span className='mx-9 pt-2 md:w-1/3 text-left'>Enter Code <span className='text-red'>*</span></span>

                  <div className="flex -mr-px">
                      <span className="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">880</span>
                  </div>
                  <input type="text" name='phone' className="flex-shrink flex-grow leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-green-400" />
                  <div className="absolute inset-y-0 right-0 flex items-center">
                      <button onClick={()=>{setSignup(true)}} className="font-bold text-green transition duration-300 ease-in-out mr-2">
                          Confirm
                      </button>

                  </div>



                  </div>

              </div>


           )}

          {signup && (<div className='text-center mt-8'>

            <div className="flex flex-wrap items-stretch w-full mb-4 relative">
              <span className='mx-9 pt-2 md:w-1/3 text-left'>Password <span className='text-red'>*</span></span>
            	
              <input type="text" name='phone' className="flex-shrink flex-grow leading-normal w-40 flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-green-400" />
            </div>	

            <div className="flex flex-wrap items-stretch w-full mb-4 relative">
              <span className='mx-9 pt-2 md:w-1/3 text-left'>Confirm Password <span className='text-red'>*</span></span>
            	
              <input type="text" name='phone' className="float-right grid-cols-1 flex-shrink flex-grow leading-normal w-4 flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-green-400" />
            </div>	

            <div className="flex flex-wrap items-stretch w-full mb-4 relative">
              <span className='mx-9 pt-2 md:w-1/3 text-left'>Email Address <span className='text-red'>*</span></span>
            	
              <input type="text" name='phone' className="flex-shrink float-right flex-grow leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none focus:border-green-400" />
            </div>	

            <div className="flex flex-wrap items-stretch w-full mb-4 relative">
              <span className='mx-9 pt-2 md:w-1/3 text-left'>Shop Na <span className='text-red'>*</span></span>
            	
              <input type="text" name='phone' className="flex-shrink flex-grow float-right leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-green-400" />
            </div>	
          
          
            <div className='text-center mt-8'>
              <button className="bg-orange-500 rounded-full font-bold text-white px-3 py-3 transition duration-300 ease-in-out mr-6">
                  Sign Up
              </button>

            </div>

            </div>


           )}

            </div>
        </div>
      </div>

    </div>
  )


}
