import React, { useState } from "react";
import { Link } from "react-router-dom";

const BuyCoffePage = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerCup = 50;

  const handleQuantityChange = (value) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const handlePayment = () => {
    const totalAmount = quantity * pricePerCup * 100;
    const options = {
      key: "YOUR_RAZORPAY_KEY",
      amount: totalAmount,
      currency: "INR",
      name: "Buy Me a Coffee",
      description: `Thanks for buying ${quantity} coffee${quantity > 1 ? "s" : ""}!`,
      handler: function (response) {
        alert(
          `Payment successful! Payment ID: ${response.razorpay_payment_id}`
        );
      },
      prefill: {
        name: "Your Name",
        email: "your-email@example.com",
      },
      theme: {
        color: "#F97316", // Customize Razorpay button color
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

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
        <p className="text-gray-700 text-center mb-6">Know More <Link className="border-b-2 border-dotted text-gray-400 border-gray-400 hover:text-blue-500" to={"/about"}>About-Me</Link></p>

        <div className="flex flex-col items-center justify-between space-y-6">
          <div className="flex items-center justify-center space-x-6 space-y-4 flex-wrap">
            <img
              src="/coffe-cup.jfif"
              alt="Coffee"
              className="w-12 h-12 transform hover:scale-110 transition-transform animate-bounce"
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

        {/* Pay Button */}
        <div className="text-center mt-8">
          <button
            onClick={handlePayment}
            className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-medium py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 animate-pulse"
          >
            Buy {quantity} Coffee(s) for ₹{quantity * pricePerCup}
          </button>
        </div>
      </div>

    </div >
  );
};

export default BuyCoffePage;
