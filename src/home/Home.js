import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../img/sam smart logo.avif";
import herobgimg from "../img/heroimg.jpg";
import whychooseimg from '../img/img1.avif'
import ContactForm from "../component/ContactForm";

export default function Home() {
      const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center gap-2">
             <a href="/" >
               <img
            src={logo} // apna logo yaha daalein
            alt="logo"
            className="w-10 h-10 rounded-full shadow-sm"
          />
          </a>
       
         
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#home" className="hover:text-green-600 transition">
            Home
          </a>
          <a href="#about" className="hover:text-green-600 transition">
            About Us
          </a>
          <a href="#services" className="hover:text-green-600 transition">
            Services
          </a>
          <a href="#industries" className="hover:text-green-600 transition">
            Industries
          </a>
          <a href="#whyus" className="hover:text-green-600 transition">
            Why Us
          </a>
          <a href="#testimonials" className="hover:text-green-600 transition">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-green-600 transition">
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <a
          href="https://wa.me/919876543210?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full shadow-md transition items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 2.13.55 4.16 1.6 5.96L.5 23.5l5.73-1.6C7.96 22.95 9.96 23.5 12 23.5c6.35 0 11.5-5.15 11.5-11.5S18.35.5 12 .5zm0 20.9c-1.88 0-3.7-.52-5.28-1.51l-.38-.24-3.4.95.93-3.32-.25-.41a9.5 9.5 0 1117.6-5.46c0 5.27-4.28 9.55-9.55 9.55zm5.25-7.2c-.29-.15-1.73-.85-2-.95-.27-.1-.47-.15-.67.15s-.77.95-.95 1.15-.35.22-.64.07a7.7 7.7 0 01-2.26-1.39 8.2 8.2 0 01-1.51-1.88c-.16-.27-.02-.42.12-.57.12-.12.27-.32.4-.47.13-.15.17-.25.26-.42.09-.17.05-.32-.02-.47-.07-.15-.67-1.6-.92-2.2-.24-.57-.48-.5-.67-.51h-.57c-.2 0-.47.07-.72.32-.25.25-.95.93-.95 2.28s.98 2.65 1.12 2.83c.15.2 1.9 2.9 4.62 4.06.65.28 1.16.45 1.55.57.65.2 1.24.17 1.7.1.52-.08 1.73-.7 1.97-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.2-.55-.35z" />
          </svg>
          +91 9876543210
        </a>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg flex flex-col items-center gap-6 py-6">
          <a href="#home" className="hover:text-green-600 transition">
            Home
          </a>
          <a href="#about" className="hover:text-green-600 transition">
            About Us
          </a>
          <a href="#services" className="hover:text-green-600 transition">
            Services
          </a>
          <a href="#industries" className="hover:text-green-600 transition">
            Industries
          </a>
          <a href="#whyus" className="hover:text-green-600 transition">
            Why Us
          </a>
          <a href="#testimonials" className="hover:text-green-600 transition">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-green-600 transition">
            Contact
          </a>

          {/* WhatsApp CTA inside mobile menu */}
          <a
            href="https://wa.me/919876543210?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full shadow-md transition flex items-center gap-2"
          >
            WhatsApp Us
          </a>
        </div>
      )}
    </header>

      {/* Hero Section */}
