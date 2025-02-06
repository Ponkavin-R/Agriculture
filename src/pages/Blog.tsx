import React, { useState } from "react";

const Blog = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const articles = [
    {
      title: "FEATURES OF SUSTAINABLE AGRICULTURE",
      image: "/blog/blog1.jpg",
      excerpt:
        "Discover how sustainable farming practices are shaping the future of agriculture, ensuring food security and environmental balance.",
      fullContent:
        "Sustainable agriculture focuses on practices like crop rotation, organic fertilizers, and reduced chemical use. It enhances biodiversity, conserves water, and maintains soil fertility, ensuring long-term agricultural productivity.",
    },
    {
      title: "ORGANIC FARMING: BENEFITS & CHALLENGES",
      image: "/blog/blog2.jpg",
      excerpt:
        "Learn about the advantages of organic farming, including its impact on health and the environment, as well as the challenges farmers face.",
      fullContent:
        "Organic farming avoids synthetic fertilizers and pesticides, promoting healthier soil and reducing pollution. However, it faces challenges like lower yields, high labor costs, and certification requirements.",
    },
    {
      title: "SMART FARMING WITH TECHNOLOGY",
      image: "/blog/blog3.jpg",
      excerpt:
        "Explore how AI, IoT, and automation are revolutionizing the agricultural sector, making farming more efficient and productive.",
      fullContent:
        "Technology-driven farming includes AI-powered monitoring, automated irrigation, and IoT sensors. These innovations optimize resource use, increase yields, and help farmers adapt to climate change challenges.",
    },
    {
      title: "PRECISION FARMING: THE FUTURE OF AGRICULTURE",
      image: "/blog/blog4.jpg",
      excerpt:
        "Discover how precision agriculture is transforming farming by using data-driven techniques to optimize resources and boost crop yields.",
      fullContent:
        "Precision farming utilizes GPS technology, satellite imagery, and data analytics to monitor crop health, soil conditions, and weather patterns. This approach minimizes waste, improves efficiency, and increases profitability for farmers.",
    },
    {
      title: "HYDROPONICS: GROWING WITHOUT SOIL",
      image: "/blog/blog5.png",
      excerpt:
        "Explore how hydroponics is revolutionizing agriculture by enabling plants to grow without soil using nutrient-rich water solutions.",
      fullContent:
        "Hydroponic farming systems provide plants with essential nutrients through water-based solutions, reducing water usage and eliminating the need for soil. This method is ideal for urban farming and sustainable food production.",
    },
    {
      title: "CLIMATE-RESILIENT CROPS: ADAPTING TO CHANGE",
      image: "/blog/blog6.jpg",
      excerpt:
        "Learn about climate-resilient crops that help farmers adapt to changing weather conditions and ensure food security.",
      fullContent:
        "Scientists and farmers are developing drought-resistant and flood-tolerant crop varieties to combat climate change. These crops improve resilience, ensure stable yields, and help sustain agricultural production in unpredictable weather conditions.",
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
  <h1 className="text-4xl font-bold mb-4">BLOGS</h1>
    </div>
</section>


<div className="text-center py-10 px-4 md:px-8 mb-28">
        <h1 className="text-4xl font-bold text-center mb-10">Agriculture Blog</h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          Stay updated with the latest insights, trends, and discussions in the world of agriculture. 
          From sustainability to technology, our articles cover it all.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {articles.map((article, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg rounded-md overflow-hidden w-96 transition-all duration-300 ${
                expandedIndex === index ? "h-auto" : "h-[540px]"
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
                  <p className="text-gray-600 mb-4 mt-1 text-left">{article.fullContent}</p>
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
