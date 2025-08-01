import React, { useState } from 'react';
import office from '../assets/office.jpg';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    setSubmitted(true);
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-24 md:px-16 py-16 font-sans relative "
      style={{
        backgroundImage: `url(${office})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0" />

      <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 shadow-2xl rounded-3xl bg-white/70 backdrop-blur-md p-6 md:p-12 z-10">
        
        {/* Left Side - Info */}
        <div className="flex flex-col justify-center space-y-8 md:space-y-10 px-4 md:px-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight drop-shadow-md p-8">
            Let's Connect
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-lg leading-relaxed tracking-wide">
            Whether you're interested in manufacturing, construction, or trade, our dedicated team is here to assist. Reach out and start a conversation with Dankil Industries — where innovation meets reliability.
          </p>

          <div className="space-y-6 sm:space-y-8 text-gray-700">
            <ContactInfo 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V9a1 1 0 01-1 1H7a10 10 0 0010 10v-2a1 1 0 011-1h1a1 1 0 011 1v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                </svg>
              }
              text="+251 911 123 456"
            />
            <ContactInfo 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8-4H8m10 8v2a2 2 0 01-2 2H8a2 2 0 01-2-2v-2a2 2 0 012-2h8a2 2 0 012 2z" />
                </svg>
              }
              text="info@dankilindustries.com"
            />
            <ContactInfo 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              }
              text="123 Dankil Street, Addis Ababa, Ethiopia"
            />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="relative flex flex-col justify-between px-4 md:px-0">
          {submitted ? (
            <div className="flex flex-col items-center justify-center space-y-6 p-6 sm:p-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 sm:w-20 sm:h-20 text-green-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Thank you!</h2>
              <p className="text-gray-700 text-center max-w-md leading-relaxed">
                Your message has been successfully sent. We will get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 bg-white/90 rounded-2xl p-6 m-4 sm:p-10 shadow-lg backdrop-blur-sm">
              <FloatingInput 
                label="Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <FloatingInput 
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <FloatingInput 
                label="Subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
              />
              <FloatingTextarea
                label="Message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
              
              <button
                type="submit"
                className="w-full py-3 sm:py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-base sm:text-lg font-semibold rounded-xl shadow-lg transition"
              >
                Send Message
              </button>
            </form>
          )}

          {/* Map */}
          <div className="mt-8 sm:mt-12 w-full h-48 sm:h-64 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Dankil Industries Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.543654665337!2d38.76361131531812!3d9.009742492698023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b852b2f7b8c33%3A0x78e438b0416188aa!2sDankil%20Industries!5e0!3m2!1sen!2set!4v1690833777581!5m2!1sen!2set"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, text }) => (
  <div className="flex items-center space-x-4 sm:space-x-5">
    {icon}
    <span className="text-base sm:text-lg font-medium">{text}</span>
  </div>
);

const FloatingInput = ({ label, type, name, value, onChange, required }) => (
  <div className="relative z-0 w-full group">
    <input
      type={type}
      name={name}
      id={name}
      required={required}
      value={value}
      onChange={onChange}
      className="block py-2.5 sm:py-3 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
      placeholder=" "
    />
    <label
      htmlFor={name}
      className="absolute text-gray-500 duration-300 transform -translate-y-5 sm:-translate-y-6 scale-75 top-2 sm:top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:text-indigo-600"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
  </div>
);

const FloatingTextarea = ({ label, name, value, onChange, rows, required }) => (
  <div className="relative z-0 w-full group">
    <textarea
      name={name}
      id={name}
      rows={rows}
      required={required}
      value={value}
      onChange={onChange}
      className="block py-2.5 sm:py-3 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 resize-none peer"
      placeholder=" "
    />
    <label
      htmlFor={name}
      className="absolute text-gray-500 duration-300 transform -translate-y-5 sm:-translate-y-6 scale-75 top-2 sm:top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:text-indigo-600"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
  </div>
);

export default ContactUs;