<section
  id="home"
  className="relative h-screen px-6 flex flex-col justify-center items-center text-center "
  style={{
    backgroundImage: `url(${herobgimg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70 z-10"></div>

  {/* Content */}
<div className="flex flex-col justify-center items-center text-center z-20 ">
<motion.h2
          className="text-4xl md:text-6xl font-bold text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Powering Smarter, Greener Futures
        </motion.h2>
        <p className="mt-4 text-lg md:text-xl max-w-2xl text-white">
          Delivering sustainable solar solutions for farmers, homes, and
          industries with innovation, reliability, and trust.
        </p>
       <div className="mt-6 flex gap-4">
  <a
    href="#services"
    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
  >
    Explore Our Services
  </a>
  <a
    href="#contact"
    className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
  >
    Contact Us
  </a>
</div>

</div>
        
</section>


      {/* About Us */}
      <section id="about" className="py-16 bg-white px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            About Sam Smart Tech
          </h2>
          <p className="max-w-3xl mx-auto text-lg">
            Sam Smart Tech (I) Pvt. Ltd. is a technology-driven company focused
            on smart, sustainable energy solutions. We specialize in solar
            pumps, rooftop solar projects, consultancy, and after-sales service,
            empowering farmers, households, and businesses with clean and
            reliable energy.
          </p>
          <ul className="mt-6 text-left max-w-2xl mx-auto space-y-2">
            <li>✅ Accelerating renewable energy adoption</li>
            <li>✅ Providing complete installation, service & maintenance</li>
            <li>✅ Building India’s path towards energy independence</li>
          </ul>
        </div>
      </section>

      {/* Core Services */}
      <section id="services" className="py-16 bg-gray-50 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-12">
            Our Core Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2">
                ⚡ Solar Pump Maintenance
              </h3>
              <p>
                Centralized service system (44+ companies) and complaint
                resolution.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2">
                🏠 Rooftop Solar Installations
              </h3>
              <p>
                Customized design & turnkey project execution for homes &
                businesses.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2">
                🎓 Energy Consultancy & Training
              </h3>
              <p>
                Farmer & technician training programs with renewable energy
                awareness.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2">
                🚚 Supply Chain & Logistics
              </h3>
              <p>Efficient spare part distribution & vendor coordination.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
     <section
  id="whyus"
  className="py-16 bg-white px-10"
>
  <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
    
    {/* Text Content */}
    <div className="flex-1 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
        Why Choose Us?
      </h2>
      <ul className="space-y-4 text-lg text-gray-700">
        <li className="flex items-start gap-2">
          <span className="text-green-600">✅</span> Trusted by farmers, distributors & government programs
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-600">✅</span> Expertise in solar installation & service networks
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-600">✅</span> Centralized complaint & spare parts management
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-600">✅</span> Commitment to sustainability & greener energy
        </li>
      </ul>
    </div>

    {/* Image */}
    <div className="flex-1 h-[350px]">
      <img
        src={whychooseimg}
        alt="Why Choose Us"
        className="w-full h-full object-cover rounded-2xl shadow-lg"
      />
    </div>
  </div>
</section>


      {/* Industries */}
      <section id="industries" className="py-16 bg-gray-50 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-12">
            Industries We Empower
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-lg shadow">
              🌱 Agriculture & Irrigation
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              🏠 Residential Rooftops
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              🏭 Commercial & Industrial
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              🏛️ Government & Institutions
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              ⭐{" "}
              <p>
                "Thanks to Sam Smart Tech, my solar pump runs smoothly without
                power worries."
              </p>
              <span className="block mt-2 font-semibold">
                Farmer – Maharashtra
              </span>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              ⭐{" "}
              <p>
                "Their rooftop solar installation reduced my bills and gave
                reliable green power."
              </p>
              <span className="block mt-2 font-semibold">
                Homeowner – Aurangabad
              </span>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              ⭐{" "}
              <p>
                "Professional execution, on-time delivery, and excellent
                service."
              </p>
              <span className="block mt-2 font-semibold">
                Industrial Client
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gray-50 px-10">
        <div className="container mx-auto text-center grid grid-cols-1 sm:grid-cols-2 items-center justify-center">
          <div className="text-left">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              Get in Touch
            </h2>
            <p className="mb-6">
              📍 H. NO - 1, Sukhsamruddhi Society, Bansilalnagar, Near Hotel
              Regal Plaza,
              <br />
              Chhatrapati Sambhajinagar - 431005, Maharashtra, India
            </p>
            <p>📞 +91 9763551777</p>
            <p>📞 +91 9067259900</p>
            <p>✉️ samsmarttechpvtltd@gmail.com</p>
          </div>
<ContactForm/>
          {/* <form className="mt-8 max-w-lg mx-auto space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded px-4 py-2"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded px-4 py-2"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full border rounded px-4 py-2"
            />
            <textarea
              placeholder="Your Message"
              className="w-full border rounded px-4 py-2"
              rows="4"
            ></textarea>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
              Send Message
            </button>
          </form> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-6 mt-12 text-center">
        <p>© 2025 Sam Smart Tech (I) Pvt. Ltd. | All Rights Reserved</p>
        <p className="mt-2">🌱 Powering Smarter, Greener Futures 🌱</p>
      </footer>
    </div>
  );
}
