# 🎮 Carina Portfolio

A retro-inspired portfolio website built with Next.js, featuring a pixel-perfect design aesthetic reminiscent of the 90s computing era.

## ✨ Features

- **🎨 Retro Design**: Authentic 90s aesthetic with pixel fonts and bold colors
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **⚡ Fast & Modern**: Built with Next.js 14 and TypeScript
- **🎯 Easy Content Management**: JSON-based content system for quick updates
- **🚀 GitHub Pages Ready**: Automated deployment workflow included
- **♿ Accessible**: Semantic HTML and proper contrast ratios

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Font**: Press Start 2P (Google Fonts)
- **Icons**: Lucide React
- **Deployment**: GitHub Pages via GitHub Actions
- **Content**: JSON-based data management

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/carina-portfolio.git
   cd carina-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📝 Customization

### Content Management

All content is managed through `src/data/portfolio.json`. Update this file to customize:

- **Hero Section**: Title, description, and animated sparkles
- **Values**: Your core values and philosophy
- **Quests**: Projects with images, technologies, and descriptions
- **Skills**: Skill categories with detailed descriptions
- **Library**: Book recommendations
- **Achievements**: Certifications and awards
- **Contact**: Contact information and social links

### Design Customization

#### Colors

Update colors in `tailwind.config.ts`:

```typescript
colors: {
  "skill-blue": "#4facfe",
  "skill-green": "#43e97b",
  // Add your custom colors
}
```

#### Fonts

The project uses "Press Start 2P" for the retro pixel aesthetic. To change fonts, update `src/app/layout.tsx`.

#### Gradients

Quest card gradients are defined in `src/app/globals.css` and `tailwind.config.ts`.

## 🏗️ Project Structure

```
├── .github/workflows/     # GitHub Actions deployment
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   └── data/            # JSON content files
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind configuration
├── next.config.js       # Next.js configuration
└── package.json         # Dependencies and scripts
```

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**

   - Go to repository Settings → Pages
   - Set Source to "GitHub Actions"
   - Save settings

3. **Automatic Deployment**
   The workflow will automatically deploy on every push to `main`

### Manual Build

```bash
npm run build
```

The static files will be generated in the `out` directory.

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design Philosophy

This portfolio embraces the aesthetic of early computing:

- **Pixel Fonts**: Authentic retro typography
- **Bold Colors**: High contrast, saturated color palette
- **Sharp Edges**: Minimal use of rounded corners
- **Functional Layout**: Clean, grid-based organization
- **Interactive Elements**: Hover effects and animations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See `LICENSE` file for details.

## 🙏 Acknowledgments

- **Press Start 2P Font** by CodeMan38
- **Lucide Icons** for beautiful, consistent iconography
- **Unsplash** for high-quality project images
- **Tailwind CSS** for rapid UI development

## 📞 Support

If you have questions or need help customizing your portfolio:

- 📧 Email: your-email@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/carina-portfolio/issues)
- 💡 Discussions: [GitHub Discussions](https://github.com/yourusername/carina-portfolio/discussions)

---

Built with ❤️ and pixels
