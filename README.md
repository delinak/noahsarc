# Noah's Arc Care - Website

A modern, responsive website for Noah's Arc Care, a provider of intellectual and developmental disability services in Tennessee.

## Features

- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Modern UI**: Clean, professional design with glassmorphism elements
- **Static Site**: Optimized for GitHub Pages hosting
- **Fast Performance**: Built with Vite and React for optimal loading speeds

## Pages

- **Home**: Company overview and hero section
- **About**: Company history, mission, and values
- **Services**: Detailed service offerings
- **Careers**: Job opportunities and application process
- **Contact**: Contact information and office details
- **Register**: Client registration information

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: TailwindCSS with custom color scheme
- **Build Tool**: Vite
- **Routing**: Wouter (lightweight router)
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd NoahsArcCare3
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### GitHub Pages (Recommended)

This project is configured for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages** in your repository settings
2. **Set source to "GitHub Actions"**
3. **Push to main branch** - automatic deployment will occur

The GitHub Actions workflow will:
- Build the project
- Deploy to GitHub Pages
- Update on every push to main

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the contents of `dist/` to your web server

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   └── index.css      # Global styles
│   └── index.html         # HTML template
├── public/                 # Static assets
├── .github/workflows/      # GitHub Actions
├── tailwind.config.ts      # TailwindCSS configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies and scripts
```

## Customization

### Colors

The color scheme is defined in `tailwind.config.ts`:

- `royal-purple`: Primary brand color
- `hope-green`: Secondary accent color
- `trust-blue`: Trust and reliability color
- `dark-gray`: Text color
- `medium-gray`: Secondary text color

### Content

Update content by editing the respective page components in `client/src/pages/`.

### Images

Place images in the `public/` directory and reference them with `/image-name.jpg`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Lighthouse Score**: 90+ on all metrics
- **Bundle Size**: Optimized with Vite
- **Images**: Optimized and responsive
- **Fonts**: System fonts for fast loading

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to Noah's Arc Care.

## Support

For technical support or questions about the website, please contact the development team.

---

**Noah's Arc Care** - Providing quality care and support for individuals with intellectual and developmental disabilities in Tennessee.
