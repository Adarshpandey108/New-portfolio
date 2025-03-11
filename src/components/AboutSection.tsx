
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 relative">
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
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-space-purple-medium mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-2xl overflow-hidden glow">
              <img 
                src="/lovable-uploads/fed57b88-7955-44aa-b863-37b1bf5b8e2a.png" 
                alt="Adarsh Pandey" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-space-purple-dark/10 mix-blend-overlay"></div>
              <div className="absolute inset-0 border-2 border-space-purple-light/30 rounded-2xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold mb-4">AI & ML Engineer / Full Stack Developer</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Hello! I'm a student at IIT Ropar with expertise in AI & Machine Learning and full-stack development. 
              I specialize in creating intelligent systems that solve complex problems while also building 
              complete web applications from front to back end.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With a passion for cutting-edge technology, I enjoy exploring the intersection of artificial 
              intelligence and software development. My goal is to create solutions that are not only 
              technically excellent but also user-friendly and accessible.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold text-space-purple-light mb-2">Name:</h4>
                <p className="text-gray-300">Adarsh Pandey</p>
              </div>
              <div>
                <h4 className="font-semibold text-space-purple-light mb-2">Email:</h4>
                <p className="text-gray-300">adarshp12052006@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-space-purple-light mb-2">Location:</h4>
                <p className="text-gray-300">Kalyan, Maharashtra, India</p>
              </div>
              <div>
                <h4 className="font-semibold text-space-purple-light mb-2">Phone:</h4>
                <p className="text-gray-300">+91 9175465182</p>
              </div>
            </div>
            
            <Button 
              className="group bg-space-purple-dark hover:bg-space-purple-medium transition-all duration-300 text-white px-6 py-3 rounded-full"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
