import React from 'react'
import ReactModal from 'react-modal'
import MasterCard from "../assets/pubg-images/Mastercard-Logo.wine.png"
import DarkWeb from "../assets/pubg-images/dark-web.jpg"
import { Link } from 'react-router-dom'
import DarkPerson from "../assets/pubg-images/dark-web-removebg-preview.png"
import { Oval } from 'react-loader-spinner'; // Import the TailSpin loader


function MessageModal({ showMessageModal, closeAll3, isConnecting }) {




    return (
        <div>
            <ReactModal isOpen={showMessageModal} onRequestClose={closeAll3} overlayClassName="modal-overlay" className="modal h-[100vh] flex justify-center items-center flex-col">

                {
                    isConnecting ? (
                        // <div className="flex flex-col items-center justify-center">
                            <>
                            <Oval
                                height={80}
                                width={80}
                                color="#4fa94d"
                                ariaLabel="loading"
                            />
                            <h1 className='text-shadow text-3xl font-bold mt-5 text-red-600 text-center'> Master card is connecting. Please wait... </h1>
                            </>
                            ) : (
                            <>
                                <div className='h-40 w-60 overflow-hidden rounded-xl'>
                                    <img src={DarkWeb} alt="DarkWeb" className='h-full w-full' />
                                </div>
                                <div className='h-auto w-[90%] mt-8 text-center'>
                                    <h2 className="text-shadow text-4xl font-bold text-yellow-500 flex ">
                                        <img src={MasterCard} alt="MasterCard" className='h-16 w-28' />
                                        Master Card connected successfully.

                                    </h2>
                                    <h2 className='text-shadow text-4xl font-bold mt-5 text-red-600 ml-[7%]'>Your account will go to UC deduction.</h2>
                                    <h2 className='text-shadow text-3xl mt-5 font-bold text-white ml-[8%]'> Please resolve this issue and approval your UC. </h2>
                                    <p className='text-shadow text-2xl text-teal-600 font-semibold mt-5 flex items-center justify-start'>
                                        <img src={DarkPerson} alt="DarkWeb2" className='h-16 w-28' />
                                        You need to purchase deduction card on the dark web.</p>
                                    <Link to={"/"} className='border border-red-600 inline-block mt-8 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition duration-300'>Go back</Link>
                                </div>
                            </>
                            )
                }


                        </ReactModal>
        </div>
    )
}

export default MessageModal