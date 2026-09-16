import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapPin, Phone, Mail, Send, Building2, Linkedin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_2o7hod2', 
      'template_lbjgg7k', 
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      'eP9EgFWTjN5fgVNfU' 
    )
    .then(() => {
      alert('✅ Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error(error);
      alert('❌ Failed to send message. Try again.');
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const locations = [
    {
      type: 'Headquarters',
      address: 'KR Puram, Bangalore – 560036',
      icon: Building2
    },
    {
      type: 'Branch Office',
      address: 'Chintamani, Chikkaballapur, Karnataka – 563125',
      icon: MapPin
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@bizbooster.in',
      link: 'mailto:info@bizbooster.in'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9738030593',
      link: 'tel:+91 9738030593'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'BizBooster',
      link: 'https://www.linkedin.com/company/bizbosster/about/'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      
      {/* HERO SECTION */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-200">
            Let's discuss how BizBooster can help transform your business
          </p>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* FORM */}
            <div>
              <h2 className="text-4xl font-bold text-indigo-950 mb-6">Send Us a Message</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                />

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-indigo-900 to-teal-700 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-8">

              {/* CONTACT INFO */}
              <div>
                <h3 className="text-3xl font-bold text-indigo-950 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-teal-50 transition-all duration-200 group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-teal-600 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>

                        <div>
                          <p className="text-sm font-medium text-gray-500">{info.label}</p>
                          <p className="text-lg font-semibold text-gray-800 group-hover:text-teal-600">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* LOCATIONS */}
              <div>
                <h3 className="text-3xl font-bold text-indigo-950 mb-6">Our Locations</h3>
                <div className="space-y-4">
                  {locations.map((location, index) => {
                    const Icon = location.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-teal-50 border border-indigo-100"
                      >
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-teal-600 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-teal-600 mb-1">
                            {location.type}
                          </p>
                          <p className="text-gray-700">{location.address}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="py-24 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-indigo-950 mb-4">Global Presence</h2>
        <p className="text-gray-600 mb-10">
          Serving clients worldwide with excellence
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {['USA', 'Australia', 'India', 'Europe', 'Middle East'].map((region, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <p className="text-lg font-bold text-indigo-950">{region}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}