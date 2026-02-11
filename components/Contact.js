import React, { useState } from 'react';
import { sendMessage } from '../api';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      await sendMessage(formData);
      setSuccess('Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-indigo-600 after:to-cyan-500 after:rounded-full">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
            <p className="text-gray-300 mb-6 text-lg">
              I'm always interested in new opportunities, collaborations, and discussions about technology and innovation.
            </p>
            <div className="space-y-4 text-gray-200">
              <div className="flex items-center">
                <i className="fas fa-envelope text-indigo-400 text-xl w-8"></i>
                <span>Shubhamkumarpatel45@gmail.com</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-indigo-400 text-xl w-8"></i>
                <span>+91 7007896695</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-indigo-400 text-xl w-8"></i>
                <span>India</span>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xl hover:-translate-y-1 transition shadow-lg"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xl hover:-translate-y-1 transition shadow-lg"><i className="fab fa-github"></i></a>
              <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xl hover:-translate-y-1 transition shadow-lg"><i className="fab fa-twitter"></i></a>
              <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xl hover:-translate-y-1 transition shadow-lg"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-[#0f172a]/70 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl">
              {success && <p className="mb-4 text-green-400 text-center">{success}</p>}
              {error && <p className="mb-4 text-red-400 text-center">{error}</p>}
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#1e293b]/70 border border-indigo-500/30 rounded-lg text-white focus:outline-none focus:border-indigo-400"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#1e293b]/70 border border-indigo-500/30 rounded-lg text-white focus:outline-none focus:border-indigo-400"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#1e293b]/70 border border-indigo-500/30 rounded-lg text-white focus:outline-none focus:border-indigo-400"
                  required
                />
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#1e293b]/70 border border-indigo-500/30 rounded-lg text-white focus:outline-none focus:border-indigo-400 resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transition disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
