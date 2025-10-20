import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact" className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-white text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg">
          Start your journey with CZR Barbour Evolution
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/68f3d559318411e32803185d_1760810419420_381072a3.webp"
              alt="Contact"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-400 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-zinc-900 text-white rounded-lg border border-zinc-800 focus:border-yellow-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-zinc-900 text-white rounded-lg border border-zinc-800 focus:border-yellow-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-zinc-900 text-white rounded-lg border border-zinc-800 focus:border-yellow-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-zinc-900 text-white rounded-lg border border-zinc-800 focus:border-yellow-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all"
            >
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
