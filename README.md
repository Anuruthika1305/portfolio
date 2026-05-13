# K Anuruthika - Portfolio Website

A modern, animated portfolio website built with React and Vite. Features smooth animations, gradient backgrounds, interactive components, and a fully responsive design.

## Features

✨ **Stunning Animations**
- Letter-by-letter zoom animations on hero section
- Smooth scroll animations for all sections
- Hover effects on tech cards and project cards
- Floating background shapes with blur effects
- Custom animated cursor

🎨 **Beautiful Design**
- Gradient backgrounds throughout
- Modern color scheme (Blue, Purple, Red)
- Smooth transitions and hover effects
- Professional typography
- Fully responsive layout

📱 **Fully Responsive**
- Mobile-friendly design
- Tablet support
- Desktop optimized

🔧 **Easy to Customize**
- Modular component structure
- CSS variables for colors
- Easy-to-update content sections

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── TechStack.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── CustomCursor.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Getting Started

### Installation

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Customization

### Update Your Info

1. **Hero Section** - Edit `src/components/Hero.jsx`
   - Replace name, title, description
   - Customize button text and colors

2. **About Section** - Edit `src/components/About.jsx`
   - Add your bio text
   - Update stats (projects, technologies, years)
   - Add your profile image

3. **Tech Stack** - Edit `src/components/TechStack.jsx`
   - Update the `technologies` array with your skills
   - Modify icons and colors

4. **Projects** - Edit `src/components/Projects.jsx`
   - Add your project details
   - Update titles, descriptions, and technologies

5. **Contact Section** - Edit `src/components/Contact.jsx`
   - Update email, phone, location
   - Add social media links with your URLs

6. **Footer** - Edit `src/components/Footer.jsx`
   - Update name and contact details
   - Ensure social links are correct

### Colors

Main colors used:
- Primary Blue: `#3498db`
- Secondary Purple: `#9b59b6`
- Accent Red: `#e74c3c`

To change the color scheme, use Find & Replace to update these hex values across CSS files.

### Add Your Profile Image

1. Place your image in the `public/` folder
2. Update the About component to use your image instead of the emoji

## Build for Production

```bash
npm run build
npm run preview
```

## Deployment

### Vercel (Recommended)
Push to GitHub and import in [vercel.com](https://vercel.com)

### Netlify
Connect GitHub repository and set:
- Build command: `npm run build`
- Publish directory: `dist`

## Technologies Used

- React 18
- Vite
- CSS3 with Animations
- JavaScript ES6+

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Tips

1. Update contact form to actually send emails (use EmailJS, Formspree, etc.)
2. Add your resume download link
3. Optimize images for faster loading
4. Test on mobile devices
5. Add Google Analytics for tracking

## License

Open source for personal use.
# Test PR for CodeGuardian AI


