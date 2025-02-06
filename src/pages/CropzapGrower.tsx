import React, { useState } from "react";
import axios from "axios";
import About from "../assest/farmerabout.jpeg";
import Feature from "../assest/farmerfeature.jpeg";
import Modal from "../components/ModelPopup";

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
    <main className="main pt-20 px-4 sm:px-8 lg:px-36">
      <section id="about" className="about py-16 bg-white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">What is CropzapGrower</h3>
            <p className="text-gray-600 mb-6">
              Cropzap Grower is your go-to platform for farmers,Providing easy access to quality inputs for cultivation and the latest agricultural updates. Engage with a community of fellow farmers by sharing video content and tips for success. Market your produce quickly and efficiently, connecting directly with buyers. Join Cropzap Grower today and empower your farming journey!
            </p>

          </div>
          <div className="text-center sm:text-left">
            <img
              src={About}
              alt="About"
              className="mx-auto max-w-full h-auto rounded-md shadow-lg"
            />
          </div>
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
