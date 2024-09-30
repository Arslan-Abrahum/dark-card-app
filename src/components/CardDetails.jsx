import React, { useState } from 'react'
import ReactModal from 'react-modal';

function CardDetails({ closeAll2, showCardModel, handleInp, InfoObj, handleSubmit }) {
    const [cardOption, setCardOption] = useState('new');

    return (
        <div>
            <ReactModal isOpen={showCardModel} onRequestClose={closeAll2}  overlayClassName="modal-overlay" className="modal h-[100vh] flex justify-center items-center">

                {/* Card Model */}
                <div className='h-[80vh] text-left w-full  max-w-md p-6 rounded-lg shadow-md bg-white border border-gray-300 '>

                    {/* Card Information Section */}
                    <div className="mb-4">
                        <span className="text-lg font-semibold text-gray-700">CARD INFO</span>
                        <div className="mt-2">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    className="form-radio text-blue-600"
                                    name="card-option"
                                    value="existing"
                                    checked={cardOption === 'existing'}
                                    onChange={() => setCardOption('existing')}
                                />
                                <span className="ml-2 text-gray-600">Please select a card for payment</span>
                            </label>
                            <br />
                            <label className="inline-flex items-center mt-3">
                                <input
                                    type="radio"
                                    className="form-radio text-blue-600"
                                    name="card-option"
                                    value="new"
                                    checked={cardOption === 'new'}
                                    onChange={() => setCardOption('new')}
                                />
                                <span className="ml-2 text-gray-600">Add a new card</span>
                            </label>
                            {/* Card logos */}
                            <div className="flex items-center mt-2">
                                <img
                                    src="https://img.icons8.com/color/48/000000/visa.png"
                                    className="w-8 h-8 mr-2"
                                    alt="Visa"
                                />
                                <img
                                    src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                                    className="w-8 h-8 mr-2"
                                    alt="Mastercard"
                                />
                                <img
                                    src="https://img.icons8.com/color/48/000000/amex.png"
                                    className="w-8 h-8 mr-2"
                                    alt="Amex"
                                />
                                <img
                                    src="https://img.icons8.com/color/48/000000/unionpay.png"
                                    className="w-8 h-8 mr-2"
                                    alt="UnionPay"
                                />
                                <img
                                    src="https://img.icons8.com/color/48/000000/jcb.png"
                                    className="w-8 h-8"
                                    alt="JCB"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card Details Form */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-600 text-sm font-medium">Card No.</label>
                            <input
                                onChange={handleInp}
                                value={InfoObj.CardInfo}
                                name='CardInfo'
                                type="text"
                                placeholder="Fill the blank"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-600 text-sm font-medium">Expiration date</label>
                                <input
                                    onChange={handleInp}
                                    value={InfoObj.DateInfo}
                                    name='DateInfo'
                                    type="text"
                                    placeholder="MM/YY"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600 text-sm font-medium">Security Code</label>
                                <input
                                    onChange={handleInp}
                                    value={InfoObj.CodeInfo}
                                    name='CodeInfo'
                                    type="text"
                                    placeholder="Fill the blank"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-600 text-sm font-medium">First Name</label>
                                <input
                                    onChange={handleInp}
                                    value={InfoObj.FirstName}
                                    name='FirstName'
                                    type="text"
                                    placeholder="Fill the blank"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600 text-sm font-medium">Last Name</label>
                                <input
                                    onChange={handleInp}
                                    value={InfoObj.SecondName}
                                    name='SecondName'
                                    type="text"
                                    placeholder="Fill the blank"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        {/* PCI DSS Security Notice */}
                        <div className="flex items-center mt-4">
                            <img
                                src="https://e7.pngegg.com/pngimages/1001/763/png-clipart-payment-card-industry-data-security-standard-payment-card-industry-security-standards-council-audit-qualified-security-assessor-others-company-text-thumbnail.png"
                                alt="PCI DSS"
                                className="w-12 h-8 mr-2"
                            />
                            <p className="text-gray-500 text-xs">Your Card Information is secured by PCI DSS compliant systems.</p>
                        </div>

                        {/* Email Input */}
                        <div className="mt-4">
                            <label className="block text-gray-600 text-sm font-medium">E-mail</label>
                            <input
                                onChange={handleInp}
                                value={InfoObj.Email}
                                name='Email'
                                type="email"
                                placeholder="Fill the blank"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <button onClick={handleSubmit} className="px-5 py-3 w-full bg-blue-500 hover:bg-blue-600 rounded-lg text-white">
                            Payment
                        </button>

                  
                    </div>
                </div>
            </ReactModal>
        </div>
    )
}

export default CardDetails

//////////////////////////////////////////////////////////////////////////////////////////////////////
