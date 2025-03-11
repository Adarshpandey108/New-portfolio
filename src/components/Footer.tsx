
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'Github', icon: Github, href: 'https://github.com/Adarshpandey108' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/adarsh-pandey-432a94315/' },
    { name: 'Email', icon: Mail, href: 'mailto:adarshp12052006@gmail.com' },
  ];

  return (
    <footer className="py-10 bg-space-darkest relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-space-purple-dark to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-gradient mb-2">Adarsh Pandey</h3>
            <p className="text-gray-400 max-w-md">
              AI & ML Engineer | Full Stack Developer | Student at IIT Ropar
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-space-purple-dark/30 hover:bg-space-purple-medium transition-colors duration-300"
                >
                  <social.icon size={18} className="text-white" />
                </a>
              ))}
            </div>
            
            <p className="text-gray-400 text-sm flex items-center">
              © {currentYear} - Made with <Heart className="h-3 w-3 mx-1 text-space-purple-light" /> by Adarsh Pandey
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
