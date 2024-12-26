import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Specialprojects = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call to process the donation)
    console.log({ name, email, amount, paymentMethod });
  };

  return (
    <div className="bg-gradient-to-r from-indigo-100 via-blue-100 to-white min-h-screen py-16 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-900 mb-4">
          Make a Donation Today
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Your generous support helps victims of violence access education, counseling, and resources for rebuilding their lives.
        </p>
      </motion.div>

      {/* Donation Form */}
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
      >
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
            placeholder="John Doe"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
            placeholder="johndoe@example.com"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="amount" className="block text-gray-700 font-semibold mb-2">
            Donation Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
            min="1"
            placeholder="$50"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="payment-method" className="block text-gray-700 font-semibold mb-2">
            Payment Method
          </label>
          <select
            id="payment-method"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank-transfer">Bank Transfer</option>
            <option value="bank-city"> Dushanbe City</option>
            <option value="bank-alif">Alif</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Donate Now
        </button>

        <div className="text-center text-sm mt-4 text-gray-600">
          <p>Your donation is secure and helps fund life-changing programs for those in need.</p>
        </div>
      </motion.form>
    </div>
  );
};

export default Specialprojects;
