import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Globe, Check } from 'lucide-react';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };
  
  const features = [
    { icon: Shield, title: 'Veteran Owned', description: 'Led by military veterans with security clearance experience' },
    { icon: Cpu, title: 'AI Expertise', description: 'Advanced autonomous systems for defense applications' },
    { icon: Globe, title: 'Geospatial Intelligence', description: 'Real-time mapping and analysis capabilities' },
  ];
  
  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-slate-900 dark:text-white">
            About Stone Timber Technologies
          </h2>
          <div className="w-20 h-0.5 bg-accent-blue mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            We build mission-critical AI systems and geospatial intelligence platforms for defense and security applications.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Stone Timber Technologies is a disabled veteran-owned defense contractor specializing in cutting-edge AI and geospatial intelligence solutions. Our team brings decades of military and intelligence community experience to every project.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
                We architect systems that process complex data in real-time, enabling rapid decision-making in high-stakes environments. Our solutions combine advanced machine learning with robust security protocols to deliver reliable, mission-ready capabilities.
              </p>
            </div>
            
            <div className="mt-8 space-y-3">
              {['TS/SCI cleared personnel available', 'ITAR compliant', 'ISO 27001 certified'].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Check className="w-5 h-5 text-accent-green flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-400">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="grid gap-6"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card p-6 card-hover">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                        <Icon className="w-6 h-6 text-accent-blue" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-lg mb-2 text-slate-900 dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
        
        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          {...fadeInUp}
          transition={{ delay: 0.6 }}
        >
          {[
            { value: '15+', label: 'Years Experience' },
            { value: '250+', label: 'Projects Delivered' },
            { value: '99.9%', label: 'Uptime' },
            { value: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-semibold text-slate-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 