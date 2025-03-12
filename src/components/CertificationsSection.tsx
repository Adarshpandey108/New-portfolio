
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';

const certificationsData = [
  {
    title: 'Prompt Engineering for Everyone',
    organization: 'IBM',
    date: 'Jan 2025',
    credential:  'Credential ID: 1111dab5f5fa4d86a2a0ddf81e4cec13',
    credentialLink: 'https://courses.cognitiveclass.ai/certificates/1111dab5f5fa4d86a2a0ddf81e4cec13',
    skills: ['AI Basics', 'Prompting Concepts', 'AI Ethics'],
  },
  {
    title: 'Introduction to CIP',
    organization: 'OPSWAT Academy',
    date: 'Nov 2024',
    credential: 'Credential ID: IpiP7YISiw',
    credentialLink: 'https://learn.opswatacademy.com/certificate/IpiP7YISiw',
    skills: ['Detection', 'Prevention', 'Response', 'Adaptations'],
  },
  {
    title: 'GSSOC Open Source Contributor',
    organization: 'GSSOC',
    date: 'Nov 2024',
    credential: 'Credential ID: DL98722XC',
    credentialLink: 'https://www.linkedin.com/in/adarsh-pandey-432a94315/details/certifications/1737318029564/single-media-viewer/?profileId=ACoAAFASfmYBRSsgsi906YnVNFfhEEXP6nXncMU',
    skills: ['Collaboration', 'Testing', 'Bug Fixing', 'Versioning'],
  },
  {
    title: 'Ai Builders Lab',
    organization: 'Google Developers Group',
    date: 'Oct 2024',
    credential: 'Credential ID: FS32455XC',
    credentialLink: 'https://www.linkedin.com/in/adarsh-pandey-432a94315/details/certifications/1730265341920/single-media-viewer/?profileId=ACoAAFASfmYBRSsgsi906YnVNFfhEEXP6nXncMU',
    skills: ['Ai Ethics', 'Prompting', 'Building', 'APIs'],
  },
  {
    title: 'Internet of Things',
    organization: 'Kaizen Future Tech',
    date: 'Jan 2023',
    credential: 'Credential ID: DS78225XC',
    credentialLink: 'https://www.linkedin.com/in/adarsh-pandey-432a94315/details/certifications/1724003887078/single-media-viewer/?profileId=ACoAAFASfmYBRSsgsi906YnVNFfhEEXP6nXncMU',
    skills: ['NodeMCU', 'Rasspberry pi', 'Arduino', 'C++'],
  },
  {
    title: 'Gen Ai Workshop',
    organization: 'AWS',
    date: 'Sep 2024',
    credential: 'Credential ID: PY98765XC',
    credentialLink: 'https://www.linkedin.com/in/adarsh-pandey-432a94315/details/certifications/1727098408050/single-media-viewer/?profileId=ACoAAFASfmYBRSsgsi906YnVNFfhEEXP6nXncMU',
    skills: ['Prompting', 'Fine-tuning', 'Transformers', 'Diffusion'],
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
