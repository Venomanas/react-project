import React from "react";

function About  ()  {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-indigo-600 px-6 py-10">
            <h1 className="text-3xl font-bold text-white text-center">
              About Us
            </h1>
          </div>
          <div className="px-6 py-8">
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                Welcome to our company! We are a dedicated team of professionals
                committed to delivering high-quality solutions to our clients.
              </p>
              <p className="text-gray-600 mb-4">
                Founded in 2020, our mission is to create innovative products
                that solve real-world problems and make a positive impact on
                people's lives.
              </p>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 mt-8">
                Our Vision
              </h2>
              <p className="text-gray-600 mb-4">
                We strive to be industry leaders, known for our creativity,
                reliability, and exceptional customer service. Our team is
                passionate about pushing boundaries and exploring new
                technologies.
              </p>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 mt-8">
                Our Team
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-medium text-gray-900 text-center">
                    Jane Doe
                  </h3>
                  <p className="text-gray-500 text-center">CEO & Founder</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-medium text-gray-900 text-center">
                    John Smith
                  </h3>
                  <p className="text-gray-500 text-center">CTO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
