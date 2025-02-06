import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import Corevalues from './Corevalues';


function StatCounter({ value, isP, isH }: { value: number; isP: boolean; isH: boolean }) {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    if (!isCounting) return;

    let start = 0;
    const end = value;
    const duration = 2000; // Animation duration in milliseconds
    const incrementTime = 16; // Interval between increments (60 FPS)

    const step = Math.ceil(end / (duration / incrementTime));

    const counter = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(counter);
  }, [value, isCounting]);

  return (
    <motion.span
      onViewportEnter={() => setIsCounting(true)} // Trigger counting when the element enters the viewport
    >
      {isP ? (
        <p>{count}%</p>
      ) : isH ? (
        <h1>24/7</h1>
      ) : (
        <h2>{count}+</h2>
      )}
    </motion.span>
  );
}

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  const parallaxRef = useRef(null);
  const imageRefs = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const element = parallaxRef.current;

    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        scrub: true,
        start: '-5% top', // Adjust as needed
        end: 'bottom top', // Adjust as needed
        // markers: true,
      },
      scale: 1.2,
      yPercent: -10,
      ease: 'none',
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


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
    <div className="pt-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[91.5vh] bg-cover bg-center" style={{
        // backgroundImage: 'url("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070")'
        // backgroundImage: 'url("/public/bg/bg.jpg")'
      }}>
        <div
          ref={parallaxRef}
          className="absolute w-full h-full">
          <img src="/bg/bg2.jpg" alt="Hero Image" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-10 justify-center text-center h-full flex items-center">
          {/* <div className="text-white max-[770px]:hidden">

            <Reveal>
              <motion.h1
                className="bg-red-500 h-auto w-full max-[770px]:hidden overflow-hidden font-bold max-md:text-[6vw] max-sm:text-[9vw] max-lg:leading-[1.3] mb-6 text-[4vw] text-transparent bg-clip-text bg-gradient-to-br from-green-50 tracking-tighter to-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Transforming Agriculture through Data-driven Solutions

              </motion.h1>
            </Reveal>
            <Reveal delay={0.7}>
              <p className="text-xl mb-8 min-md:text-[4vw] max-sm:text-[3.5vw] max-[770px]:hidden">Nurturing Communities through Innovation and Sustainability</p>
            </Reveal>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex gap-4 justify-center max-[770px]:hidden ">
              <Link to="/contact" className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300">
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link to="/our-story" className="inline-flex items-center border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-green-700 transition duration-300">
                Learn More
              </Link>
            </motion.div>
          </div> */}
          <div className="flex  items-center text-center flex-col gap-5">
            <div className="logo">
              <img src="/logo/logo_bg.png" alt="Logo" className="w-20 h-20" />
            </div>
            <h1 className='uppercase text-white font-bold text-4xl'>Cropzap</h1>
            <p className='text-white font-medium text-lg'>Transforming Agriculture, through data-driven solutions, Nourishing Communities

            </p>
            <div className="flex flex-col text-white font-bold text-lg">
            <img src="\logo\arrow-down-on-black-background-vector-22564743-removebg-preview.png" alt="Logo" className="w-20 h-20" />
                
              </div>

            <Link to="/our-story" className="inline-flex items-center border-2 border-white text-white px-6 py-3 rounded-full hover:scale-110 hover:border-green-300  hover:text-green-300 transition duration-300">
              About
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold mb-6">Welcome to Cropzap</h2>
              <p className="text-gray-600 mb-6">
                Where innovation meets agriculture. We empower farmers, Farmer Producer Organizations (FPOs),
                and businesses through a comprehensive platform designed to streamline transactions, enhance
                productivity, and maximize profitability.
              </p>
              <p className="text-gray-600 mb-6">
                Catering to the agricultural requirements of smaller urban areas in India by delivering a steady stream of fresh Vegetables, Fruits, and Groceries. At Cropzap, we have faith in the potential of innovation to transform the agricultural landscape. Our goal is straightforward yet impactful: to connect farmers and consumers while transforming the process through which fresh produce and groceries are delivered to households.
              </p>
              <p className="text-gray-600">
                By integrating cutting-edge technology with expert insights, we aim to transform the
                agricultural landscape and foster sustainable growth for all stakeholders.
              </p>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-lg"
            >
              <img
                ref={(el) => el && imageRefs.current.push(el)} src="/about/about1.jpg"
                alt="Modern Farming"
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 50, label: "Farmers Connected" },
              { value: 50, label: "Businesses Connected" },
              { value: 100, label: "Happy Customers" },
              { value: 24, label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.5 }}
              >
                <div className="text-4xl font-bold mb-2">
                  <StatCounter
                    value={stat.value}
                    isP={stat.label === "Happy Customers"}
                    isH={stat.label === "Support Available"}
                  />                </div>
                <div className="text-green-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      
   <Corevalues/>   

      {/* Features Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-10">
          <motion.h2
            className="text-3xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Cropzap?
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience the future of agriculture with our innovative platform
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain className="text-green-600 mb-4" size={32} />,
                title: "Smart Analytics",
                description: "Data-driven insights to optimize your agricultural operations",
              },
              {
                icon: <Users className="text-green-600 mb-4" size={32} />,
                title: "Community Support",
                description: "Connect with experts and fellow farmers",
              },
              {
                icon: <BarChart className="text-green-600 mb-4" size={32} />,
                title: "Market Intelligence",
                description: "Real-time market data and price trends",
              },
              {
                icon: <TrendingUp className="text-green-600 mb-4" size={32} />,
                title: "Growth Support",
                description: "Tools and resources for sustainable growth",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg  transition duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                {feature.icon}
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-10">
    <h2 className="text-3xl font-bold text-center mb-4">Our Solutions</h2>
    <p className="text-center text-[20px] mb-12 text-gray-600 max-w-3xl mx-auto">
      We designed solutions that meet the demand for farmers in fulfillment of trade and knowledge,
      building a trusted and sustainable marketplace for agri trade.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Grower Section */}
      <div className="relative overflow-hidden hover:scale-105 rounded-lg transition duration-300 group">
        {/* Image */}
        <img
          ref={(el) => el && imageRefs.current.push(el)}
          src="/solutions/grower.jpg"
          alt="Farmer"
          className="w-full h-[400px] object-cover transition duration-300 group-hover:opacity-100 opacity-60 absolute top-0 left-0"
        />
        {/* Optional Content Overlay */}
        <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition duration-300 z-10"></div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 z-20">
          <h3 className="text-2xl font-semibold text-white mb-4">Cropzap Grower</h3>
          <p className="text-white mb-6 text-[17px]">
            Are you actively farming or representing a farmer producer organization and want to enhance agricultural productivity?
          </p>
          <Link
            to="/solution/form1"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full justify-center"
          >
            Register Now <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>

      {/* Mart Section */}
      <div className="relative overflow-hidden hover:scale-105 rounded-lg transition duration-300 group">
        {/* Image */}
        <img
          ref={(el) => el && imageRefs.current.push(el)}
          src="/solutions/tradecenter.jpg"
          alt="Business"
          className="w-full h-[400px] object-cover transition duration-300 group-hover:opacity-100 opacity-60"
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition duration-300 z-10"></div>
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 z-20">
          <h3 className="text-2xl font-semibold text-white mb-4">Cropzap Mart</h3>
          <p className="text-white text-[17px] mb-6">
            Do you operate a shop, restaurant, canteen, or represent a business?
          </p>
          <Link
            to="/solution/form2"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full justify-center"
          >
            Register Now <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  );
}