import React from 'react';

const Achievements = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-indigo-600 after:to-cyan-500 after:rounded-full">
          Achievements & Publications
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-indigo-900/20 to-cyan-900/20 backdrop-blur-md p-6 rounded-xl border border-indigo-500/20 text-center hover:-translate-y-2 transition">
            <i className="fas fa-trophy text-4xl text-cyan-400 mb-4"></i>
            <h3 className="text-xl font-bold mb-2 text-white">Awards</h3>
            <ul className="text-left text-gray-200 space-y-2 text-sm">
              <li>Recognized for Excellence in Digital Image Processing, IIRS-ISRO (2025)</li>
              <li>Entrepreneurship Innovation Award, Startup School (2024)</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-indigo-900/20 to-cyan-900/20 backdrop-blur-md p-6 rounded-xl border border-indigo-500/20 text-center hover:-translate-y-2 transition">
            <i className="fas fa-book text-4xl text-cyan-400 mb-4"></i>
            <h3 className="text-xl font-bold mb-2 text-white">Publications</h3>
            <ul className="text-left text-gray-200 space-y-2 text-sm">
              <li>AI Applications in Space Technology, Journal of Remote Sensing (2025)</li>
              <li>Robotics and EV Systems Integration, Tech Indro Whitepaper (2024)</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-indigo-900/20 to-cyan-900/20 backdrop-blur-md p-6 rounded-xl border border-indigo-500/20 text-center hover:-translate-y-2 transition">
            <i className="fas fa-graduation-cap text-4xl text-cyan-400 mb-4"></i>
            <h3 className="text-xl font-bold mb-2 text-white">Certifications</h3>
            <ul className="text-left text-gray-200 space-y-2 text-sm">
              <li>Advanced AI & Machine Learning, Stanford University</li>
              <li>Space Technology & Applications, ISRO</li>
              <li>Digital Marketing Professional, Google</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-indigo-900/20 to-cyan-900/20 backdrop-blur-md p-6 rounded-xl border border-indigo-500/20 text-center hover:-translate-y-2 transition">
            <i className="fas fa-users text-4xl text-cyan-400 mb-4"></i>
            <h3 className="text-xl font-bold mb-2 text-white">Community</h3>
            <ul className="text-left text-gray-200 space-y-2 text-sm">
              <li>10,000+ followers across social platforms</li>
              <li>500+ students mentored in tech fields</li>
              <li>Regular speaker at tech conferences</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
