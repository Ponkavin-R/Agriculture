import React, { useState } from "react";

const Blog = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const articles = [
    {
      "title": "REVOLUTIONIZING AGRI-COMMERCE:",
      "image": "/blog/blog1.jpg",
      "excerpt": "Agriculture has long been the backbone of India’s economy, but farmers and businesses continue to face significant challenges, from price volatility to inefficient supply chains. The lack of direct market access and real-time demand forecasting often leaves farmers struggling with unpredictable earnings, while businesses grapple with inconsistent supply. Cropzap is changing this landscape by providing a seamless B2B platform that directly connects farmers, Farmer Producer Organizations (FPOs), and businesses, ensuring fair pricing, reduced wastage, and transparency.",
      "fullContent": [
        "Cropzap was founded with the mission to create a structured and reliable agri-commerce ecosystem. By eliminating middlemen, the platform enables farmers to secure better prices for their produce while ensuring that businesses get fresh and high-quality supplies at competitive rates. The company’s data-driven approach ensures demand and supply mapping, helping farmers plan their harvests more effectively.",
        
        "One of the key issues in agriculture is post-harvest wastage, which can be as high as 40% in some cases. Cropzap tackles this by leveraging real-time market updates and AI-driven insights to match supply with demand efficiently. Businesses, including retail stores, restaurants, hostel canteens, and other institutions, benefit from a transparent procurement system that ensures timely delivery and traceability of their produce.",
        
        "Cropzap’s initial success in the Erode district of Tamil Nadu has demonstrated the effectiveness of its model. With a customer retention rate of 98% for businesses and 100% for farmers, the platform is proving its ability to address critical inefficiencies in the agricultural supply chain. Over the next phase, Cropzap aims to expand its reach, onboard more farmers and FPOs, and build a robust network of businesses that value quality, efficiency, and sustainability."
      ]
    }
    ,
    
    {
      "title": "ORGANIC FARMING: BENEFITS & CHALLENGES",
      "image": "/blog/blog2.jpg",
      "excerpt": "The agricultural sector in India is undergoing a significant transformation, driven by technology, innovation, and a growing demand for efficiency. Traditional challenges such as price volatility, supply chain inefficiencies, and post-harvest losses have long plagued the sector. However, with the emergence of digital platforms like Cropzap, Indian agriculture is moving toward a more connected, transparent, and profitable future.",
      "fullContent": [
        "Technology is playing a crucial role in reshaping India’s agricultural landscape. From AI-driven demand forecasting to digital supply chain management, solutions like Cropzap are enabling farmers to make more informed decisions, optimize production, and ensure market access. Real-time data analytics is helping businesses plan their procurement efficiently, reducing costs and minimizing wastage.",
        
        "One of the most significant changes brought about by digitalization is the reduction of price volatility. Farmers who were previously at the mercy of fluctuating market rates can now leverage platforms like Cropzap to get real-time price updates and negotiate better deals with businesses. The transparency offered by such platforms also ensures that businesses receive high-quality produce without having to deal with unreliable supply chains.",
        
        "The integration of digital payment solutions further simplifies transactions, ensuring prompt payments for farmers and seamless purchases for businesses. In the coming years, innovations such as blockchain-based traceability and AI-powered predictive analytics will continue to enhance efficiency in agri-commerce, making farming a more lucrative and sustainable occupation. Cropzap is at the forefront of this revolution, enabling a future where farmers and businesses can thrive together through technology-driven solutions."
      ]
    },
    
    {
      "title": "SMART FARMING WITH TECHNOLOGY",
      "image": "/blog/blog3.jpg",
      "excerpt": "Sustainability in agriculture is no longer an option; it is a necessity. As the global population continues to rise, the demand for food production increases, putting immense pressure on natural resources. Traditional farming practices, coupled with an unstructured supply chain, lead to wastage and inefficiencies that hinder agricultural sustainability. Cropzap is on a mission to change this by creating a tech-driven, farmer-centric, and environmentally responsible agri-commerce ecosystem.",
      "fullContent": [
        "At the heart of Cropzap’s mission is the goal of reducing post-harvest wastage and ensuring that fresh produce reaches the market at the right time. Through KrishiKonnect, the platform provides farmers with harvest information and AI-driven demand forecasting, allowing them to plan their production more efficiently. This minimizes excess supply, which often leads to wastage, and ensures that farmers receive fair prices for their produce.",
        
        "Sustainability also extends to input procurement. Through BharatGro, Cropzap is simplifying the process of purchasing quality seeds and fertilizers at competitive rates, ensuring that farmers have access to the right resources at the right time. By connecting farmers directly with trusted suppliers, Cropzap eliminates fraudulent intermediaries and ensures that agricultural inputs contribute to better yields.",
        
        "Another critical aspect of sustainability is knowledge sharing. CropInsights, an essential part of Cropzap’s ecosystem, provides farmers with advisory services on precision farming, crop management, and climate-smart agricultural practices. By integrating expert guidance with real-time market intelligence, the platform empowers farmers to maximize their productivity while minimizing their environmental footprint.",
        
        "The future of sustainable agriculture lies in collaboration, transparency, and technology. By bringing together farmers, FPOs, and businesses on a single platform, Cropzap is paving the way for a resilient, profitable, and eco-friendly agricultural ecosystem that benefits all stakeholders."
      ]
    }
    
      ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="cover mx-auto py-12">
    <section className="relative py-44 h-auto">
<div className="absolute inset-0">
  <img src="/blog/backgroun2.jpg" alt="Agricultural Innovation" className="w-full h-full object-fill mt-4" />
</div>
<div className="relative max-w-7xl mx-auto px-4 text-left text-white z-10">
  <h1 className="text-5xl font-bold mb-4">BLOGS</h1>
    </div>
</section>


<div className="text-center py-10 px-4 md:px-8 mb-28">
        <h1 className="text-4xl font-bold text-center mb-10">Agriculture Blog</h1>
        <p className="text-center text-lg text-gray-600 mb-12">
  The agricultural sector is evolving rapidly, with modern technology playing a crucial role in increasing productivity and sustainability. Innovations like AI-driven demand forecasting, precision farming, and digital marketplaces are empowering farmers with better market access and optimized resource use. By embracing smart farming solutions, agriculture is becoming more efficient, profitable, and eco-friendly.

        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {articles.map((article, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg rounded-md overflow-hidden w-96 transition-all duration-300 ${
                expandedIndex === index ? "h-auto" : "h-[800px]"
              }`}
            >
              {/* Blog Image */}
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-60 object-cover hover:scale-110"
              />
              
              {/* Blog Content */}
              <div className="p-6">
                <h2 className="text-[30px]  font-thin text-black mb-3 tracking-widest text-left">
                  {article.title}
                </h2>
                <p className="text-gray-600 text-left">{article.excerpt}</p>

                {/* Expandable Content */}
                {expandedIndex === index && (
  <div className="text-gray-600 mb-4 mt-1 text-left">
    {article.fullContent.map((para, i) => (
      <p key={i} className="mb-4">{para}</p> // Adds space between paragraphs
    ))}
  </div>
)}

                {/* Read More / Read Less Button */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-blue-500 font-bold text-[14px] hover:underline"
                >
                  {expandedIndex === index ? "Read Less ↑" : "Read More →"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shake Animation for Image on Hover */}
      <style>
        {`
          @keyframes shake {
            0% { transform: translate(0, 0); }
            25% { transform: translate(-2px, 2px); }
            50% { transform: translate(2px, -2px); }
            75% { transform: translate(-2px, 2px); }
            100% { transform: translate(0, 0); }
          }

          .animate-shake:hover {
            animation: shake 0.3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Blog;
