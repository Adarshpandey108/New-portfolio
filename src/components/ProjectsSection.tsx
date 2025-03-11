
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projectsData = [
  {
    title: 'AI Image Recognition Platform',
    description: 'A machine learning platform that can identify objects in images with high accuracy using state-of-the-art convolutional neural networks.',
    image: '/placeholder.svg',
    technologies: ['PyTorch', 'FastAPI', 'React', 'Docker'],
    githubLink: 'https://github.com/',
    liveLink: 'https://example.com/project1',
  },
  {
    title: 'Natural Language Processing API',
    description: 'An API service that provides text analysis, sentiment analysis, entity extraction, and other NLP features for developers.',
    image: '/placeholder.svg',
    technologies: ['TensorFlow', 'Flask', 'JavaScript', 'MongoDB'],
    githubLink: 'https://github.com/',
    liveLink: 'https://example.com/project2',
  },
  {
    title: 'Recommendation System',
    description: 'A collaborative filtering recommendation system for an e-commerce platform that suggests products based on user behavior and preferences.',
    image: '/placeholder.svg',
    technologies: ['Python', 'Scikit-learn', 'PostgreSQL', 'Redis'],
    githubLink: 'https://github.com/',
    liveLink: 'https://example.com/project3',
  },
  {
    title: 'Full-Stack Learning Platform',
    description: 'An educational platform with course content, quizzes, progress tracking, and an interactive coding environment for students.',
    image: '/placeholder.svg',
    technologies: ['React', 'Node.js', 'GraphQL', 'MongoDB'],
    githubLink: 'https://github.com/',
    liveLink: 'https://example.com/project4',
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'A dashboard that visualizes data streams in real-time, featuring customizable charts, metrics, and alerting capabilities.',
    image: '/placeholder.svg',
    technologies: ['Next.js', 'D3.js', 'Express', 'Socket.io'],
    githubLink: 'https://github.com/',
    liveLink: 'https://example.com/project5',
  },
  {
    title: 'AI-Powered Content Generator',
    description: 'A tool that uses GPT models to generate various types of content including blog posts, product descriptions, and social media updates.',
    image: '/placeholder.svg',
    technologies: ['OpenAI API', 'React', 'Node.js', 'AWS Lambda'],
    githubLink: 'https://github.com/',
    liveLink: 'https://example.com/project6',
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
