import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Eye, Calendar, Tag, Filter, Star, Users, Code, Globe, ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  // Check if device is mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  // Get unique categories
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Optimized animation variants for mobile
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.1,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: isMobile ? 15 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.3 : 0.5,
        ease: "easeOut"
      }
    }
  };

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

  const getCategoryColor = (category) => {
    const colors = {
      'Freelance': 'from-purple-500 to-pink-500',
      'Personal': 'from-green-500 to-teal-500',
      'Professional': 'from-blue-500 to-indigo-500'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  const getProjectIcon = (category) => {
    const icons = {
      'Freelance': <Users className="w-4 h-4" />,
      'Personal': <Star className="w-4 h-4" />,
      'Professional': <Code className="w-4 h-4" />
    };
    return icons[category] || <Globe className="w-4 h-4" />;
  };

  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Featured </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A curated collection of my best work showcasing full-stack development expertise across various domains.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-2 mb-8 px-4 sm:px-0"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 text-sm ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200/50 dark:border-gray-700/50'
              }`}
            >
              {category === 'All' && <Filter className="w-3 h-3" />}
              {category !== 'All' && <div className="w-3 h-3">{getProjectIcon(category)}</div>}
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid - Compact Design */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                onHoverStart={() => !isMobile && setHoveredProject(project.id)}
                onHoverEnd={() => !isMobile && setHoveredProject(null)}
                onClick={() => {
                  if (project.liveUrl) {
                    window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                  } else if (project.githubUrl) {
                    window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                  }
                }}
                className={`project-card group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 h-72 sm:h-80 ${(project.liveUrl || project.githubUrl) ? 'cursor-pointer hover:border-blue-300 dark:hover:border-blue-600' : 'cursor-default'}`}
              >
                {/* Project Image/Header - Compact */}
                <div className="relative h-32 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
                  {/* Category Badge */}
                  <div className="absolute top-2 left-2 z-10">
                    <div className={`px-2 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getCategoryColor(project.category)} shadow-lg flex items-center gap-1`}>
                      {getProjectIcon(project.category)}
                      {project.category}
                    </div>
                  </div>

                  {/* Project Image or Icon */}
                  {project.image ? (
                    <div className="relative w-full h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback placeholder */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800" style={{ display: 'none' }}>
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                          {getProjectIcon(project.category)}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                        {getProjectIcon(project.category)}
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay - Only on desktop and when links exist */}
                  {!isMobile && (project.liveUrl || project.githubUrl) && (
                    <AnimatePresence>
                      {hoveredProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className={`absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center ${(project.liveUrl || project.githubUrl) ? 'cursor-pointer' : 'cursor-default'}`}
                        >
                          <div className="flex gap-3">
                            {project.liveUrl && (
                              <motion.a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.1 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                                aria-label="Live Demo"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  console.log(`Opening live demo for: ${project.title}`);
                                }}
                              >
                                <ExternalLink className="w-4 h-4" />
                              </motion.a>
                            )}
                            {project.githubUrl && (
                              <motion.a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: project.liveUrl ? 0.2 : 0.1 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                                aria-label="GitHub Repository"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  console.log(`Opening GitHub for: ${project.title}`);
                                }}
                              >
                                <Github className="w-4 h-4" />
                              </motion.a>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>

                {/* Project Content - Compact */}
                <div className="p-3 sm:p-4 h-40 sm:h-48 flex flex-col">
                  {/* Project Title & Date */}
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 flex-1">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0">
                      <Calendar className="w-3 h-3" />
                      <span>{project.date}</span>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Technologies - Compact */}
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium border border-blue-200/50 dark:border-blue-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons - Compact */}
                  <div className="flex gap-1 sm:gap-2 mt-auto">
                    {project.liveUrl ? (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: isMobile ? 1.01 : 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 flex items-center justify-center gap-1 py-2 px-2 sm:px-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
                        onClick={(e) => {
                          // Prevent event bubbling to avoid double opening
                          e.stopPropagation();
                          // Add click tracking
                          console.log(`Opening live demo for: ${project.title}`);
                        }}
                      >
                        <ExternalLink className="w-3 h-3" />
                        Demo
                      </motion.a>
                    ) : (
                      <div 
                        className="flex-1 flex items-center justify-center gap-1 py-2 px-2 sm:px-3 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs font-medium rounded-lg cursor-not-allowed"
                        title="Live demo not available for this project"
                      >
                        <Eye className="w-3 h-3" />
                        Demo N/A
                      </div>
                    )}
                    {project.githubUrl ? (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: isMobile ? 1.01 : 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 flex items-center justify-center gap-1 py-2 px-2 sm:px-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                        onClick={(e) => {
                          // Prevent event bubbling to avoid double opening
                          e.stopPropagation();
                          // Add click tracking
                          console.log(`Opening GitHub for: ${project.title}`);
                        }}
                      >
                        <Github className="w-3 h-3" />
                        Code
                      </motion.a>
                    ) : (
                      <div 
                        className="flex-1 flex items-center justify-center gap-1 py-2 px-2 sm:px-3 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs font-medium rounded-lg cursor-not-allowed"
                        title="Source code not publicly available"
                      >
                        <Code className="w-3 h-3" />
                        Code N/A
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action - Compact */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-xl p-4 sm:p-6 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
              Want to see more projects?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 max-w-2xl mx-auto">
              Explore my GitHub for more code samples, ongoing work, and open-source contributions.
            </p>
            <motion.a
              href="https://github.com/sohamjain125"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <Github className="w-4 h-4" />
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 