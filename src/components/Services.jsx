import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Radar, Network, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Cpu,
      title: 'AI Agent Development',
      description: 'Autonomous systems capable of real-time decision making and adaptive threat response.',
      features: ['Machine Learning', 'Computer Vision', 'Natural Language Processing'],
    },
    {
      icon: Radar,
      title: 'Geospatial Intelligence',
      description: 'Real-time mapping and analysis platforms with satellite integration.',
      features: ['Terrain Analysis', 'Predictive Modeling', 'Satellite Integration'],
    },
    {
      icon: Network,
      title: 'Systems Integration',
      description: 'Secure infrastructure and seamless integration with existing defense systems.',
      features: ['API Development', 'Cloud Architecture', 'Edge Computing'],
    },
    {
      icon: Shield,
      title: 'Security Engineering',
      description: 'Zero-trust architectures with quantum-resistant encryption protocols.',
      features: ['Penetration Testing', 'Compliance', 'Incident Response'],
    },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <section id="services" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-slate-900 dark:text-white">
            Our Capabilities
          </h2>
          <div className="w-20 h-0.5 bg-accent-blue mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Comprehensive solutions engineered for mission-critical operations
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-8 card-hover"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
                      <Icon className="w-8 h-8 text-accent-blue" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-semibold mb-3 text-slate-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      {service.description}
                    </p>
                    
                    {/* Features list */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                          <span className="w-1.5 h-1.5 bg-accent-green rounded-full mr-2"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#contact" className="btn-primary inline-flex items-center">
            Discuss Your Requirements
          </a>
        </motion.div>
      </div>
    </section>
  );
} 