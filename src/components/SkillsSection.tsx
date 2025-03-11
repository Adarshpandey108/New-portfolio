
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillSphere from './SkillSphere';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-hero-pattern opacity-20 z-0"></div>
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1.5 bg-space-purple-medium mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6">Technical Expertise</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              My diverse skill set allows me to work across the entire technology stack, 
              from developing sophisticated machine learning models to building responsive 
              and interactive web applications. I'm constantly expanding my knowledge and 
              staying up-to-date with the latest technologies.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-space-darker/60 rounded-xl p-6 border border-space-purple-dark/20">
                <h4 className="text-xl font-bold mb-4 text-space-purple-light">AI & Machine Learning</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Deep Learning & Neural Networks</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                  <li>• Data Analysis & Visualization</li>
                  <li>• Model Deployment & MLOps</li>
                </ul>
              </div>
              
              <div className="bg-space-darker/60 rounded-xl p-6 border border-space-purple-dark/20">
                <h4 className="text-xl font-bold mb-4 text-space-purple-light">Full Stack Development</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Frontend (React, TypeScript)</li>
                  <li>• Backend (Node.js, Express)</li>
                  <li>• Databases (MongoDB, SQL)</li>
                  <li>• API Development (REST, GraphQL)</li>
                  <li>• DevOps & Cloud Deployment</li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glow">
              <SkillSphere />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
