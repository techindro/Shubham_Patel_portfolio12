import React, { useState } from 'react';
import { signup, login } from '../api';

const Header = ({ activePage, setActivePage }) => {
  const [showModal, setShowModal] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');

  const pages = ['Home', 'About', 'Skills', 'Experience', 'Achievements', 'Contact'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (isSignup) {
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          return;
        }
        const { data } = await signup({ name: formData.name, email: formData.email, password: formData.password });
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        alert('Signup successful!');
      } else {
        const { data } = await login({ email: formData.email, password: formData.password });
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        alert('Login successful!');
      }
      setShowModal(false);
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <>
      <header className="header fixed top-0 w-full bg-[#0f172a]/95 backdrop-blur-md z-50 transition-all duration-300 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button onClick={() => setActivePage('Home')} className="text-xl font-bold text-white flex items-center">
            <i className="fas fa-rocket mr-2 text-indigo-400"></i>
            Shubham Patel
          </button>
          <div className="flex gap-2 items-center flex-wrap">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => setActivePage(page)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  activePage === page
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => { setShowModal(true); setIsSignup(false); }}
              className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-md hover:shadow-xl transition"
            >
              Login
            </button>
            <button
              onClick={() => { setShowModal(true); setIsSignup(true); }}
              className="px-5 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full shadow-md hover:shadow-xl transition"
            >
              Signup
            </button>
          </div>
        </div>
      </header>

      {/* Auth Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-gradient-to-br from-[#1e293b] to-[#334155] p-8 rounded-2xl w-[90%] max-w-md shadow-2xl animate-slideUp border border-white/10">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">
              {isSignup ? 'Create Account' : 'Welcome Back'}
            </h2>
            {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>}
            <form onSubmit={handleSubmit}>
              {isSignup && (
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 mb-4 bg-[#0f172a]/70 border border-indigo-500/30 rounded-lg text-white focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/50"
                  required
                />
              )}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mb-4 bg-[#0f172a]/70 border border-indigo-500/30 rounded-lg text-white focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/50"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 mb-4 bg-[#0f172a]/70 border border-indigo-500/30 rounded-lg text-white focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/50"
                required
              />
              {isSignup && (
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-3 mb-6 bg-[#0f172a]/70 border border-indigo-500/30 rounded-lg text-white focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/50"
                  required
                />
              )}
              <button
                type="submit"
                className={`w-full py-3 rounded-lg font-semibold text-white transition transform hover:scale-[1.02] ${
                  isSignup ? 'bg-gradient-to-r from-green-600 to-emerald-600' : 'bg-gradient-to-r from-indigo-600 to-purple-600'
                }`}
              >
                {isSignup ? 'Signup' : 'Login'}
              </button>
            </form>
            <button
              onClick={() => setShowModal(false)}
              className="w-full mt-4 py-3 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-lg font-semibold hover:shadow-lg transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
