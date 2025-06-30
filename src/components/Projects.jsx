import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Autonomous Terrain Analysis',
      description: 'AI-powered geospatial reconnaissance for real-time environment mapping and threat assessment.',
      category: 'Geospatial AI',
      status: 'Active',
      metrics: {
        'Coverage': '2.4M km²',
        'Accuracy': '99.7%',
      },
      tags: ['Machine Learning', 'Computer Vision', 'GEOINT'],
    },
    {
      id: 2,
      title: 'Multi-Agent Coordination Platform',
      description: 'Distributed AI framework for autonomous agent communication and tactical coordination.',
      category: 'AI Systems',
      status: 'Active',
      metrics: {
        'Agents': '128',
        'Latency': '<20ms',
      },
      tags: ['Multi-Agent', 'Distributed Systems', 'Real-time'],
    },
    {
      id: 3,
      title: 'Predictive Threat Detection',
      description: 'Machine learning system for anticipatory threat identification and response planning.',
      category: 'Security',
      status: 'In Progress',
      metrics: {
        'Predictions': '1.2K/sec',
        'Prevented': '89 incidents',
      },
      tags: ['Predictive Analytics', 'ML', 'Security'],
    },
    {
      id: 4,
      title: 'Secure Communications Protocol',
      description: 'Quantum-resistant encryption system for mission-critical field communications.',
      category: 'Infrastructure',
      status: 'Active',
      metrics: {
        'Encryption': 'QKD-256',
        'Channels': '256',
      },
      tags: ['Quantum', 'Cryptography', 'Communications'],
    },
  ];
  
  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return 'text-accent-green';
      case 'In Progress': return 'text-accent-gray';
      default: return 'text-slate-500';
    }
  };
  
  return (
    <section id="projects" className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-slate-900 dark:text-white">
            Recent Projects
          </h2>
          <div className="w-20 h-0.5 bg-accent-blue mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Selected projects demonstrating our capabilities in defense and security
          </p>
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-8 card-hover group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-display font-semibold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span className={`text-sm ${getStatusColor(project.status)}`}>
                      • {project.status}
                    </span>
                  </div>
                  <div className="text-sm text-accent-gray">
                    {project.category}
                  </div>
                </div>
                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                  <ArrowUpRight className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </button>
              </div>
              
              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {project.description}
              </p>
              
              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
                    <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                      {key}
                    </div>
                    <div className="font-display font-semibold text-slate-900 dark:text-white">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* More projects indicator */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Additional projects available under NDA
          </p>
        </motion.div>
      </div>
    </section>
  );
} 