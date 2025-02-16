import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';
import Modal from '../components/ModelPopup';
import { motion } from "framer-motion";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
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
    console.log(formData)
    try {
      formData.createdAt = new Date();
      const response = await axios.post(import.meta.env.VITE_MONGO_DB_URL + 'contact', formData);

      if (response.status === 201 || response.status === 200 || response.status === 250) {
        // const mail_response = 
        await fetch(
          import.meta.env.VITE_MONGO_DB_URL +
          "send-email-contact",
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
        name: "",
        phone: "",
        email: "",
        message: "",
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
const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6} },
  };

  return (
    <div className="pt-16">
      <section className="relative py-20 mt-2 h-[450px]">
  <div className="absolute inset-0">
    <img src="/bg/contacts.jpg" alt="Agricultural Innovation" className="w-full h-full object-fill" />
  </div>
  <div className="relative max-w-7xl mx-auto px-4 text-left text-gray-800 z-10">
    <h1 className="text-6xl font-bold mt-5">Get in touch with us</h1><br></br><br></br>
    <p className="text-3xl font-bold">We'd love to hear from you. Here's how you can reach us.</p>
  </div>
</section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Details with Animation */}
            <motion.div
              className="space-y-8"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="text-green-600" /> Address
                </h3>
                <p className="text-gray-600">
                  132 B, Roja Nagar, Kattur road<br />
                  Near Sudhan Yarns, Behind JK tech Systems<br />
                  Chennimalai, Erode - 638051
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Phone className="text-green-600" /> Call Us
                </h3>
                <p className="text-gray-600">
                  <a target='_blank' rel="noopener noreferrer" href="tel:+919952492456">+91 9952492456</a><br />
                  <a target='_blank' rel="noopener noreferrer" href="tel:+916385498290">+91 6385498290</a>
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Mail className="text-green-600" /> Email Us
                </h3>
                <a href="mailto:info@cropzap.com" target="_blank" rel="noopener noreferrer" className="text-gray-600">
                  info@cropzap.com
                </a>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold mb-4">Open Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <span className="font-medium">Monday - Saturday</span><br />
                    07:00AM - 09:00PM
                  </p>
                  <p>
                    <span className="font-medium">Sunday</span><br />
                    10:00AM - 04:00PM
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-green-500 border-2">
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your name"
                    value={formData.name}
                    name="name"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    name="phone"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-green-500"
                    rows={4}
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition duration-300"
                >
                  {btnLoader ? "Sending..." : "Send message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Modal isOpen={modalOpen} onClose={closeModal} message={modalMessage} />
    </div>
  );
}