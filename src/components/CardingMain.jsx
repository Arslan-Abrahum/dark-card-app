import React from 'react'
import { Oval } from 'react-loader-spinner'; // Import the TailSpin loader
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';

// Images
import VisaCard from "../assets/pubg-images/visa-logo-png-transparent-removebg-preview.png"
import VisaGolden from "../assets/pubg-images/visa-gold-removebg-preview.png"
import MasterCard from "../assets/pubg-images/Mastercard-Logo.wine.png"
import UCImage1 from "../assets/pubg-images/uc-small.bc30c95b.png"

import CrossImage from "../assets/pubg-images/X-8.png"
import Globe from "../assets/pubg-images/globe-image.png"
import Caution from "../assets/pubg-images/Caution.png"
import USA_Logo from "../assets/pubg-images/Flag_of_the_United_States.png"

function CardingMain({ isModalOpen, closeAll1, showLoader, showContinueButton, handleContinue, modalContentVisible, selectedPackage, searchVal, handlePaymentSubmit, isLoading, paymentStatus, handleback }) {

    return (

        <ReactModal
            isOpen={isModalOpen}
            onRequestClose={closeAll1}
            className="modal flex justify-center items-center"
            overlayClassName="modal-overlay"
        >
            {showLoader ? (
                <div className="loader-container flex items-center flex-col justify-center">
                    <Oval
                        height={80}
                        width={80}
                        color="#4fa94d"
                        ariaLabel="loading"
                    />
                    <h1 className="text-3xl font-bold text-center mt-2 text-white p-5 text-shadow uppercase">Connecting Main Dark Server</h1>
                    <h1 className="text-2xl font-semibold text-center mt-2 text-red-700 p-2 text-shadow">For Carding UC</h1>


                </div>
            ) : (
                showContinueButton ? (
                    <div className="loader-container flex items-center flex-col justify-center">
                        <h1 className="text-3xl font-bold text-center mt-2 p-5 text-green-400 text-shadow uppercase">Connected with Main Dark Server</h1>
                        <button
                            className="continue-button bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                            onClick={handleContinue}
                        >
                            Continue
                        </button>
                    </div>
                ) : (
                    modalContentVisible && selectedPackage && (
                        <div className="card-model bg-[#1B234D] shadow-lg rounded-lg p-3 w-full">
                            <div className="card-title text-center mb-4">
                                <h1 className="text-3xl font-bold text-white">Carding Cards Payment Method</h1>
                            </div>
                            <div className="card-body grid grid-cols-1 bg-[#1B234D] rounded-lg p-5 lg:grid-cols-2 gap-6">
                                <div className="card-info w-full">
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="current-price text-white text-xl font-semibold">Player ID:</h2>
                                        <h2 className="price-value text-white">{searchVal}</h2>
                                    </div>
                                    <h2 className="text-lg text-white mb-5">Select Carding Payment Channels</h2>
                                    <div className="space-y-4">
                                        <div className="cards flex items-center justify-between bg-[#141B3D] rounded-md pe-5">
                                            <div className='flex items-center'>

                                                <div className="card-image w-16 h-10 mr-4">
                                                    <img src={VisaCard} alt="visa" className="w-full h-full object-contain" />
                                                </div>
                                                <div className="card-data">
                                                    <h2 className="text-white">(Visa:8362) Connected: Balance $852.28</h2>
                                                </div>
                                            </div>
                                            <input type="checkbox" name='a' className='h-5 w-5 cursor-pointer' />
                                        </div>
                                        <div className="cards flex items-center justify-between bg-[#141B3D] rounded-md pe-5">
                                            <div className='flex items-center'>

                                                <div className="card-image w-16 h-10 mr-4">
                                                    <img src={MasterCard} alt="masterCard" className="w-full h-full object-contain rounded-md" />
                                                </div>
                                                <div className="card-data">
                                                    <h2 className="text-white">(Master:7891 ) Connected: Balance $35000</h2>
                                                </div>
                                            </div>
                                            <input type="checkbox" name='a' className='h-5 w-5 cursor-pointer' />
                                        </div>
                                        <div className="cards flex items-center justify-between bg-[#141B3D] rounded-md pe-5">
                                            <div className='flex items-center '>
                                                <div className="card-image w-16 h-10 mr-4">
                                                    <img src={VisaGolden} alt="visaGolden" className="w-full h-full object-contain" />
                                                </div>
                                                <div className="card-data">
                                                    <h2 className="text-white">(Golden:0025 ) Connected: Balance $15000</h2>
                                                </div>
                                            </div>
                                            <input type="checkbox" name='a' className='h-5 w-5 cursor-pointer' />
                                        </div>
                                        {/* New */}
                                        <div className="cards flex items-center justify-between bg-[#141B3D] rounded-md pe-5">
                                            <div className='flex items-center '>
                                                <div className="card-image w-16 h-10 mr-4 pl-2">
                                                    <img src={USA_Logo} alt="visaGolden" className="w-full h-full object-contain" />
                                                </div>
                                                <div className="card-data">
                                                    <h2 className="text-white"> (USA:5317) Connected: Balance $725821.21
                                                    </h2>
                                                </div>
                                            </div>
                                            <input type="checkbox" name='a' className='h-5 w-5 cursor-pointer' />
                                        </div>

                                    </div>
                                </div>
                                <div className="payment-submit-part bg-[#141B3D] p-6 rounded-lg shadow-md relative">
                                    <h1 className="text-xl font-semibold text-white mb-4">Purchase Item:</h1>
                                    <div className="item-info flex items-center mb-4">
                                        <img src={UCImage1} alt="" className="w-16 h-16 mr-4" />
                                        <h2 className="uc-amount text-lg text-white">{selectedPackage.uc_amount}k UC</h2>
                                    </div>
                                    <div className="item-info mb-4">
                                        <h2 className="price-details text-lg font-semibold text-white mb-2">Price Details:</h2>
                                        <div className="prices w-full flex justify-between items-center">
                                            <h2 className="current-price text-white">Current Price:</h2>
                                            <h2 className="price-value text-white">Card Connected</h2>
                                        </div>
                                    </div>
                                    <h1 className="text-lg font-semibold text-white mb-4">Total: Carding Card Connected</h1>
                                    <button className="submit-button w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300" onClick={handlePaymentSubmit} disabled={isLoading}>
                                        UC Send New
                                    </button>
                                    {
                                        <div>
                                            {isLoading ? (
                                                <div className="box-loader w-full flex justify-center items-center bg-white">
                                                    <div className="bg-[#141B3D] w-full shadow-lg rounded-lg p-6 md:w-2/3 lg:w-1/2 xl:w-1/2">
                                                        <div className="flex flex-col items-center relative">
                                                            <div className="text-center mt-4 ">
                                                                {
                                                                    paymentStatus ? (
                                                                        <>
                                                                            <div className="parent-loader">
                                                                                <div className="loader1 overflow-hidden pb-5">

                                                                                    <img className='crossImage' src={CrossImage} alt="globeImage" />
                                                                                </div>

                                                                            </div>
                                                                            <h2 className="text-1xl font-bold text-white ">{selectedPackage.uc_amount}k UC SENDING FAILED</h2>
                                                                            <h3 className="text-lg text-white">VIA PUBG ID: {searchVal} </h3>
                                                                            <div className='h-12 w-16 m-auto mt-2'>
                                                                                <img className='w-full h-full' src={Caution} alt="Caution Image" />
                                                                            </div>
                                                                            <Link className='border border-red-600 inline-block mt-4 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition duration-300' onClick={handleback} >Error Info</Link>


                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <div className="parent-loader">
                                                                                <div className="loader">
                                                                                    <img className='globe' src={Globe} alt="globeImage" />
                                                                                    <img className='glob1' src={Globe} alt="globeImage" />
                                                                                </div>
                                                                            </div>
                                                                            <h2 className="text-2xl relative font-bold text-white ">UC Sending...</h2>
                                                                            <h3 className="text-lg text-white">Please Wait For Sending UC
                                                                            </h3>

                                                                        </>
                                                                    )
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            ) : null}
                                        </div>
                                    }

                                </div>
                            </div>
                        </div>
                    )
                )
            )
            }
        </ReactModal>

    )
}

export default CardingMain