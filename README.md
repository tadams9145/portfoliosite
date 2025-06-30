# Stone Timber Technologies Landing Page

**Modern Defense-Tech Design System** - A clean, professional interface inspired by leading defense contractors like Anduril, Palantir, and Skydio.

## 🎨 Design Philosophy

- **Clean & Minimal**: No neon glows, scanlines, or retro effects
- **Professional Color Palette**: Deep grayscale, navy, metallic slate, white, and soft blues
- **Modern Typography**: Inter, Space Grotesk, and IBM Plex Mono fonts
- **Subtle Animations**: Smooth transitions without overwhelming effects
- **Enterprise Ready**: Designed for government and defense clients

## 🚀 Features

- **Subtle 3D Terrain**: Clean topographic visualization
- **Dark/Light Mode**: Professional theme switching
- **Responsive Design**: Mobile-first approach
- **Smooth Animations**: Framer Motion for elegant transitions
- **Performance Optimized**: Automatic quality adjustments based on device capabilities

## 🛠️ Tech Stack

- **React** (via Vite)
- **Three.js** via @react-three/fiber and @react-three/drei
- **TailwindCSS** for styling
- **Framer Motion** for animations
- **Zustand** for state management
- **Lucide React** for icons

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization Guide

### 1. **Update Company Information**
- Edit company name in `src/components/Hero.jsx` and `src/components/Footer.jsx`
- Update email in `src/components/Contact.jsx` and `src/components/Footer.jsx`
- Modify about text in `src/components/About.jsx`

### 2. **Add/Edit Projects**
In `src/components/Projects.jsx`, update the `projects` array:
```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description',
    category: 'Category',
    status: 'Active',
    metrics: {
      'Metric 1': 'Value',
      'Metric 2': 'Value',
    },
    tags: ['Tag1', 'Tag2'],
  },
  // Add more projects...
];
```

### 3. **Modify Services**
Edit the `services` array in `src/components/Services.jsx`:
```javascript
const services = [
  {
    icon: YourIcon, // Import from lucide-react
    title: 'Service Title',
    description: 'Service description',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  // Add more services...
];
```

### 4. **Customize 3D Scene**
- Terrain settings: `src/scenes/TerrainScene.jsx`
- Adjust terrain size, resolution, and animation speed
- Modify colors and lighting

### 5. **Theme Colors**
Update colors in `tailwind.config.js`:
```javascript
colors: {
  'accent': {
    'blue': '#0066e6',
    'green': '#10b981',
    // Add your custom colors
  }
}
```

### 6. **Performance Settings**
The site automatically adjusts quality based on device:
- **Low**: Mobile or low-end devices (40 terrain resolution)
- **Medium**: Mid-range devices (60 terrain resolution)
- **High**: High-end devices (80 terrain resolution)

## 📁 Project Structure

```
src/
├── components/       # UI components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── scenes/          # 3D scenes
│   └── TerrainScene.jsx
├── store/           # State management
│   └── useThemeStore.js
├── hooks/           # Custom hooks
│   └── usePerformanceOptimization.js
└── App.jsx          # Main app component
```

## 🔧 Common Customizations

### Change Hero Tagline
In `src/components/Hero.jsx`:
```jsx
<p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8">
  Your new tagline here
</p>
```

### Add Social Media Links
In `src/components/Footer.jsx`, add social icons:
```jsx
import { Twitter, Linkedin, Github } from 'lucide-react';

// Add in the footer
<div className="flex space-x-4">
  <a href="https://twitter.com/yourhandle">
    <Twitter size={20} />
  </a>
  // Add more social links
</div>
```

### Contact Form Integration
The contact form in `src/components/Contact.jsx` is ready for integration. Add your form handler:
```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  // Add your form submission logic here
  // Example: Send to API, email service, etc.
};
```

## 📝 TODOs

- [ ] Replace placeholder project data with actual projects
- [ ] Integrate contact form with backend service
- [ ] Add Google Analytics or other tracking
- [ ] Create custom favicon
- [ ] Add more subtle 3D elements if needed
- [ ] Implement project detail pages

## 🚀 Deployment

Build the project and deploy to your preferred hosting service:

```bash
npm run build
```

The `dist` folder will contain your production-ready files.

## 📄 License

This project is built for Stone Timber Technologies. All rights reserved.
