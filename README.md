# Soham Jain - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and a clean, professional design.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with perfect display on all devices
- **Dark Mode**: Toggle between light and dark themes with persistent preference
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Easy Customization**: Centralized data management for easy content updates
- **Performance Optimized**: Fast loading with optimized assets and code splitting
- **Accessibility**: WCAG compliant with proper focus management and screen reader support

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization Guide

### Quick Content Updates

All content is centralized in `src/data/portfolioData.js`. Update this file to modify:

- Personal information
- Skills and proficiency levels
- Work experience
- Projects
- Education
- Contact details

### Adding New Projects

1. Open `src/data/portfolioData.js`
2. Add a new project object to the `projects` array:

```javascript
{
  title: "Your Project Name",
  description: "Project description here...",
  image: "path/to/image.jpg", // or placeholder URL
  liveUrl: "https://your-project.com",
  githubUrl: "https://github.com/username/repo",
  technologies: ["React", "Node.js", "MongoDB"],
  category: "Personal" // or "Freelance", "Professional"
}
```

### Adding New Skills

1. Open `src/data/portfolioData.js`
2. Add skills to the appropriate category in the `skills` object:

```javascript
frontend: [
  { name: "New Skill", level: 85 }, // level is percentage (0-100)
  // ... existing skills
]
```

### Modifying Colors and Theme

Update the `config` object in `src/data/portfolioData.js`:

```javascript
export const config = {
  theme: {
    primaryColor: "#3B82F6",    // Main blue color
    secondaryColor: "#8B5CF6",  // Purple accent
    accentColor: "#10B981",     // Green accent
  },
  // ... other config
};
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.jsx`
3. Add navigation item to `navigationItems` in `portfolioData.js`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance Tips

- Optimize images before adding to projects
- Use WebP format for better compression
- Consider lazy loading for project images
- Minimize bundle size by removing unused dependencies

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify

1. Build your project: `npm run build`
2. Drag the `dist` folder to Netlify
3. Or connect your GitHub repository

### Other Platforms

The build output in the `dist` folder can be deployed to any static hosting service.

## 📝 Content Management

### Easy Updates

To update content without touching code:

1. **Personal Info**: Update `personalInfo` object
2. **Skills**: Modify skill levels in `skills` object
3. **Experience**: Add/edit entries in `experience` array
4. **Projects**: Update `projects` array with new work
5. **Education**: Modify `education` array

### Adding Images

1. Place images in `public/images/`
2. Reference them as `/images/filename.jpg`
3. Or use external URLs for project screenshots

## 🔧 Development

### Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   └── portfolioData.js # Centralized content
├── App.jsx             # Main app component
└── main.jsx           # Entry point
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6)
- **Secondary**: Purple (#8B5CF6)
- **Accent**: Green (#10B981)
- **Background**: White/Dark Gray
- **Text**: Gray scale with proper contrast

### Typography
- **Headings**: Inter font family
- **Body**: System font stack
- **Code**: Monospace font

### Spacing
- Consistent 8px grid system
- Responsive padding and margins
- Proper component spacing

## 🔒 Privacy & Analytics

- No tracking scripts included
- Contact form uses client-side validation only
- Add your own analytics if needed (Google Analytics, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you need help customizing your portfolio:

1. Check the customization guide above
2. Review the `portfolioData.js` file for examples
3. Open an issue for bugs or feature requests

## 🎉 Credits

- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)

---

**Happy coding! 🚀**
