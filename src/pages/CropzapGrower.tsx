import React, { useState } from "react";
import axios from "axios";
import About from "../assest/farmerabout.jpeg";
import Feature from "../assest/farmerfeature.jpeg";
import Modal from "../components/ModelPopup";
import { motion } from "framer-motion";

const CropzapGrower = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    option: "",
    farmDescription: "",
    address: "",
    createdAt: new Date(),

  });
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState({ title: '', content: '' });
  const [btnLoader, setBtnLoader] = useState(false);

  interface ModalMessage {
    title: string;
    content: string;
  }

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setBtnLoader(true);
    try {
      formData.createdAt = new Date();
      const response = await axios.post(import.meta.env.VITE_MONGO_DB_URL + 'grower', formData);

      console.log(response);
      if (response.status === 201 || response.status === 200 || response.status === 250) {
        // const mail_response = 
        await fetch(
          import.meta.env.VITE_MONGO_DB_URL +
          "send-email-gwr",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        ).then((response) => {
          console.log(response);
        });

        // const mail_res = await mail_response.json();

        setBtnLoader(false);
      } 

      setModalMessage({ title: 'success', content: 'Successfully form submitted.' } as ModalMessage);


      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        option: "",
        farmDescription: "",
        address: "",
        createdAt: new Date(),
      });

    } catch (error) {
      console.log(error);
      setModalMessage({ title: 'Error', content: 'Failed to submit the form.' } as ModalMessage);
      setBtnLoader(false);
    }
    setModalOpen(true);
    setBtnLoader(false);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <main className="pt-16 sm:px-8 md:px-16 lg:px-0">
         <section className="relative py-48 h-auto">
            <div className="absolute inset-0">
              <img
                src="/blog/vegetables.webp"
                alt="Agricultural Innovation"
                className="w-full h-full object-fill"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/50"></div>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 text-left text-white ">
              <h1 className="text-4xl font-bold mb-16">CropzapGrower</h1>
              
            </div>
          </section>
          <section id="about" className="about py-16 bg-white">
  <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
    {/* Animated Text Section */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="self-start"
    >
      <h3 className="text-4xl font-bold mb-2">What is CropzapGrower?</h3>
      <p className="text-gray-600 mt-9 text-[20px] leading-relaxed">
        Cropzap’s supply chain solution is designed to streamline the movement of fresh produce 
        from farms to businesses with efficiency, transparency, and minimal wastage. By leveraging 
        real-time market insights, AI-driven demand forecasting, and a robust logistics network, 
        Cropzap ensures that farmers receive fair prices while businesses get consistent, high-quality produce. 
        The platform eliminates inefficiencies caused by traditional middlemen by directly connecting farmers 
        and FPOs to retail stores, restaurants, hostel canteens, and other institutional buyers. With a 
        focus on reducing post-harvest losses, Cropzap optimizes supply and demand mapping, ensuring 
        that surplus produce reaches the right buyers before spoilage occurs. Additionally, its tech-driven 
        procurement system provides traceability, quality assurance, and timely delivery, making agri-commerce 
        more reliable and profitable for all stakeholders involved.
      </p>

      {/* Key Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-[18px] leading-relaxed mt-6">
        {/* Left Side */}
        <div>
          <p>✅ <span className="font-semibold">Quick and Easy Interface</span> – A simple, user-friendly platform for effortless ordering, saving time and boosting efficiency.</p>
          <p>✅ <span className="font-semibold">Hassle-Free Supply</span> – Reliable farm-to-business supply chain ensuring smooth, timely deliveries without disruptions.</p>
          <p>✅ <span className="font-semibold">Affordable Cost</span> – Direct sourcing from farmers eliminates middlemen, offering competitive pricing with no hidden costs.</p>
        </div>

        {/* Right Side */}
        <div>
          <p>✅ <span className="font-semibold">Wider Selection of Produce</span> – Access a diverse range of fresh produce, staples, sweets, and snacks in one place.</p>
          <p>✅ <span className="font-semibold">Consistently Exceptional Standards</span> – Every product is handled with care to maintain its natural integrity and freshness.</p>
          <p>✅ <span className="font-semibold">Flexible and Tension-Free Ordering</span> – Custom bulk orders, flexible deliveries, and a seamless ordering process for convenience.</p>
        </div>
      </div>
    </motion.div>

    {/* Animated Image Section */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center sm:text-left flex justify-center items-center"
    >
      <img
        src={About}
        alt="About"
        className="w-full h-full rounded-md shadow-lg"
      />
    </motion.div>
  </div>
</section>


     <section id="features" className="features py-16 px-4 sm:px-10 bg-green-50">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: "bi-graph-up-arrow",
                title: "Market Price Updates",
                description:
                  "We Provide you the Latest updates on Market price for Produce",
              },
              {
                icon: "bi-bar-chart-line",
                title: "Weekly Demand Forecasting",
                description:
                  "We predict the demand for the produce accurately and reduce the post harvest losses",
              },
              {
                icon: "bi-cart3",
                title: "Best prices on seeds and pesticides",
                description:
                  "Get Good Quality Seeds and Pesticides from Sellers at Affordable Cost",
              },
              {
                icon: "bi-award",
                title: "Expert Crop Doctors",
                description:
                  "Seek Advisory from Expert Agri Consultants and Prevent Your Crops from Diseases",
              },
              {
                icon: "bi-lightning-charge",
                title: "Quick and Free Pickup",
                description:
                  "Free and Quick Farm gate pickup for Products sold in the platform",
              },
              {
                icon: "bi-cloud-rain-heavy",
                title: "Weather Forcasting",
                description:
                  "We Provide the Weather details in an easily accessible Platform for Farmers",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="icon-box p-4 bg-white shadow-md rounded-md text-center"
              >
                <i className={`text-green-500 text-3xl mb-4 ${feature.icon}`}></i>
                <h4 className="font-bold mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center sm:text-left">
            <img
              src={Feature}
              alt="Features"
              className="mx-auto max-w-full h-auto rounded-md"
            />
          </div>
        </div>
      </section>

      <section id="registration" className="registration py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get Started</h2>
          <p className="text-gray-600 mb-6">
            Join With CropzapGrower and Transform your Farming
          </p>
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto grid grid-cols-1 gap-4"
          >
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              className="form-input p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Your phone number"
              className="form-input p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              className="form-input p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <select
              name="option"
              value={formData.option}
              onChange={handleChange}
              className="form-select p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="Individual Farmer">Individual Farmer</option>
              <option value="Group of Farmers">Group of Farmers</option>
              <option value="Farmer Producer Organisation">
                Farmer Producer Organisation
              </option>
              <option value="Others">Others</option>
            </select>
            <textarea
              name="farmDescription"
              value={formData.farmDescription}
              onChange={handleChange}
              rows={4}
              placeholder="Describe your farm and crops..."
              className="form-textarea p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            ></textarea>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows={4}
              placeholder="Your complete address"
              className="form-textarea p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            ></textarea>
            <button className="btn bg-green-500 text-white px-6 py-3 rounded-md" disabled={btnLoader}>
              {btnLoader ? (
                <div className="inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
                </div>
              ) : "Submit"}
            </button>
          </form>
        </div>
      </section>

      <Modal isOpen={modalOpen} onClose={closeModal} message={modalMessage} />
    </main>
  );
};

export default CropzapGrower;
