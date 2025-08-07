import { motion } from 'framer-motion';
import { Code, Database, Palette, Cloud, Cpu, Globe, Zap, Monitor } from 'lucide-react';
import { skills } from '../data/portfolioData';
import { useState, useEffect } from 'react';

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Palette className="w-6 h-6" />,
      skills: skills.filter(skill => ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Next.js', 'Bootstrap', 'Material UI', 'Tailwind CSS'].includes(skill.name))
    },
    {
      title: 'Backend Development',
      icon: <Database className="w-6 h-6" />,
      skills: skills.filter(skill => ['Node.js', 'Express.js', 'MongoDB', 'MsSQL', 'REST APIs'].includes(skill.name))
    },
    {
      title: 'State Management & Tools',
      icon: <Cpu className="w-6 h-6" />,
      skills: skills.filter(skill => ['Redux', 'CASL', 'React Query', 'Appwrite', 'Git', 'Postman'].includes(skill.name))
    },
    {
      title: 'AI & Development Tools',
      icon: <Zap className="w-6 h-6" />,
      skills: skills.filter(skill => ['Cursor AI', 'GitHub Copilot', 'VS Code', 'Figma'].includes(skill.name))
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-6 h-6" />,
      skills: skills.filter(skill => [ 'AWS', 'Vercel', 'Netlify', 'Agile', 'SDLC'].includes(skill.name))
    },
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: skills.filter(skill => ['C++'].includes(skill.name))
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 10 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.4 : 0.6
      }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: isMobile ? -10 : -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: isMobile ? 0.3 : 0.5
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: (custom) => `${custom}%`,
      transition: {
        duration: isMobile ? 0.6 : 1,
        delay: isMobile ? 0.1 : 0.2
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: isMobile ? 0.6 : 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Skills & </span>
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies to create robust and scalable applications, 
            including modern AI-powered development tools.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-1.5 sm:p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
                  {category.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={skillItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                      <span className="font-medium text-sm sm:text-base text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2 overflow-hidden">
                      <motion.div
                        variants={progressVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={skill.level}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative"
                      >
                        {!isMobile && (
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: isMobile ? 0.6 : 0.8, delay: isMobile ? 0.3 : 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Embracing Modern Development
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm passionate about staying current with the latest technologies and AI-powered development tools. 
              I continuously explore new frameworks, libraries, and tools to enhance my development workflow and deliver better solutions.
            </p>
            <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400">
              <Globe className={`w-5 h-5 ${isMobile ? '' : 'animate-spin-slow'}`} />
              <span className="font-medium">Continuously expanding my skill set with AI tools</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 