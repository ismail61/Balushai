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
      


      <div className="grid place-items-center h-screen w-full">

        <section className="min-h-screen flex flex-col">
            <div className="flex flex-1 items-center justify-center">
                <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                      <h1 className="mb-8">Input Your Phone Number</h1>
                      <PhoneInput
                        country={'us'}
                      />

                      <div className="flex mt-7">
                        <a href="" class="mx-auto border-2 border-blie-500 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-lg p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700">
                          Send OTP
                        </a>
                      </div>

                </div>
            </div>
        </section>

      </div>

    </div>
  )
}
