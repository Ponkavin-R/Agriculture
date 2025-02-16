import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";


const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
      businessName: "",
      name: "",
      phone: "",
      email: "",
      website: "",
      role: "",
      address: "",
      createdAt: new Date(),
    });
  
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState({ title: '', content: '' });
    const [btnLoader, setBtnLoader] = useState(false);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    interface ModalMessage {
      title: string;
      content: string;
    }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setBtnLoader(true);
    try {
      formData.createdAt = new Date();
      const response = await axios.post(import.meta.env.VITE_MONGO_DB_URL + 'mart', formData);

      console.log(response);
      if (response.status === 201 || response.status === 200 || response.status === 250) {
        // const mail_response = 
        await fetch(
          import.meta.env.VITE_MONGO_DB_URL +
          "send-email-mart",
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

      setSuccessMessage(response.data.message);
      setError("");

      setFormData({
        businessName: "",
        name: "",
        phone: "",
        email: "",
        website: "",
        role: "",
        address: "",
        createdAt: new Date(),
      });

    } catch (error) {
      console.log(error);
      setModalMessage({ title: 'Error', content: 'Failed to submit the form.' } as ModalMessage);
      setBtnLoader(false);
      setError("Failed to submit form. Please try again.");
      setSuccessMessage("");
    }
    setModalOpen(true);
    setBtnLoader(false);
  };

  return (
<div className="flex flex-col items-center">
      {/* Background Image Section */}
      <section className="relative w-full h-[70vh] mt-16">
        <img
          src="/bg/getstart.png"
          alt="Agricultural Innovation"
          className="absolute inset-0 w-full h-full object-fill"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-left text-white z-10">
    <h1 className="text-5xl font-bold mt-44">Empowering Farmers Transforming Agriculture
    </h1><br></br>
    <p className="text-3xl">Vertezy brings smarter, data-driven farming solutions to help you grow efficiently, reduce risks, and achieve sustainable success with ease.
    </p>
  </div>
      </section>

      {/* Registration Form Section */}
      <section className=" relative max-w-7xl w-full px-6 lg:flex lg:items-start lg:justify-between lg:gap-16 py-3">

        {/* Left: About Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2}}
          className="lg:w-1/2 text-gray-800 mb-10 lg:mb-0"
        >
          <h2 className="text-5xl font-bold text-gray-700 mb-4 mt-10">About Cropzap</h2><br></br>
          <p className="text-gray-600 mb-6 text-[20px]">
            Cropzap’s Agri Services bring farmers and businesses closer to the right resources, insights, and market opportunities. By integrating technology with expert-backed support, we simplify decision-making, improve productivity, and ensure seamless access to essential agricultural solutions.
          </p>
          <ul className="space-y-9">
            <li className="text-[18px] mb-6"><strong className="text-green-700 text-[20px]">✅ Grow with Confidence:</strong> <br></br> Get the right insights and guidance to make informed farming decisions, ensuring better outcomes and steady growth.
            </li>
            <li className="text-[18px] mb-6"><strong className="text-green-700 text-[20px]">✅ Seamless Support:</strong> <br></br>Access expert-driven assistance and innovative solutions that simplify your farming journey without unnecessary complications.
            </li>
            <li className="text-[18px] mb-6"><strong className="text-green-700 text-[20px]">✅ Smarter Decisions:</strong><br></br>Leverage data-driven strategies to optimize cultivation, minimize risks, and enhance productivity with ease.
            </li>
            <li className="text-[18px] mb-6"><strong className="text-green-700 text-[20px]">✅ Stronger Yields:</strong> <br></br>Adopt advanced techniques and smarter farming approaches to achieve better harvests and consistent results season after season.
            </li>
            <li className="text-[18px] mb-6"><strong className="text-green-700 text-[20px]">✅ Sustainable Growth:</strong> <br></br>Embrace modern agricultural solutions that not only improve efficiency but also contribute to long-term prosperity and stability.
            </li>
          </ul>
        </motion.div>

        {/* Right: Registration Form */}
        <motion.section
          id="registration-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="w-[600px] bg-green-200 rounded-2xl shadow-xl p-8 border border-gray-200 mt-10"
        >
          <div className="text-center">
            <h2 className="text-6xl font-bold text-green-700 mb-4">Get Started</h2>
            <p className="text-gray-700 mb-6 text-[20px]">Join CropzapMart and transform your procurement journey.</p>
          </div>
            <div className="form-container max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit}>
                {[
                  {
                    label: "Business Name",
                    id: "businessName",
                    type: "text",
                    placeholder: "Enter your business name",
                    required: true,
                  },
                  {
                    label: "Your Name",
                    id: "name",
                    type: "text",
                    placeholder: "Your full name",
                    required: true,
                  },
                  {
                    label: "Phone",
                    id: "phone",
                    type: "tel",
                    placeholder: "Your phone number",
                    required: true,
                  },
                  {
                    label: "Email",
                    id: "email",
                    type: "email",
                    placeholder: "Your email address",
                    required: false,
                  },
                  {
                    label: "Website/URL",
                    id: "website",
                    type: "text",
                    placeholder: "Your website URL",
                    required: false,
                  },
                ].map((field: any, index: number) => (
                  <div className="form-group mb-4" key={index}>
                    <label
                      htmlFor={field.id}
                      className="block text-gray-700 font-medium mb-1"
                    >
                      {field.label} {field.required && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={formData[field.id]}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </div>
                ))}
                <div className="form-group mb-4">
                  <label
                    htmlFor="role"
                    className="block text-gray-700 font-medium mb-3"
                  >
                    Which represents you better? <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="Super Markets">Super Markets</option>
                    <option value="Vegetable Stores">Vegetable Stores</option>
                    <option value="Kirana Stores">Kirana Stores</option>
                    <option value="Restaurants">Restaurants</option>
                    <option value="Canteens & Hostels">Canteens & Hostels</option>
                    <option value="Tea Shops / Bakery">Tea Shops / Bakery</option>
                    <option value="Modern Retail">Modern Retail</option>
                    <option value="One Time Customer / Party Orders">One Time Customer / Party Orders</option>
                    <option value="Sandhai / Road Side Customers / Push Carts">Sandhai / Road Side Customers / Push Carts</option>
                    <option value="Exporter">Exporter</option>
                    <option value="Fruits Shop / Juice Shop">Fruits Shop / Juice Shop</option>
                    <option value="Chain of Restaurants">Chain of Restaurants</option>
                    <option value="Thaluk Market - Retailer">Thaluk Market - Retailer</option>
                    <option value="Manufacturer">Manufacturer</option>
                    <option value="Uzhavar Sandhai">Uzhavar Sandhai</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="form-group mb-4">
                  <label
                    htmlFor="address"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    rows={4}
                    placeholder="Your complete address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="submit-btn bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-700"
                >
                  {btnLoader ? (
                    <div className="inset-0 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
                    </div>
                  ) : "Submit"}                </button>
              </form>
              {error && <div className="mt-4 text-red-600">{error}</div>}
              {successMessage && <div className="mt-4 text-green-600">{successMessage}</div>}
            </div>
            </motion.section>
      </section>

        </div>
  );
};

export default RegistrationForm;
