import Head from 'next/head';
import Link from 'next/head';
import React, { useState } from "react";
import styles from '../styles/Home.module.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import { userState } from 'react';
import styled from "styled-components";

const Input = styled.input.attrs(props => ({
  type: "range",
}))`
  width: 65%;
  float:right;
  cursor: pointer;
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 42px;
    background: #4d4d4d;
  }

  &::-webkit-slider-thumb {
    height: 43px;
    top: 50%;
    background: orange;
  }
`;

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
              <span className='mx-9 pt-2'>Phone Number <span className='text-red'>*</span></span>
            
              <div className="flex -mr-px">
                <span className="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">880</span>
              </div>	
              <input type="text" name='phone' className="flex-shrink flex-grow leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-green-400" />
            </div>		


            <div className="flex flex-wrap items-stretch w-full mb-4 relative">
            <span className='mx-9 pt-2'>Slide To Verify <span className='text-orange'>*</span></span>
              <Input style={Home.notRobot} min="0" max="100" onChange={(e)=>{(e.target.value == 100)?setVarify(true):''}}/>
            </div>



          {verify && (<div className='text-center mt-8'>

            <input type="text" className="flex-shrink flex-grow flex-auto leading-normal mr-4 w-px border h-10 border-grey-light rounded rounded-l-none px-5 relative focus:border-green-400" />
            <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px mr-4 border h-10 border-grey-light rounded rounded-l-none px-5 relative focus:border-green-400" />
            <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px mr-4 border h-10 border-grey-light rounded rounded-l-none px-5 relative focus:border-green-400" />
            <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px border mr-4 h-10 border-grey-light rounded rounded-l-none px-5 relative focus:border-green-400" />
            <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px border h-10 mr-4 border-grey-light rounded rounded-l-none px-5 relative focus:border-green-400" />
            <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px border h-10 mr-4 border-grey-light rounded rounded-l-none px-5 relative focus:border-green-400" />

            <div className='text-center mt-8'>
              <button onClick={()=>{setSignup(true)}} className="bg-orange-500 rounded-full font-bold text-white px-3 py-3 transition duration-300 ease-in-out mr-6">
                  Confirm
              </button>

            </div>

            </div>


           )}

          {signup && (<div className='text-center mt-8'>

            <div className="flex flex-wrap items-stretch w-full mb-4 relative">
              <span className='mx-9 pt-2'>Password <span className='text-red'>*</span></span>
            	
              <input type="text" name='phone' className="flex-shrink flex-grow leading-normal w-40 flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-green-400" />
            </div>	

            <div className="flex flex-wrap items-stretch w-full mb-4 relative">
              <span className='mx-9 pt-2'>Confirm Password <span className='text-red'>*</span></span>
            	
              <input type="text" name='phone' className="float-right grid-cols-1 flex-shrink flex-grow leading-normal w-4 flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-green-400" />
            </div>	

            <div className="flex flex-wrap items-stretch w-full mb-4 relative">
              <span className='mx-9 pt-2'>Email Address <span className='text-red'>*</span></span>
            	
              <input type="text" name='phone' className="flex-shrink float-right flex-grow leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none focus:border-green-400" />
            </div>	

            <div className="flex flex-wrap items-stretch w-full mb-4 relative">
              <span className='mx-9 pt-2'>Shop Na <span className='text-red'>*</span></span>
            	
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
