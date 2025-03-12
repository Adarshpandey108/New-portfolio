import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
 
  {
    degree: 'Minor in AI and ML',
    institution: 'Indian Institute of Technology (IIT) Ropar',
    location: 'Rupnagar, Punjab',
    duration: '2024 - 2025',
    description: 'Minor degree in Artificial Intelligence and Machine Learning with CGPA 7.0',
  },
  {
    degree: "Bachelor's of Computer Application",
    institution: 'University of Mumbai',
    location: 'Kalyan, Maharashtra',
    duration: '2023 - 2026',
    description: 'Pursuing BCA with outstanding academic performance, maintaining a CGPA of 9.27',
  },
  {
    degree: 'HSC (12th)',
    institution: 'D.T. Kalani College',
    location: 'Shahad, Maharashtra',
    duration: '2021 - 2023',
    description: 'Completed Higher Secondary Education in Commerce with Mathematics & IT, securing 84%',
  },
  {
    degree: 'SSC (10th)',
    institution: 'Century Rayon High School',
    location: 'Shahad, Maharashtra',
    duration: '2011 - 2021',
    description: 'Completed Secondary School Education with 71%',
  },
];

const EducationSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="education" className="py-20 relative">
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
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1.5 bg-space-purple-medium mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="relative max-w-3xl mx-auto"
        >
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 ml-[-1px] sm:ml-0 w-0.5 h-full bg-space-purple-dark/60 z-0"></div>
          
          {/* Education items */}
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative z-10 flex flex-col sm:flex-row mb-12 ${
                index % 2 === 0 ? 'sm:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 sm:left-1/2 ml-[-9px] sm:ml-[-9px] mt-1.5 w-[18px] h-[18px] rounded-full bg-space-purple-light glow"></div>
              
              {/* Content */}
              <div className={`ml-12 sm:ml-0 ${
                index % 2 === 0 ? 'sm:mr-auto sm:pr-12 sm:pl-0 sm:text-right' : 'sm:ml-auto sm:pl-12 sm:pr-0'
              } w-full sm:w-[calc(50%-24px)]`}>
                <div className="bg-space-darker/60 p-6 rounded-xl border border-space-purple-dark/20">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="text-space-purple-light" size={20} />
                    <h3 className="text-xl font-bold">{item.degree}</h3>
                  </div>
                  <h4 className="text-lg text-space-purple-light mb-3">{item.institution}</h4>
                  
                  <div className="flex items-center gap-6 text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
