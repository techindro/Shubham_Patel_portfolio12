import React from 'react';

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-4xl">
        <img
          src="/Shubham2.jpeg"
          alt="Shubham Patel"
          className="w-48 h-48 lg:w-56 lg:h-56 rounded-full mx-auto border-4 border-indigo-500/30 shadow-2xl hover:scale-105 transition duration-500 animate-pulse"
        />
        <h1 className="text-4xl lg:text-6xl font-bold mt-8 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
          Shubham Patel
        </h1>
        <p className="text-xl lg:text-2xl text-gray-300 mt-4">
          AI & Space Enthusiast | Tech Educator | Entrepreneur
        </p>
        <div className="mt-8 p-6 bg-[#0f172a]/50 backdrop-blur-md rounded-2xl border border-white/10 text-lg text-gray-200">
          📍 Social Creator & Educator @Tech Indro | AI & Space Enthusiast | Ex-trainee @ISRO🚀 Robotics & EV Systems🔋| Public Speaker🎙️| Digital Marketing 🛒| Entrepreneurship 💼 | Aspire Gate 🇮🇳 सत्यमेव जयते 🫡
        </div>

        {/* Stephen Hawking Quote */}
        <div className="mt-12 p-8 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-2xl border-l-4 border-cyan-400 shadow-2xl animate-pulse">
          <p className="text-2xl lg:text-3xl font-semibold italic text-white">
            "Look up at the stars and not down at your feet. Try to make sense of what you see."
          </p>
          <p className="text-cyan-300 text-xl mt-4">– Stephen Hawking</p>
        </div>

        <div className="flex justify-center gap-4 mt-10">
          <a href="#" className="social-link w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xl hover:-translate-y-1 transition shadow-lg"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="social-link w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xl hover:-translate-y-1 transition shadow-lg"><i className="fab fa-github"></i></a>
          <a href="#" className="social-link w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xl hover:-translate-y-1 transition shadow-lg"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social-link w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xl hover:-translate-y-1 transition shadow-lg"><i className="fab fa-instagram"></i></a>
          <a href="#" className="social-link w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xl hover:-translate-y-1 transition shadow-lg"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Home;
