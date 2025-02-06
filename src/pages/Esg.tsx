import React from "react";

const ESG = () => {
  return (
   
        <div className="bg-gray-100 text-gray-900">
          {/* Hero Section */}
          <section className="relative py-72 h-auto">
            <div className="absolute inset-0">
              <img
                src="/blog/esgbg.jpg"
                alt="Agricultural Innovation"
                className="w-full h-full object-cover mt-4"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/50"></div>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 text-left text-white z-10">
              <h1 className="text-4xl font-bold mb-4">ESG in Agriculture</h1>
              <p className="text-2xl font-bold mb-4">
                How sustainability, social responsibility, and governance are shaping the future of farming.
              </p>
            </div>
          </section>
    
          {/* ESG Initiatives Section */}
          <section className="relative flex justify-center mt-[-100px]">
            <div className="bg-white w-[90%] p-6 rounded-lg text-center shadow-lg transition-all duration-300 ease-in-out">
              <p className="text-gray-600 text-[22px] mt-7 mx-20 text-left">
                Our ESG initiatives are governed by three mandates. First, all ESG projects that we undertake are
                focused on delivering tangible on-ground impact, and not mere ESG reporting. Second, all ESG projects are clearly
                ROI-driven while measuring the on-ground impact. And third, we stay ahead of what regulations demand and continue to
                push ahead relentlessly in adopting what the latest technologies offer us in terms of footprint and impact reduction.
                We firmly believe that doing good has to be good for business.
              </p>
          
    
          {/* Key ESG Commitments */}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-7xl mx-auto mt-8 text-left">
            {[
              { icon: "🌍", title: "Net Zero Carbon Emissions", text: "By deploying impactful decarbonizing strategies, WayCool ensures a minimum footprint on our environment through large-scale carbon avoidance and carbon restoration projects across the value chain of the company." },
              { icon: "💧", title: "Net Water Positive", text: "We aim to become water positive across our operations by undertaking initiatives that allow the company to give back more water than originally consumed." },
              { icon: "♻️", title: "Net Zero Liquid Waste Discharge", text: "We envisage ensuring 100% of the water treated and reused within our facility meets our domestic needs or goes into groundwater recharge. The objective is to cease dumping of used water into the ground or water channels that may add to existing pollutants." },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6  text-left">
                <div className="text-6xl mb-4 ">{item.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-600">{item.title}</h3>
                <p className="mt-2 text-gray-600 text-[18px]">{item.text}</p>
              </div>
            ))}
          </div>
          </div>
          </section>
          {/* ESG Categories Section */}
          
          <div className="max-w-8xl mx-auto px-10 md:px-12 py-16">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-14">
    {/* Left Content */}
    <div className="flex flex-col justify-center">
      {/* Moved Title Inside the Box */}
      <h2 className="text-4xl font-semibold text-gray-700 mb-6 text-center md:text-left">
        Climate Resilient Supply Chain
      </h2>
      <p className="text-gray-600 text-lg mb-4">
        Focused on food development and distribution, we leverage innovative technologies 
        to scale and operate a complex supply chain from soil-to-sale. The technology 
        brings complete, real-time visibility and control across the supply chain, 
        be it in demand planning, managing inventory, sales force automation, and distribution.
      </p>

      <p className="text-gray-600 text-lg mb-4">
        With the use of advanced tools like AI and ML, we have not only created avenues 
        of economic value to the farmers, retailers, and consumers, but built an efficient 
        supply chain demonstrating resilience to climate change impact, and helped achieve 
        regional food security.
      </p>

      {/* Key Metrics */}
      <div className="mt-6 space-y-4">
        <div className=" p-4 ">
          <h3 className="text-3xl font-semibold text-green-700">20,500 +</h3>
          <p className="text-gray-600 ">Tons Food Loss Avoided</p>
        </div>

        <div className=" p-4 ">
          <h3 className="text-3xl font-semibold text-green-700">7,00,00,00,000 INR</h3>
          <p className="text-gray-600">Economic Value Saved By Keeping Food In The Value Chain</p>
        </div>

        <div className=" p-4 ">
          <h3 className="text-3xl font-semibold text-green-700">11,000 tCO2e</h3>
          <p className="text-gray-600">Climate Impact - Food Waste Emissions Avoided</p>
        </div>
      </div>
    </div>

    {/* Right Image */}
    <div className="flex items-center justify-center hover:scale-105">
      <img
        src="/blog/esg1.webp"
        alt="Climate Resilient Supply Chain"
        className="w-[600px] h-[600px] rounded-lg shadow-lg"
      />
    </div>
  </div>
</div>
    


              <div className="max-w-8xl mx-auto px-10 md:px-12 py-16">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-16">
                  
                  {/* Left Image Inside Box */}
                  <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center hover:scale-105">
                      <img
                        src="/blog/esg2.jpg" // Replace with actual image path
                        alt="Climate Resilient Supply Chain"
                      className="w-[500px] h-[500px] rounded-lg shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="flex flex-col justify-center">
                    <div className=" p-4 text-center">
                      <h2 className="text-4xl font-semibold text-green-700">
                      Harnessing Green Power
                      </h2>
                    </div>

                    <p className="text-gray-600 text-lg mt-6 text-left">
                    By effectively utilising the available roof area of distribution centres, WayCool has
                    installed rooftop solar power plants to harness solar power for its daytime power
                      consumption thereby reducing not only GHG emissions, but also reducing the operating costs
                      pertaining to energy consumption by 43% in the facilities
                    </p>

                    

                    <div className="mt-6 space-y-4">
                      <div className="p-4">
                        <h3 className="text-3xl font-semibold text-green-700">13%</h3>
                        <p className="text-gray-600">Green Power Share in Operations</p>
                      </div>

                      <div className="p-4">
                        <h3 className="text-3xl font-semibold text-green-700">7,00,000 INR</h3>
                        <p className="text-gray-600">Monetary Savings</p>
                      </div>

                      <div className="p-4">
                        <h3 className="text-3xl font-semibold text-green-700">140+ tCO2e</h3>
                        <p className="text-gray-600">Carbon Emissions Avoided</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>



    
          {/* ESG Initiatives Section */}
          <div className="bg-green-100 py-16 px-6">
            <h2 className="text-4xl font-semibold text-center text-green-900 mb-12">Key ESG Initiatives in Agriculture</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { icon: "🌱", title: "Regenerative Farming", text: "Using no-till farming, cover crops, and agroforestry to restore soil health and enhance biodiversity." },
                { icon: "💧", title: "Water Conservation", text: "Drip irrigation, rainwater harvesting, and smart irrigation techniques to minimize water waste." },
                { icon: "☀️", title: "Renewable Energy in Farming", text: "Solar-powered irrigation, wind energy, and biofuel adoption to reduce carbon emissions." },
                { icon: "🌍", title: "Ethical Supply Chain", text: "Ensuring fair wages, ethical sourcing, and traceable supply chains in agriculture." },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-green-700">{item.icon} {item.title}</h3>
                  <p className="text-gray-700 mt-3">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
    
          {/* CTA Section */}
          <div className="text-center py-12 px-6 bg-green-700 text-white">
            <h2 className="text-4xl font-semibold">Join the ESG Movement</h2>
            <p className="text-lg mt-4 max-w-2xl mx-auto">
              Help create a sustainable and responsible agricultural industry for future generations.
            </p>
            <button className="mt-6 px-6 py-3 bg-white text-green-700 font-bold rounded-lg shadow-lg hover:bg-gray-200 transition-all">
              Learn More
            </button>
          </div>
        </div>
      );
    };
    
    export default ESG;
    
 