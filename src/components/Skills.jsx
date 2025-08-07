import { motion } from 'framer-motion';
import { Palette, Monitor, Database, Cpu, Zap, Cloud } from 'lucide-react';
import { skills } from '../data/portfolioData';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Palette className="w-6 h-6" />,
      color: 'from-pink-500 to-rose-500',
      skills: skills.filter(skill => ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Next.js'].includes(skill.name))
    },
    {
      title: 'UI/UX',
      icon: <Monitor className="w-6 h-6" />,
      color: 'from-blue-500 to-indigo-500',
      skills: skills.filter(skill => ['Bootstrap', 'Material UI', 'Tailwind CSS', 'Figma'].includes(skill.name))
    },
    {
      title: 'Backend',
      icon: <Database className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      skills: skills.filter(skill => ['Node.js', 'Express.js', 'MongoDB', 'MsSQL', 'REST APIs'].includes(skill.name))
    },
    {
      title: 'Tools',
      icon: <Cpu className="w-6 h-6" />,
      color: 'from-purple-500 to-violet-500',
      skills: skills.filter(skill => ['Redux', 'CASL', 'React Query', 'Appwrite', 'Git', 'Postman'].includes(skill.name))
    },
    {
      title: 'AI & Cloud',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      skills: skills.filter(skill => ['Cursor AI', 'GitHub Copilot', 'VS Code', 'AWS', 'Vercel', 'Netlify'].includes(skill.name))
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Skills & </span>
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies I work with to build modern applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 bg-gradient-to-r ${category.color} rounded-lg text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300 group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 