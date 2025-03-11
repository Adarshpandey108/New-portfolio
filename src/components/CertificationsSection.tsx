
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';

const certificationsData = [
  {
    title: 'AI For Everyone',
    organization: 'DeepLearning.AI',
    date: 'Aug 2023',
    credential: 'Credential ID: FE324XCR22',
    credentialLink: 'https://www.coursera.org/',
    skills: ['AI Basics', 'ML Concepts', 'AI Ethics', 'AI Strategy'],
  },
  {
    title: 'Machine Learning Specialization',
    organization: 'Stanford University & DeepLearning.AI',
    date: 'June 2023',
    credential: 'Credential ID: ML72355XC',
    credentialLink: 'https://www.coursera.org/',
    skills: ['Supervised Learning', 'Neural Networks', 'Decision Trees', 'Recommender Systems'],
  },
  {
    title: 'Deep Learning Specialization',
    organization: 'DeepLearning.AI',
    date: 'Apr 2023',
    credential: 'Credential ID: DL98722XC',
    credentialLink: 'https://www.coursera.org/',
    skills: ['CNNs', 'RNNs', 'Transformers', 'Model Optimization'],
  },
  {
    title: 'Full Stack Web Development',
    organization: 'Meta',
    date: 'Feb 2023',
    credential: 'Credential ID: FS32455XC',
    credentialLink: 'https://www.coursera.org/',
    skills: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'Data Science in Python',
    organization: 'University of Michigan',
    date: 'Jan 2023',
    credential: 'Credential ID: DS78225XC',
    credentialLink: 'https://www.coursera.org/',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Data Analysis'],
  },
  {
    title: 'Python for Data Science, AI & Development',
    organization: 'IBM',
    date: 'Dec 2022',
    credential: 'Credential ID: PY98765XC',
    credentialLink: 'https://www.coursera.org/',
    skills: ['Python', 'Data Science', 'APIs', 'Libraries'],
  },
];

const CertificationsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="certifications" className="py-20 relative">
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
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1.5 bg-space-purple-medium mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-space-darker/60 rounded-xl p-6 border border-space-purple-dark/20 hover:border-space-purple-light/30 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-space-purple-dark/30 p-3 rounded-lg">
                  <Award className="text-space-purple-light h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                  <p className="text-space-purple-light">{cert.organization}</p>
                  <p className="text-gray-400 text-sm mt-1">{cert.date}</p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-space-purple-dark/20">
                <a 
                  href={cert.credentialLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-space-purple-light flex items-center gap-1 mb-3"
                >
                  {cert.credential}
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {cert.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs bg-space-purple-dark/20 text-gray-300 px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
