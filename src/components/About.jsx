import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Phone, Mail, Download, Code, Palette, Zap, Shield, Users, TrendingUp, Globe } from 'lucide-react';

const About = () => {
  // Check if device is mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  
  // Optimized animation variants for mobile
  const fadeInUp = {
    hidden: { opacity: 0, y: isMobile ? 10 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: isMobile ? 0.4 : 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: isMobile ? -10 : -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: isMobile ? 0.4 : 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: isMobile ? 10 : 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: isMobile ? 0.4 : 0.8,
        ease: "easeOut"
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: isMobile ? 0.95 : 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: isMobile ? 0.3 : 0.5,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.1,
        delayChildren: 0.1
      }
    }
  };

  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Medi-Caps University, Indore",
      period: "2021–2025",
      details: "CGPA: 8.34"
    },
    {
      degree: "HSC",
      institution: "KJ Somaiya Junior College, Mumbai",
      period: "2021",
      details: "95.66%"
    }
  ];

  const personalInfo = [
    { icon: <Mail size={20} />, label: "Email", value: "sohamjain125@gmail.com", link: "mailto:sohamjain125@gmail.com" },
    { icon: <Phone size={20} />, label: "Phone", value: "+91 90220 70326", link: "tel:+919022070326" },
    { icon: <MapPin size={20} />, label: "Location", value: "Thane, India", link: null },
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "End-to-end web applications with React, Node.js, and modern databases",
      metrics: "15+ Projects",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with modern design principles",
      metrics: "95% User Satisfaction",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, scalability, and user experience",
      metrics: "40% Performance Boost",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Working effectively in agile teams with Git, CI/CD, and modern workflows",
      metrics: "3+ Years Experience",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Analyzing complex requirements and delivering innovative technical solutions",
      metrics: "100% Success Rate",
      color: "from-red-500 to-pink-500"
    }
  ];

  const achievements = [
    { number: "15+", label: "Projects Completed" },
    { number: "95%", label: "Code Quality Score" },
    { number: "40%", label: "Performance Boost" },
    { number: "100%", label: "Success Rate" }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A passionate Full Stack Developer with expertise in modern web technologies and a strong foundation in computer science.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Information */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Personal Information
            </h3>
            
            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={fadeInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="text-blue-600 dark:text-blue-400">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {info.label}
                    </p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-900 dark:text-white">
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download Resume Button */}
            <motion.button
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Download size={20} />
              Download Resume
            </motion.button>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {edu.period}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        {edu.details}
                      </p>
                    </div>
                  </div>
                  
                  {index < education.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-8 bg-gray-200 dark:bg-gray-700"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced What I Do Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-20"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What I Do
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I specialize in creating innovative digital solutions that drive business growth and enhance user experiences. 
              From concept to deployment, I handle every aspect of modern web development.
            </p>
          </div>

          {/* Achievement Metrics */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
                className="achievement-card text-center p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-blue-200/50 dark:border-gray-600/50"
              >
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">
                  {achievement.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: isMobile ? -2 : -5, scale: isMobile ? 1.01 : 1.02 }}
                className="service-card group relative p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`relative mb-3 sm:mb-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center text-white shadow-lg`}>
                  {service.icon}
                </div>

                {/* Content */}
                <div className="relative">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                    <span className="text-xs font-medium text-green-600 dark:text-green-400">
                      {service.metrics}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-blue-200/50 dark:border-gray-600/50">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Ready to Build Something Amazing?
              </h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 max-w-2xl mx-auto">
                Let's collaborate to bring your ideas to life with cutting-edge technology and exceptional user experiences.
              </p>
                             <motion.button
                 onClick={() => {
                   const element = document.getElementById('contact');
                   if (element) {
                     element.scrollIntoView({ behavior: 'smooth' });
                   }
                 }}
                 whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="btn-gradient inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
               >
                 Let's Connect
               </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 