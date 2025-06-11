# MKB Tours & Travel - Official Website

A modern, responsive single-page website for MKB Tours & Travel, built with React.js and Tailwind CSS.

## 🌟 Features

- **Responsive Design**: Optimized for all device sizes (mobile, tablet, desktop)
- **Modern UI/UX**: Beautiful design with smooth animations and micro-interactions
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mkb-tours-travel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`
   - The site will automatically reload when you make changes

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation and logo
│   ├── Hero.tsx        # Landing section
│   ├── Services.tsx    # Services showcase
│   ├── Locations.tsx   # Destinations we serve
│   ├── About.tsx       # Company information
│   ├── Testimonials.tsx # Customer reviews
│   ├── Contact.tsx     # Contact form and info
│   └── Footer.tsx      # Footer with links
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
├── index.css           # Global styles and Tailwind imports
└── vite-env.d.ts       # TypeScript declarations
```

## 🎨 Design System

### Colors
- **Primary**: Dark Blue (#003049) - Trust and reliability
- **Secondary**: Gold (#D4AF37) - Premium and luxury
- **Neutral**: Various grays for text and backgrounds

### Typography
- **Font**: Inter - Clean, modern, and highly readable
- **Headings**: Bold weights (600-800) for hierarchy
- **Body**: Regular weight (400) with good line spacing

### Animations
- Smooth transitions and hover effects
- Gentle animations that respect user preferences
- Loading states and micro-interactions

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy with Vercel CLI**
   ```bash
   npm install -g vercel
   vercel
   ```

3. **Or connect GitHub repository**
   - Push code to GitHub
   - Import project in Vercel dashboard
   - Automatic deployments on every push to main branch

### Environment Variables
No environment variables required for basic functionality.

### Build Configuration
- Output directory: `dist`
- Build command: `npm run build`
- Node.js version: 18.x (recommended)

## 📞 Contact Information

**MKB Tours & Travel**
- **Phone**: +91 84338 94555, +91 86899 23413
- **Email**: Shreemkb@gmail.com
- **Address**: Anusaya Niwas, Malpa Dongri No. 3, Andheri East, Mumbai 400093

## 🔧 Technical Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS 3.4
- **Build Tool**: Vite 5.4
- **Icons**: Lucide React
- **Animations**: CSS transitions and keyframes
- **Deployment**: Vercel (configured)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance Optimizations

- Lazy loading for images
- Optimized bundle splitting
- Compressed assets
- Efficient CSS with Tailwind's purging
- Semantic HTML for better SEO

## 🔄 Future Enhancements

- [ ] Online booking system integration
- [ ] Payment gateway integration
- [ ] Multi-language support
- [ ] Blog section for travel tips
- [ ] Customer dashboard
- [ ] Real-time chat support

## 📄 License

This project is proprietary software for MKB Tours & Travel. All rights reserved.

## 🤝 Contributing

For feature requests or bug reports, please contact the development team at the provided email address.

---

**Happy Traveling! 🌍✈️**