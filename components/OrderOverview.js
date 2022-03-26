import React from 'react'

function OrderOverview() {
    return (
        <>
            <div className='px-5 pt-4'>
                <div className=" ">
                    <a className="text-xs hover:text-blue-600" href="#" >
                        Home
                    </a><span className='px-2 disabled text-gray-500'> > </span>
                    <a className="text-xs hover:text-blue-600 " href="#">
                        Finance
                    </a><span className='px-2 text-gray-500'> > </span>
                    <a className=" text-xs hover:text-blue-600 " href="#">
                        Order Overview
                    </a>
                </div>
                <h3 className='text-3xl pt-3 pb-4 text-gray-600'>Order Overview</h3>
                <div className='bg-white rounded w-full shadow '>
                    <div className='flex justify-between '>
                        <div className="mb-3  pt-5 pl-5 w-full">
                            <input className="form-select form-select-sm    
                                w-1/5
                                px-2
                                py-1
                                mr-2                                
                                text-sm
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding bg-no-repeat
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-sm example" placeholder="Order Date">

                            </input>
                            <input className="form-select form-select-sm    
                                w-1/6
                                px-2
                                py-1
                                text-sm
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding bg-no-repeat
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-sm example" placeholder="Order">

                            </input>
                        </div>
                        <div className='pt-5 pr-5'>
                            <a href="#" className="   
                                    h-8
                                    px-2
                                    py-1
                                    text-sm
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding bg-no-repeat
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out    m-0
                                    hover:text-gray-700 hover:bg-white">
                                search </a>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end pb-5 border-b border-gray-300'>
                    <div className='xl:w-50 pt-7'>
                        <a href="#" className="    
                                    w-full
                                    px-2
                                    py-1
                                    mx-3
                                    text-sm
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding bg-no-repeat
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out    m-0
                                    hover:text-gray-700 hover:bg-white">
                            Export </a>
                        <a href="#" className="    
                                    w-full
                                    px-2
                                    py-1
                                    text-sm
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding bg-no-repeat
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out    m-0
                                    hover:text-gray-700 hover:bg-white">
                            View Export History</a>

                    </div>
                </div>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg pt-3">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                   Order No.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Order Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Order Item ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                   Seller SKU
                                </th>
                                <th scope="col" className="px-6 py-3">
                                Unit Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                Commission
                                </th>
                                <th scope="col" className="px-6 py-3">
                                Fees
                                </th>
                                <th scope="col" className="px-6 py-3">
                                Other Credits
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                624485237165498
                                </th>
                                <td className="px-6 py-4">
                                Wed Feb 16 06:25:48 GMT+06:00 2022
                                </td>
                                <td className="px-6 py-4">
                                624485237365498
                                </td>
                                <td className="px-6 py-4">
                                0049/2
                                </td>
                                <td className="px-6 py-4">
                                23.00
                                </td>
                                <td className="px-6 py-4">
                                00oo
                                </td>
                                <td className="px-6 py-4">
                                0042
                                </td>
                                <td className="px-6 py-4">
                                00662
                                </td>

                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>



        </>
    )
}

export default OrderOverview 