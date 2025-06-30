import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form or show success message
    }, 2000);
  };
  
  return (
    <section id="contact" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-slate-900 dark:text-white">
            Contact Us
          </h2>
          <div className="w-20 h-0.5 bg-accent-blue mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Get in touch to discuss your project requirements
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-display font-semibold text-slate-900 dark:text-white mb-6">
              Get in Touch
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <Mail className="w-5 h-5 text-accent-blue" />
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Email</p>
                  <a href="mailto:tyler@stonetimber.group" className="text-slate-900 dark:text-white hover:text-accent-blue transition-colors">
                    tyler@stonetimber.group
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <Phone className="w-5 h-5 text-accent-blue" />
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Phone</p>
                  <p className="text-slate-900 dark:text-white">Available upon request</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Location</p>
                  <p className="text-slate-900 dark:text-white">United States</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-slate-100 dark:bg-slate-900 rounded-lg">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <span className="font-semibold">Security Notice:</span> All communications are encrypted. We respond within 24 hours to qualified inquiries.
              </p>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="input-field"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="input-field"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="input-field"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="input-field resize-none"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary inline-flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 