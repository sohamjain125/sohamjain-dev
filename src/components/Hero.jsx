import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Download, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  // Check if device is mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Optimized animation variants for mobile
  const fadeInUp = {
    hidden: { opacity: 0, y: isMobile ? 10 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: isMobile ? 0.4 : 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInUpDelayed = (delay) => ({
    hidden: { opacity: 0, y: isMobile ? 10 : 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: isMobile ? 0.4 : 0.8,
        delay: isMobile ? delay * 0.5 : delay,
        ease: "easeOut"
      }
    }
  });

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-tr from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 flex flex-col justify-center">
          {/* Greeting */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mb-4"
          >
            <span className="inline-block px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 backdrop-blur-sm">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={fadeInUpDelayed(0.2)}
            initial="hidden"
            animate="visible"
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-6 text-shadow leading-tight"
          >
            <span className="text-gray-900 dark:text-white">Hi, I'm </span>
            <span className="gradient-text whitespace-nowrap">{personalInfo.name}</span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            variants={fadeInUpDelayed(0.4)}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8 text-gray-600 dark:text-gray-300"
          >
            {personalInfo.role}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeInUpDelayed(0.6)}
            initial="hidden"
            animate="visible"
            className="text-sm sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            Passionate about creating innovative web solutions and turning ideas into reality. 
            I specialize in building scalable, user-friendly applications with modern technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUpDelayed(0.8)}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-6 sm:mb-12 px-4 sm:px-0"
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary flex items-center gap-2 group w-full sm:w-auto"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-secondary flex items-center gap-2 group w-full sm:w-auto"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
              View Projects
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeInUpDelayed(1.0)}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-start items-center gap-3 sm:gap-6 mb-6 sm:mb-8"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 sm:p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-blue-50 dark:hover:bg-gray-700"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-gray-50 dark:hover:bg-gray-700"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-blue-50 dark:hover:bg-gray-700"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
            </a>
          </motion.div>

          
          </div>

          {/* Profile Photo */}
          <motion.div
            variants={fadeInUpDelayed(0.3)}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 flex justify-center lg:justify-end items-center"
          >
            <div className="relative">
              {/* Profile Image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-xl animate-pulse-glow"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 dark:border-gray-700/20 shadow-2xl">
                  <img
                    src="/images/profilepicnormal.png"
                    alt="Soham Jain - Full Stack Developer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                    SJ
                  </div>
                </div>
              </div>
              
              {/* Floating elements around the photo */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/20 rounded-full animate-float animation-delay-1000"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-pink-500/20 rounded-full animate-float animation-delay-2000"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        variants={fadeInUpDelayed(1.2)}
        initial="hidden"
        animate="visible"
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-1 sm:gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group"
        >
          <span className="text-xs sm:text-sm font-medium">Scroll Down</span>
          <ChevronDown className="w-4 h-4 sm:w-6 sm:h-6 animate-bounce group-hover:animate-none" />
        </button>
      </motion.div>

    </section>
  );
};

export default Hero; 