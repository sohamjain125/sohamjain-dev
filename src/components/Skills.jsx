import { motion } from 'framer-motion';
import { Palette, Monitor, Database, Cpu, Zap, Cloud, Star } from 'lucide-react';
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
            A comprehensive toolkit of technologies and frameworks I use to create innovative solutions
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
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-3 py-2 rounded-lg font-medium text-sm transition-all duration-300 cursor-default group/skill flex items-center gap-2 ${
                      skill.level >= 90 
                        ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 dark:from-green-900/30 dark:to-emerald-900/30 dark:text-green-300 border border-green-200 dark:border-green-700' 
                        : skill.level >= 80 
                        ? 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 dark:from-blue-900/30 dark:to-cyan-900/30 dark:text-blue-300 border border-blue-200 dark:border-blue-700'
                        : skill.level >= 70
                        ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 dark:from-purple-900/30 dark:to-pink-900/30 dark:text-purple-300 border border-purple-200 dark:border-purple-700'
                        : 'bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800 dark:from-gray-700 dark:to-slate-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600'
                    } hover:shadow-md hover:shadow-black/10 dark:hover:shadow-white/10`}
                  >
                    {skill.name}
                    {skill.level >= 90 && <Star className="w-3 h-3 fill-current" />}
                  </motion.div>
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