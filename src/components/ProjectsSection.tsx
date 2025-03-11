
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Eye, CloudSun, Image, Bot, MessageSquare, Camera, SquarePen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projectsData = [
  {
    title: 'Weather Application',
    description: 'A responsive weather application that provides real-time weather updates for any location. Features include current conditions, forecasts, and temperature tracking.',
    image: '/placeholder.svg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    githubLink: 'https://github.com/adarshpandey108/Weather-app',
    liveLink: 'https://adarshpandey108.github.io/Weather-app/',
    icon: CloudSun
  },
  {
    title: 'Bharat Varsh Prakrite',
    description: 'An informative platform showcasing the natural beauty and cultural heritage of India, featuring various regions and their unique characteristics.',
    image: '/placeholder.svg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    githubLink: 'https://github.com/Adarshpandey108/Bharat_Varsh_-Prakrite-',
    liveLink: 'https://adarshpandey108.github.io/Bharat_Varsh_-Prakrite-/',
    icon: Image
  },
  {
    title: 'AI Chat Bot - Sangrah',
    description: 'An intelligent chatbot capable of natural language understanding and generation, providing human-like conversations and assistance to users.',
    image: '/placeholder.svg',
    technologies: ['JavaScript', 'NLP', 'AI', 'React'],
    githubLink: 'https://github.com/Adarshpandey108/',
    liveLink: 'https://adarshpandey108.github.io/Ai-Chat-Bot---Sangrah-/',
    icon: MessageSquare
  },
  {
    title: 'Yantraveer - AI Virtual Assistant',
    description: 'A sophisticated AI virtual assistant capable of understanding voice commands and performing various tasks like answering questions and controlling applications.',
    image: '/placeholder.svg',
    technologies: ['Python', 'Speech Recognition', 'NLP', 'AI'],
    githubLink: 'https://github.com/Adarshpandey108/',
    liveLink: 'https://adarshpandey108.github.io/Yantraveer-Ai-Virtual-Assistant-/',
    icon: Bot
  },
  {
    title: 'Human Pose Estimation',
    description: 'A computer vision application that detects and tracks human body joints and posture in real-time using advanced machine learning algorithms.',
    image: '/placeholder.svg',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Computer Vision'],
    githubLink: 'https://github.com/Adarshpandey108/Human-pose-Estimation-K-yamiti-',
    liveLink: 'https://github.com/Adarshpandey108/Human-pose-Estimation-K-yamiti-',
    icon: Camera
  },
  {
    title: 'Jadui Vastra',
    description: 'An image processing application that selectively removes red-colored clothing from images, effectively making them transparent using computer vision techniques.',
    image: '/placeholder.svg',
    technologies: ['Python', 'OpenCV', 'Image Processing', 'Computer Vision'],
    githubLink: 'https://github.com/Adarshpandey108/Jadui_vastra....',
    liveLink: 'https://github.com/Adarshpandey108/Jadui_vastra....',
    icon: SquarePen
  },
  {
    title: 'Air Canvas',
    description: 'A computer vision application that allows users to draw in the air using hand gestures, creating a virtual canvas controlled by movement.',
    image: '/placeholder.svg',
    technologies: ['Python', 'OpenCV', 'Hand Tracking', 'Computer Vision'],
    githubLink: 'https://github.com/Adarshpandey108/Air-canvas',
    liveLink: 'https://github.com/Adarshpandey108/Air-canvas',
    icon: SquarePen
  },
];

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="py-20 relative">
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
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-space-purple-medium mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-space-darker/60 rounded-xl overflow-hidden border border-space-purple-dark/20 hover:border-space-purple-light/30 transition-all duration-300"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-darker via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 text-space-purple-light">
                  <project.icon size={24} />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-space-purple-light transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs bg-space-purple-dark/20 text-gray-300 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-space-purple-light transition-colors duration-300"
                      aria-label="View GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-space-purple-light transition-colors duration-300"
                      aria-label="Visit Live Site"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="group/btn hover:text-space-purple-light hover:bg-space-purple-dark/10"
                    asChild
                  >
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Eye size={16} className="mr-2 group-hover/btn:animate-pulse" />
                      View Project
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
