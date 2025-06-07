# Astro Blog

A modern blog built with Astro, React, and Tailwind CSS.

## 🚀 Features

- ⚡️ Fast and lightweight with Astro
- 🎨 Styled with Tailwind CSS
- ⚛️ React components for interactivity
- 📝 MDX support for rich content
- 🔍 SEO optimized
- 📱 Responsive design
- 🎯 TypeScript support
- 📊 Google Analytics integration with Partytown
- 🔗 Social media integration
- 📄 Sitemap generation
- 🎨 Syntax highlighting with Shiki

## 🛠️ Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [MDX](https://mdxjs.com/) - Markdown with JSX
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## 📁 Project Structure

```
├── public/
│   ├── favicon.svg
│   └── images/
├── src/
│   ├── components/
│   ├── config/
│   ├── content/
│   │   ├── pages/
│   │   └── posts/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   ├── shortcodes/
│   └── styles/
├── astro.config.mjs
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd astro-blog
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:4321`

## 📝 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run astro` - Run Astro CLI commands

## 📄 Content Management

### Adding a New Blog Post

1. Create a new `.mdx` file in `src/content/posts/`
2. Add the frontmatter:

```yaml
---
title: "Your Post Title"
description: "Brief description of your post"
date: 2024-01-01
categories: ["category1", "category2"]
tags: ["tag1", "tag2"]
image: "/images/your-image.jpg"
---
```

3. Write your content using Markdown or MDX syntax

### Adding a New Page

1. Create a new `.mdx` file in `src/content/pages/`
2. Add the appropriate frontmatter
3. The page will be automatically available at `/page-slug`

## 🎨 Customization

### Configuration

Edit the configuration files in `src/config/`:
- `config.json` - Site settings and metadata
- `menu.json` - Navigation menu items
- `social.json` - Social media links
- `theme.json` - Theme colors and fonts

### Styling

- Modify `tailwind.config.mjs` for Tailwind CSS customization
- Edit styles in `src/styles/main.scss`

## 🔧 Shortcodes

The blog includes several custom shortcodes for enhanced content:

- `<Button>` - Custom buttons
- `<Accordion>` - Collapsible content sections
- `<Notice>` - Alert boxes
- `<Video>` - Video embeds
- `<Youtube>` - YouTube video embeds
- `<Tabs>` - Tabbed content sections

## 📊 Analytics

Google Analytics is integrated using Partytown for better performance. Configure your tracking ID in the site configuration.

## 🚀 Deployment

The site can be deployed to various platforms:

### Vercel
```bash
npm run build
# Deploy the `dist` folder
```

### Netlify
```bash
npm run build
# Deploy the `dist` folder
```

### GitHub Pages
Configure the deployment workflow in `.github/workflows/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/)
- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- reference [reference](https://github.com/themefisher/bookworm-light-astro/)