import Head from 'next/head';
import Link from 'next/head';
import React, { useState } from "react";
import styles from '../styles/Home.module.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function Home() {
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
            <span className='mx-9 pt-2'>Phone Number <span className='text-red'>*</span></span>

            
              <div className="flex -mr-px">
                <span className="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">880</span>
              </div>	
              <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-green-400" />
            </div>		

            <div className='text-center mt-8'>
              <a href="" className="bg-orange-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out mr-6">
                  Varify
              </a>

            </div>


            <div className='text-center mt-8'>


              <input type="text" className="flex-shrink flex-grow flex-auto leading-normal mr-4 w-px border h-10 border-grey-light rounded rounded-l-none px-5 relative focus:border-green-400" />
              <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px mr-4 border h-10 border-grey-light rounded rounded-l-none px-5 relative focus:border-green-400" />
              <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px mr-4 border h-10 border-grey-light rounded rounded-l-none px-5 relative focus:border-green-400" />
              <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px border mr-4 h-10 border-grey-light rounded rounded-l-none px-5 relative focus:border-green-400" />
              <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px border h-10 mr-4 border-grey-light rounded rounded-l-none px-5 relative focus:border-green-400" />
              <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px border h-10 mr-4 border-grey-light rounded rounded-l-none px-5 relative focus:border-green-400" />

            </div>
            </div>
            {/* <div className="flex mt-7">
                        <a href="" className="mx-auto bg-orange-600 text-white font-bold block w-lg p-2 rounded-lg">
                          Varify
                        </a>
                      </div> */}
            {/* <div className="p-6 bg-white border-gray-200 text-right">
                <a className="bg-blue-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-blue-400 rounded uppercase" 
                    href="#">Click Me</a>
            </div> */}
        </div>
      </div>

      {/* <div className="max-w-2xl mx-auto sm:px-6 lg:px-8"> */}

        {/* <section className="min-h-screen flex flex-col">
            <div className="flex flex-1 items-center justify-center">
                <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                      <h1 className="mb-8">Input Your Phone Number</h1>
                      <PhoneInput
                        country={'us'}
                      />

                      <div className="flex mt-7">
                        <a href="" className="mx-auto border-2 border-blie-500 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-lg p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700">
                          Send OTP
                        </a>
                      </div>

                </div>
            </div>
        </section> */}

      {/* </div> */}

    </div>
  )
}
