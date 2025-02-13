import React, { useState } from "react";
import { Link } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import { FaAmazonPay } from "react-icons/fa";
import { SiPhonepe, SiPaytm, SiGooglepay } from "react-icons/si";

const BuyCoffePage = () => {
  const [quantity, setQuantity] = useState(1);
  const [qrCode, setQrCode] = useState(null);
  const pricePerCup = 10;
  const upiId = "rajkumarsingha@axisbank";
  const totalAmount = quantity * pricePerCup;

  const handleQuantityChange = (value) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const generateQRCode = () => {
    const upiLink = `upi://pay?pa=${upiId}&pn=Raj Kumar singha&am=${totalAmount}&cu=INR&tn=Thanks for your support!`;

    setQrCode(upiLink);
  };

  const openUPIApp = (app) => {
    let upiLink = `upi://pay?pa=${upiId}&pn=Raj Kumar singha&am=${totalAmount}&cu=INR&tn=Thanks for your support!`;

    switch (app) {
      case "gpay":
        upiLink = `tez://upi/pay?pa=${upiId}&pn=BuyMeCoffee&am=${totalAmount}&cu=INR`;
        break;
      case "phonepe":
        upiLink = `phonepe://upi/pay?pa=${upiId}&pn=BuyMeCoffee&am=${totalAmount}&cu=INR`;
        break;
      case "paytm":
        upiLink = `paytmmp://upi/pay?pa=${upiId}&pn=BuyMeCoffee&am=${totalAmount}&cu=INR`;
        break;
      case "amazonpay":
        upiLink = `amazon://payments/upi/pay?pa=${upiId}&pn=BuyMeCoffee&am=${totalAmount}&cu=INR`;
        break;
      default:
        break;
    }
    window.location.href = upiLink;
  };

  // const handlePayment = () => {
  //   const totalAmount = quantity * pricePerCup * 100;
  //   const options = {
  //     key: "YOUR_RAZORPAY_KEY",
  //     amount: totalAmount,
  //     currency: "INR",
  //     name: "Buy Me a Coffee",
  //     description: `Thanks for buying ${quantity} coffee${quantity > 1 ? "s" : ""}!`,
  //     handler: function (response) {
  //       alert(
  //         `Payment successful! Payment ID: ${response.razorpay_payment_id}`
  //       );
  //     },
  //     prefill: {
  //       name: "Your Name",
  //       email: "your-email@example.com",
  //     },
  //     theme: {
  //       color: "#F97316", // Customize Razorpay button color
  //     },
  //   };

  //   const razorpay = new window.Razorpay(options);
  //   razorpay.open();
  // };

  return (
    <div className="appbody min-h-screen bg-gradient-to-r from-yellow-100 via-orange-200 to-pink-100 animate-gradient flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8 animate__animated animate__fadeIn">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-orange-600 text-center mb-6">
          Buy Me a Coffee ☕
        </h1>

        <p className="text-gray-700 text-center mb-2 text-lg">
          Love my work? Support me by buying me a coffee! Your support means a
          lot ❤️.
        </p>
        <p className="text-gray-700 text-center mb-4">Know More <Link className="border-b-2 border-dotted text-gray-400 border-gray-400 hover:text-blue-500" to={"/about"}>About-Me</Link></p>

        {qrCode ? (
          <div className="flex flex-col items-center gap-2 sm:gap-4 md:gap-2">
            <QRCodeCanvas
              value={qrCode}
              size={256}
              level="H"
              includeMargin={true}
              className="shadow-lg  rounded-md" />
            <p className="mt-4 text-gray-700">Scan this QR using any UPI app</p>
            <div className="flex justify-center gap-4 mt-3">
              {/* Google Pay */}
              <div className="p-1 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-110"
                onClick={() => openUPIApp("gpay")}
              >
                <SiGooglepay className="w-8 h-8" style={{ color: '#4285F4' }} />
              </div>

              {/* PhonePe */}
              <div className="p-1 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-110"
                onClick={() => openUPIApp("phonepe")}
              >
                <SiPhonepe className="w-8 h-8" style={{ color: '#5F259F' }} />
              </div>

              {/* Paytm */}
              <div className="p-1 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-110"
                onClick={() => openUPIApp("paytm")}
              >
                <SiPaytm className="w-8 h-8" style={{ color: '#00BAF2' }} />
              </div>

              <div className="p-1 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-110"
                onClick={() => openUPIApp("amazonpay")}
              >
                <FaAmazonPay className="w-8 h-8" style={{ color: '#FF9900' }} />
              </div>
            </div>

            <div className="text-center mt-4">
              <h2 className="text-3xl font-bold text-orange-600">
                Paying: ₹{quantity * pricePerCup}
              </h2>
            </div>
            <button
              onClick={() => setQrCode(null)}
              className="mt-4 bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
              Generate New QR
            </button>
          </div>
        ) : (

          <>
            <div className="flex justify-center align-middle ">
              <img
                src="/cofee-up-main.jpg"
                alt="Coffee"
                className="w-48 h-48 rounded-full transform hover:scale-110 transition-transform"
              />
            </div>
            <div className="flex flex-col items-center justify-between space-y-5">
              <div className="flex items-center justify-center space-x-6 space-y-4 flex-wrap">
                <img
                  src="/coffe-cup.jfif"
                  alt="Coffee"
                  className="w-24 h-24 rounded-full transform hover:scale-110 transition-transform animate-bounce"
                />
                <p className="text-2xl font-medium text-gray-700">x</p>
                <div className="flex space-x-2">
                  {[1, 3, 5].map((num) => (
                    <button
                      key={num}
                      onClick={() => handleQuantityChange(num)}
                      className={`w-10 h-10 rounded-full ${quantity === num
                        ? "bg-orange-500 text-white"
                        : "border-2 border-orange-500 text-orange-500 hover:bg-orange-100"
                        } flex items-center justify-center font-medium text-lg transition-all duration-300`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) =>
                    handleQuantityChange(parseInt(e.target.value, 10))
                  }
                  className="w-16 h-10 px-2 border-2 border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all text-center"
                />
              </div>

              {/* Description below the quantity selector */}
              <p className="text-gray-600 text-center text-base">
                Select the number of coffees or enter a custom amount. Each cup is
                just ₹50.
              </p>
            </div>

            <div className="text-center mt-8">
              <h2 className="text-3xl font-bold text-orange-600">
                Total: ₹{quantity * pricePerCup}
              </h2>
            </div>
          </>
        )}

        {/* Pay Button */}
        {!qrCode && (
          <div className="text-center mt-8">
            <button
              onClick={generateQRCode}
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-medium py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 animate-pulse"
            >
              Buy {quantity} Coffee(s) for ₹{quantity * pricePerCup}
            </button>
          </div>
        )}
      </div>

    </div >
  );
};

export default BuyCoffePage;