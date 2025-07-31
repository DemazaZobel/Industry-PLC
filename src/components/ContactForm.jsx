import React from 'react';
import park from '../assets/office.jpg'; // Example background image, replace with your own

const ContactUs = () => {
  return (
    <section className="relative min-h-screen bg-gray-900 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-50"
        style={{ backgroundImage: `url(${park})` }}
        aria-hidden="true"
      ></div>

      {/* Overlay form */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-6 py-20">
        <h2 className="text-5xl font-extrabold mb-6 text-center">Contact Us</h2>
        <p className="mb-12 max-w-xl text-center text-gray-300">
          We’d love to hear from you! Please fill out the form below and we will get back to you as soon as possible.
        </p>

        <form className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-10 max-w-lg w-full shadow-lg">
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 font-semibold text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-opacity-40 transition"
              placeholder="Your full name"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-semibold text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-opacity-40 transition"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-semibold text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-opacity-40 transition resize-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-accent hover:bg-secondary text-white font-semibold py-3 rounded-md shadow-md transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
