import React from 'react'

function AccountStatement() {
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
                        Account Statement
                    </a>
                </div>
                <h3 className='text-3xl pt-3 pb-2 text-gray-600'>Account Statement</h3>
                <div className='flex justify-between'>
                    <div className="mb-3 xl:w-96">
                        <span className="text-gray-600">Period </span>
                        <select className="form-select form-select-sm    
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
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-sm example">
                            <option selected>21 Feb 2022 - 27 Feb 2022</option>
                            <option value="1">21 Feb 2022 - 27 Feb 2022</option>
                            <option value="2">21 Feb 2022 - 27 Feb 2022</option>
                            <option value="3">21 Feb 2022 - 27 Feb 2022</option>
                        </select>
                    </div>
                    <div className='xl:w-50 pt-7'>
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
                            Print </a>
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

                <hr></hr>
            </div>


            <div className="bg-grey-light py-10  flex justify-center items-center">
                <div className="bg-white rounded w-2/3 shadow ">
                    <div className="flex flex-row justify-between p-6  border-b border-gray-300">
                        <p className='font-bold'>Opening Balance <span className='text-gray-600 text-sm '> Unpaid balance from previous statements</span></p>
                        <p className='text-bold'> <span className='text-gray-600 text-sm'> 0.00 BDT</span></p>

                    </div>                    
                    <div className='flex px-6 py-8 border-b border-gray-300'>
                        <div className='w-1/3'>
                        <p className='underline font-bold'>Orders</p>
                        </div>
                        <div className='w-full "'>
                        <div className='flex justify-between '>
                            <div className='leading-8 '>
                                <p className='underline'>Item Charges</p>
                                <p className='underline'>Other Credit</p>  
                                <p className='underline'>Daraz Fees</p>
                                <p className='underline'>Penalties</p>   
                                <p className='underline'>Other Debit</p>   
                                <p className='underline'>VAT</p>  
                                <p className=''>Subtotal</p>                               

                            </div>                            
                            <div className='float-right py-3 leading-8 '>
                                <p>0.00 BDT</p> 
                                <p>0.00 BDT</p> 
                                <p>0.00 BDT</p>
                                <p>0.00 BDT</p>
                                <p>0.00 BDT</p>
                                <p >0.00 BDT</p> 
                                <p className=' w-full border-t border-gray-300  '>200.00 BDT</p>                                   
                            </div>
                            </div>                           
                        </div>
                    </div>
                    <div className='flex px-6 py-8 border-b border-gray-300'>
                        <div className='w-1/3'>
                        <p className='underline font-bold'>Refunds</p>
                        </div>
                        <div className='w-full "'>
                        <div className='flex justify-between '>
                            <div className='leading-8 '>
                                <p className='underline'>Item Charges</p>
                                <p className='underline'>Other Credit</p>  
                                <p className='underline'>Daraz Fees</p>
                                <p className='underline'>Penalties</p>   
                                <p className='underline'>Other Debit</p>   
                                <p className='underline'>VAT</p>  
                                <p className=''>Subtotal</p>                               

                            </div>                            
                            <div className='float-right py-2 leading-8 '>
                                <p>0.00 BDT</p> 
                                <p>0.00 BDT</p> 
                                <p>0.00 BDT</p>
                                <p>0.00 BDT</p>
                                <p>0.00 BDT</p>
                                <p >0.00 BDT</p> 
                                <p className=' w-full border-t border-gray-300  '>200.00 BDT</p>                                   
                            </div>
                            </div>                           
                        </div>
                    </div>

                    <div className='flex px-6 py-8 border-b border-gray-300  '>
                        <div className='w-1/3'>
                        <p className='underline font-bold'>Other Services</p>
                        </div>
                        <div className='w-full "'>
                        <div className='flex justify-between '>
                            <div className='leading-8 '>
                                <p className='underline'>Subsidy </p>
                                <p className='underline'>Service</p>                          
                                <p className='underline'>Other </p>   
                                <p className='underline'>VAT</p>  
                                <p className=''>Subtotal</p>                               

                            </div>                            
                            <div className='float-right py-2 leading-8 '>
                                <p>0.00 BDT</p> 
                                <p>0.00 BDT</p>                                
                                <p>0.00 BDT</p>
                                <p >0.00 BDT</p> 
                                <p className=' w-full border-t border-gray-300  '>200.00 BDT</p>                                   
                            </div>
                            </div>                           
                        </div>
                    </div>
                    <div className='flex px-6 py-3'>
                        <div className='w-1/3'>
                        <p className=' font-bold'>Closing Balance</p>
                        </div>
                        <div className='w-full "'>
                        <div className='flex justify-between '>
                            <div className='leading-8 '>
                                <p className=''>Total Balance</p>                                             

                            </div>                            
                            <div className='float-right  leading-8 '>
                                <p>330.00 BDT</p>                                                             
                            </div>
                            </div>                           
                        </div>
                    </div>
                    <div className='flex px-6 pb-10 '>
                        <div className='w-1/3'>
                        <p className=' font-bold'>Payout</p>
                        </div>
                        <div className='w-full "'>
                        <div className='flex justify-between '>
                            <div className='leading-8 '>
                                <p className=''>Payment was completed on:2022-03-03</p>                                             

                            </div>                            
                            <div className='float-right leading-8 '>
                                <p className='font-bold'>330.00 BDT</p>                                                             
                            </div>
                            </div>                           
                        </div>
                    </div>



                </div>

            </div>
        </>
    )
}

export default AccountStatement 