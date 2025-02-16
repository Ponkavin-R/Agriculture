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
              <h1 className="text-5xl font-bold mb-4">ESG in Agriculture</h1><br></br>
              <p className="text-3xl font-bold mb-4">
                How sustainability, social responsibility, and governance<br></br> are shaping the future of farming.
              </p>
            </div>
          </section>
    
          {/* ESG Initiatives Section */}
          <section className="relative flex justify-center mt-[-100px]">
            <div className="bg-white w-[90%] p-6 rounded-lg text-center shadow-lg transition-all duration-300 ease-in-out">
              <p className="text-gray-600 text-[22px] mt-7 mx-20 text-left">
              Three core principles guide our future ESG goals. First, we will focus exclusively on ESG projects that
               deliver tangible, measurable impact on the ground, prioritizing real-world results over simply fulfilling
                reporting requirements. Second, all ESG initiatives will be ROI-driven, with clear metrics to demonstrate 
                both on-the-ground impact and positive financial returns, reinforcing our belief that doing good must also
                 be good for business. Finally, we will maintain a proactive approach to evolving regulations, consistently 
                 adopting cutting-edge technologies to minimize our environmental footprint and maximize our positive impact, 
                 positioning us as leaders in sustainable business practices.

              </p>
          
    
          {/* Key ESG Commitments */}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-7xl mx-auto mt-8 text-left">
            {[
              { icon: "🌍", title: "Net Zero Carbon Emissions", text: "Cropzap recognizes the importance of environmental stewardship and is actively pursuing impactful decarbonizing strategies. These strategies encompass large-scale carbon avoidance and carbon restoration projects throughout our value chain, ensuring a minimal footprint on the environment." },
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
      We will continue to leverage innovative technologies to scale and optimize our complex soil-to-sale supply chain, focusing on food development and distribution. Our ongoing commitment to technology will ensure complete, real-time visibility and control across all aspects of the supply chain, from demand planning and inventory management to sales force automation and distribution.

      </p>

      <p className="text-gray-600 text-lg mb-4">
      By harnessing the power of advanced tools like AI and ML, we will expand avenues of economic value for farmers, retailers, and consumers. Furthermore, we will strengthen our efficient and resilient supply chain, mitigating the impacts of climate change and contributing significantly to regional food security.
      </p>
    </div>

    {/* Right Image */}
    <div className="flex items-center justify-center hover:scale-105">
      <img
        src="/blog/climate.jpg"
        alt="Climate Resilient Supply Chain"
        className="w-[500px] h-[500px] rounded-lg shadow-lg"
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
                      <h2 className="text-4xl font-semibold text-gray-700">
                      Harnessing Green Power
                      </h2>
                    </div>

                    <p className="text-gray-600 text-lg mt-6 text-left">
                    Cropzap will maximize the utilization of available roof space on its 
                    distribution centers by installing rooftop solar power plants. This initiative
                     will harness solar energy to offset daytime power consumption, significantly reducing 
                     both greenhouse gas emissions and operating costs associated with energy usage. 
                     We aim to achieve substantial energy cost savings through this program.

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
              <div className="max-w-8xl mx-auto px-10 md:px-12 py-16">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-14">
    {/* Left Content */}
    <div className="flex flex-col justify-center">
      {/* Moved Title Inside the Box */}
      <h2 className="text-4xl font-semibold text-gray-700 mb-6 text-center md:text-left">
      Green Logistics
      </h2>
      <p className="text-gray-600 text-lg mb-4">
      As a commitment towards reducing the environmental footprint of our food distribution network, 
      WayCool has deployed electric vehicles in our last mile delivery 
      fleet to decarbonise our logistics-based emissions
      </p>

      {/* Key Metrics */}
      <div className="mt-6 space-y-4">
        <div className=" p-4 ">
          <h3 className="text-3xl font-semibold text-green-700">120,000 kms</h3>
          <p className="text-gray-600 ">Green Kilometers</p>
        </div>

        <div className=" p-4 ">
          <h3 className="text-3xl font-semibold text-green-700">22 %</h3>
          <p className="text-gray-600">Electric Vehicles (EV) Share in Last Mile Fleet</p>
        </div>

        <div className=" p-4 ">
          <h3 className="text-3xl font-semibold text-green-700">290 tCO2e GHG</h3>
          <p className="text-gray-600">Emissions Avoided</p>
        </div>
      </div>
    </div>

    {/* Right Image */}
    <div className="flex items-center justify-center hover:scale-105">
      <img
        src="/blog/green-logistic.jpg"
        alt="Climate Resilient Supply Chain"
        className="w-[500px] h-[500px] rounded-lg shadow-lg"
      />
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
          
        </div>
      );
    };
    
    export default ESG;
    
 