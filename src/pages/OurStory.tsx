import React, { useEffect, useRef } from 'react';
import { Brain, TrendingUp, BarChart, LineChart, Target, Lightbulb, Asterisk, Users, BarChart2, FileText, CloudSun, User, Calendar } from 'lucide-react';
import { motion } from "framer-motion";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function AboutPage() {
  gsap.registerPlugin(ScrollTrigger);

  const imageRefs = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    imageRefs.current.forEach((element) => {
      if (element) {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            scrub: true,
            // start: 'top top', // Adjust as needed
            // end: 'bottom top', // Adjust as needed
          },
          yPercent: -20,
          ease: 'none',
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [imageRefs]);
   
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 mt-16 h-[500px]">
  <div className="absolute inset-0">
    <img src="/bg/ourstory.jpg" alt="Agricultural Innovation" className="w-full h-full object-fill" />
  </div>
  <div className="relative max-w-7xl mx-auto px-4 text-left text-white z-10">
    <h1 className="text-6xl font-bold mt-24">Our Story</h1><br></br>
    <p className="text-3xl">The Roots of Agricultural Innovation.</p>
  </div>
</section>


      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Combining technology with expert insights</h2>
              <p className="text-gray-600  text-[18px] mb-6">
                At Cropzap, we believe in the power of data and collaboration. Our platform offers a suite of services,
                from market data analytics to personalised business intelligence, ensuring our customers stay ahead of
                market trends and make informed decisions.
              </p>
              <p className="text-gray-600 text-[18px]">
                Join us on this journey to create a more connected and efficient agricultural ecosystem.
              </p>
            </div>
            <div className="relative">
              <img
                src="\bg\agriculture-tech.jpg"
                alt="Farming Technology"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-40">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-2 rounded-lg shadow-lg flex flex-col items-center text-center relative w-full"
          >
            {/* Full-width Line Behind Circle */}
            <div className="relative flex items-center justify-center w-full">
              <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-16 bg-gradient-to-r from-green-600 to-blue-500"></div>
              
              {/* Outlined Circle */}
              <div className="w-28 h-28 flex items-center justify-center rounded-full border-4 border-green-500 bg-white shadow-md relative z-10">
                <Lightbulb size={42} className="text-green-700" />
              </div>
            </div>

            <h3 className="text-3xl font-bold mt-6">Our Vision</h3>
            <p className="text-gray-600 text-lg mt-4 text-left pl-6">
              To be a global leader in agritech, empowering farmers with
              cutting-edge solutions for a sustainable food ecosystem where all
              businesses and value chains prosper.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-2 rounded-lg shadow-lg flex flex-col items-center text-center relative w-full"
          >
            {/* Full-width Line Behind Circle */}
            <div className="relative flex items-center justify-center w-full">
              <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-16 bg-gradient-to-r from-green-600 to-blue-500"></div>
              
              {/* Outlined Circle */}
              <div className="w-28 h-28 flex items-center justify-center rounded-full border-4 border-green-500 bg-white shadow-md relative z-10">
                <Target size={42} className="text-green-700" />
              </div>
            </div>

            <h3 className="text-3xl font-bold mt-6">Our Mission</h3>
            <ul className="text-gray-600 text-lg mt-3 text-left pl-8 pr-4 list-disc marker:text-green-600">
              <li>Transform agriculture through innovation: Boost productivity, minimize space, maximize business profitability.</li>
              <li className="mt-2">Build a resilient value chain: Connect farmers directly to businesses, ensuring fair prices and access to high-quality produce.</li>
            </ul>

          </motion.div>
        </div>
      </div>
    </section>
 

      {/* Founder's Message */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 bg-white rounded-lg shadow-lg">
          <div className='flex justify-between max-md:flex-wrap max-md:justify-center items-center'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8"
            >
              <h2 className="text-3xl font-bold mb-6 text-green-700">Founder's Message</h2>
              <p className="text-gray-600 mb-4 text-justify text-[18px]">
                I'm Dharunkumar, the Founder and CEO of Cropzap Agri Networks. Our mission is rooted in the belief that technology and data-driven decisions are essential to transforming agriculture. I started this venture with a vision to empower farmers and revolutionize agricultural practices.
              </p>
              <p className="text-gray-600 text-justify text-[18px]">
                Agriculture is not just the backbone of India's economy but the pathway to realizing the quote by Honorable Prime Minister Narendra Modi, to make the country a $5 trillion economy. With the integration of agricultural technology and innovative commodity exchange models, we aim to secure India's food future while fostering sustainability and economic growth.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white overflow-hidden p-8 max-w-[450px] w-full flex justify-center items-center">
              <img src="/founder/founder.jpg" alt="founder" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Values */}
      <section className="py-20 bg-white">
        <div className="max-w-9xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Key Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-[300px]">
            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white border border-gray-400 rounded-3xl p-8 shadow-2xl  group hover:shadow-xl transition-shadow duration-300 group"
          >
            {/* Image background: Hidden initially, fades in on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div> 
              <img src="/about/about1.jpg" alt="Background Image" className="w-full h-full object-cover rounded-lg" />
            </div>

            {/* Text content: Text turns white on hover and is placed in front of the image */}
            <div className="relative z-10">
              <Brain className="mx-auto text-green-600 mb-4 group-hover:text-white transition-all duration-300" size={40} />
              <h3 className="font-bold text-[22px] mb-2 group-hover:text-white transition-all duration-300">Technology Empowerment</h3>
              <p className="text-gray-600 text-[18px] group-hover:text-white transition-all duration-300">
                Empowering through technology and data-driven solutions
              </p>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white border border-gray-400 rounded-3xl p-8 shadow-2xl  group hover:shadow-xl transition-shadow duration-300 group"
          >
             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Dark Overlay */}
              <img src="/about/economicgrowth.jpg" alt="Background Image" className="w-full h-full object-cover" />
            </div>

            <div className="relative z-10">
              <TrendingUp className="mx-auto text-green-600 mb-4 group-hover:text-white transition-all duration-300" size={40} />
              <h3 className="font-bold text-[22px] mb-2 group-hover:text-white transition-all duration-300">Economic Growth</h3>
              <p className="text-gray-600 text-[18px] group-hover:text-white transition-all duration-300">
                Driving economic growth by supporting India's 5 trillion dollar goal</p>
              </div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white border border-gray-400 rounded-3xl p-8 shadow-2xl text-center  group hover:shadow-xl transition-shadow duration-300 group"
          >
            {/* Image background: Hidden initially, fades in on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-black bg-opacity-50 "></div> 
              <img src="/about/sutainable growth.jpg" alt="Background Image" className="w-full h-full object-cover " />
            </div>

            {/* Text content: Text turns white on hover and is placed in front of the image */}
            <div className="relative z-10">
              <BarChart  className="mx-auto text-green-600 mb-4 group-hover:text-white transition-all duration-300" size={40} />
              <h3 className="font-bold text-[22px] mb-2 group-hover:text-white transition-all duration-300">Sustainable Practices</h3>
              <p className="text-gray-600 text-[18px] group-hover:text-white transition-all duration-300">
              Commitment to sustainable and innovative agricultural practices
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white border border-gray-400 rounded-3xl p-8 shadow-2xl  text-center group hover:shadow-xl transition-shadow duration-300 group"
          >
            {/* Image background: Hidden initially, fades in on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div> 
              <img src="/about/food security.jpg" alt="Background Image" className="w-full h-full object-cover " />
            </div>

            {/* Text content: Text turns white on hover and is placed in front of the image */}
            <div className="relative z-10">
              <LineChart className="mx-auto text-green-600 mb-4 group-hover:text-white transition-all duration-300" size={40} />
              <h3 className="font-bold text-[22px] mb-2 group-hover:text-white transition-all duration-300">Food Security</h3>
              <p className="text-gray-600 text-[18px] group-hover:text-white transition-all duration-300">
                Enhancing food security through advanced agricultural models</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Value Proposition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* For Farmers */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-green-700">For Farmers</h3>
              <ul className="space-y-4 text-gray-600 pl-5">
                <li className="flex items-start">
                  <Asterisk size={25} className=" text-green-700 mr-4" />
                  <span><span className='font-bold text-green-700'>Better Price:</span> Receive better price for produce.</span>
                </li>
                <li className="flex items-start">
                  <Asterisk size={25} className=" text-green-700 mr-4" />
                  <span><span className='font-bold text-green-700'>Access to Quality Inputs:</span> Reliable access to high-quality seeds and manure.</span>
                </li>
                <li className="flex items-start">
                  <Asterisk size={25} className=" text-green-700 mr-4" />
                  <span><span className='font-bold text-green-700'>Expert Guidance:</span> Support to enhance yield and productivity.</span>
                </li>
                <li className="flex items-start">
                  <Asterisk size={25} className=" text-green-700 mr-4" />
                  <span><span className='font-bold text-green-700'>Data-Driven Decision Making:</span> Real-time insights to improve farming practices.</span>
                </li>
                <li className="flex items-start">
                  <Asterisk size={25} className=" text-green-700 mr-4" />
                  <span><span className='font-bold text-green-700'>Improved Market Access:</span> Direct connections with businesses.</span>
                </li>
                <li className="flex items-start">
                  <Asterisk size={25} className=" text-green-700 mr-4" />
                  <span><span className='font-bold text-green-700'>Increased Profitability:</span> Cost reduction and higher profit margins.</span>
                </li>
              </ul>
            </div>

            {/* For Businesses */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-green-700">For Businesses</h3>
              <div className="space-y-4 text-gray-600 pl-5 flex flex-col flex-start justify-start items-start">
                <div className="flex items-start">
                  <Asterisk size={25} className=" text-green-700 mr-4" />
                  <span><span className='font-bold text-green-700'>Fresh Produce at Affordable Cost:</span> Access to high-quality produce at affordable cost.</span>
                </div>
                <div className="flex items-start">
                  <Asterisk size={25} className=" text-green-700 mr-4" />
                  <span><span className='font-bold text-green-700'>Ensured Quality:</span> Verified sourcing from trusted farmers.</span>
                </div>
                <div className="flex items-start">
                  <Asterisk size={25} className=" text-green-700 mr-4" />
                  <span><span className='font-bold text-green-700'>Convenient
                    and Timely Delivery:</span> Reliable logistics ensure produce arrives on time.</span>
                </div>
                <div className="flex items-start">
                  <Asterisk size={25} className=" text-green-700 mr-4" />
                  <span><span className='font-bold text-green-700'>Transparency and Traceability:</span> Complete visibility into the supply chain for better decision making.</span>
                </div>
                <div className="flex items-start">
                  <Asterisk size={25} className=" text-green-700 mr-4" />
                  <span><span className='font-bold text-green-700'>Reduce Waste:</span> Efficient processes minimize waste and enhance sustainability.</span>
                </div>
                <div className="flex items-start">
                  <Asterisk size={25} className=" text-green-700 mr-4" />
                  <span><span className='font-bold text-green-700'>Cost Efficiency:</span> Affordable produce help business to reduces procurement costs.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Cropzap Code */}
      <section className="py-20 sm:px-10 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">The Cropzap CODE</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-bold text-xl mb-4 text-green-700">Collaboration</h3>
              <p className="text-gray-600">Building strong partnerships with farmers, businesses, and stakeholders</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-bold text-xl mb-4 text-green-700">Optimization</h3>
              <p className="text-gray-600">Making every aspect of the supply chain more efficient</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-bold text-xl mb-4 text-green-700">Development</h3>
              <p className="text-gray-600">Committed to continuous growth and improvement</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-bold text-xl mb-4 text-green-700">Empowerment</h3>
              <p className="text-gray-600">Providing tools, data, and support for informed decisions</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
  <div className="max-w-7xl mx-auto px-4">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
      The <span className="underline decoration-green-500">Highlights</span>
    </h2>
    <p className="text-center text-lg text-gray-600 mb-12">
      Join <span className="font-semibold text-green-600">Cropzap</span>  today and experience the future of agriculture, where data-driven decisions lead to unparalleled success.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Digital Marketplace */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="p-6 rounded-lg border-2  hover:border-teal-500 hover:shadow-xl transition duration-300"
      >
        <Users className="text-green-600 mb-4" size={40} />
        <h3 className="text-xl font-semibold mb-4">Digital Marketplace</h3>
        <p className="text-gray-600">
          Transforming agriculture with a data-driven platform connecting farmers, FPOs, and businesses for optimized pricing, supply chain efficiency, and sustainable growth.
        </p>
      </motion.div>

      {/* Market Data & Analytics */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="p-6 rounded-lg border-2  hover:border-teal-500  hover:shadow-xl transition duration-300"
      >
        <BarChart2 className="text-green-600 mb-4" size={40} />
        <h3 className="text-xl font-semibold mb-4">Market Data & Analytics</h3>
        <p className="text-gray-600">
          Access real-time market prices, accurate demand forecasts, and competitor analysis. Make informed decisions swiftly and strategically.
        </p>
      </motion.div>

      {/* Operational & Financial Analytics */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="p-6 rounded-lg border-2  hover:border-teal-500 hover:shadow-xl transition duration-300"
      >
        <TrendingUp className="text-green-600 mb-4" size={40} />
        <h3 className="text-xl font-semibold mb-4">Operational & Financial Analytics</h3>
        <p className="text-gray-600">
          Optimize yields, manage resources efficiently, and analyze financial performance to maximize profitability.
        </p>
      </motion.div>

      {/* Commodity Insights & Agri News Forecasting */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        viewport={{ once: true }}
        className="p-6 rounded-lg border-2  hover:border-teal-500 hover:shadow-xl transition duration-300"
      >
        <FileText className="text-green-600 mb-4" size={40} />
        <h3 className="text-xl font-semibold mb-4">Commodity Insights & Agri News Forecasting</h3>
        <p className="text-gray-600">
          Leverage weather analysis, pest forecasting, and market risk assessments for informed agricultural decisions.
        </p>
      </motion.div>

      {/* Risk Management */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        viewport={{ once: true }}
        className="p-6 rounded-lg border-2  hover:border-teal-500 hover:shadow-xl transition duration-300"
      >
        <CloudSun className="text-green-600 mb-4" size={40} />
        <h3 className="text-xl font-semibold mb-4">Risk Management</h3>
        <p className="text-gray-600">
          Stay ahead with weather analysis, pest forecasting, and market risk assessments to mitigate risks effectively.
        </p>
      </motion.div>

      {/* Dedicated Support */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        viewport={{ once: true }}
        className="p-6 rounded-lg border-2 hover:border-teal-500 hover:shadow-xl transition duration-300"
      >
        <User className="text-green-600 mb-4" size={40} />
        <h3 className="text-xl font-semibold mb-4">Dedicated Support</h3>
        <p className="text-gray-600">
          Benefit from personalized consultations, dedicated account managers, and customized business strategies.
        </p>
      </motion.div>

      {/* Networking Events */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        viewport={{ once: true }}
        className="p-6 rounded-lg border-2 hover:border-teal-500 hover:shadow-xl transition duration-300"
      >
        <Calendar className="text-green-600 mb-4" size={40} />
        <h3 className="text-xl font-semibold mb-4">Networking Events</h3>
        <p className="text-gray-600">
          Participate in high-impact events to boost visibility and networking opportunities.
        </p>
      </motion.div>
    </div>
  </div>
</section>

      
    </div>
  );
}