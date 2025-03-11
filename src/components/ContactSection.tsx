
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
          variant: "default",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: 'Github', icon: Github, href: 'https://github.com/' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/' },
  ];

  const contactInfo = [
    { icon: Mail, title: 'Email', info: 'your.email@example.com' },
    { icon: Phone, title: 'Phone', info: '+1 (123) 456-7890' },
    { icon: MapPin, title: 'Location', info: 'City, Country' },
  ];

  return (
    <section id="contact" className="py-20 relative">
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
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1.5 bg-space-purple-medium mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6">Let's Talk</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Have a project in mind or want to collaborate? Feel free to reach out to me. 
              I'm always open to discussing new opportunities and ideas.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-space-purple-dark/30 p-3 rounded-lg">
                    <item.icon className="text-space-purple-light h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-300">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-space-purple-dark/30 hover:bg-space-purple-medium transition-colors duration-300 glow"
                  >
                    <social.icon size={18} className="text-white" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-space-darker/60 p-8 rounded-xl border border-space-purple-dark/20"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Your name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-space-dark border-space-purple-dark/30 focus:border-space-purple-light"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Your email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-space-dark border-space-purple-dark/30 focus:border-space-purple-light"
                  />
                </div>
              </div>
              
              <div className="mb-5">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-space-dark border-space-purple-dark/30 focus:border-space-purple-light"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Your message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-space-dark border-space-purple-dark/30 focus:border-space-purple-light"
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-space-purple-dark hover:bg-space-purple-medium transition-colors duration-300"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="h-4 w-4 border-2 border-t-transparent border-space-purple-light rounded-full animate-spin mr-2" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
