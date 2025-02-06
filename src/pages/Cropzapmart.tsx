import React, { useState } from "react";
import axios from "axios";

const Cropzapmart: React.FC = () => {
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
    
    <div className="pt-16 sm:px-8 md:px-16 lg:px-0">
      {/* Hero Section */}
      <section className="relative py-44 h-auto">
  <div className="absolute inset-0">
    <img src="/blog/contact.webp" alt="Agricultural Innovation" className="w-full h-full object-fill" />
  </div>
  <div className="relative max-w-7xl mx-auto px-4 text-left text-white z-10">
    <h1 className="text-4xl font-bold mb-4">CropzapMart</h1>
    <p className="text-xl">Cropzap Mart is your trusted online platform for<br></br> sourcing high-quality agricultural produce with ease.</p>
  </div>
</section>
      <div className="container mx-auto flex flex-col md:flex-row  gap-5 justify-between mt-24">
        <section className="w-full md:w-1/2 h-fit md:h-fit max-w-[400px] md:max-w-none">
          <h3 className="text-4xl font-bold mb-4">What is CropzapMart</h3>
          <p className="text-gray-700 text-[18px] text-justify p-2">
            Cropzap Mart is your trusted online platform for sourcing high-quality agricultural produce with ease.
             It offers businesses a seamless way to purchase fresh, premium-grade produce directly from farmers. 
             With just a few clicks, you can explore a diverse range of products and place orders from the convenience
             of your home or office. Say goodbye to lengthy supply chains and enjoy a transparent buying experience
             with reliable delivery and traceability. Join Cropzap Mart today and simplify your agri-produce sourcing process!
          </p>
          <div >
    <img src="/blog/contractmart.webp" />
  </div>
        </section>

        {/* Registration Section */}
        <section id="registration-section" className="w-[600px] bg-green-200 rounded-lg">
          <div className="container max-w-full px-4 text-center">
            <h2 className="text-3xl font-bold  mt-7" data-aos="fade-up">
              Get Started
            </h2>
            <p className="mb-8" data-aos="fade-up" data-aos-delay="100">
              Join With CropzapMart and Transform your procurement journey
            </p>
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
                      className="block text-gray-700 font-medium mb-2"
                    >
                      {field.label} {field.required && <span>*</span>}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={formData[field.id]}
                      onChange={handleChange}
                      className="w-full border-gray-300 rounded-lg shadow-sm p-3"
                    />
                  </div>
                ))}
                <div className="form-group mb-4">
                  <label
                    htmlFor="role"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Which represents you better? <span>*</span>
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-lg shadow-sm p-3"
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
                    Address <span>*</span>
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    rows={4}
                    placeholder="Your complete address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-lg shadow-sm p-3"
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cropzapmart;
