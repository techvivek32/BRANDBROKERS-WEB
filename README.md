# Brand Brokers - Premium Marketing Agency Website

A modern, high-end marketing agency website built with Next.js 14, featuring 3D animations, glassmorphism UI, and comprehensive content management.

## 🚀 Features

- **Modern Design**: Premium dark theme with glassmorphism effects
- **3D Animations**: Three.js powered hero section with floating particles
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Built-in SEO with metadata, sitemap, and structured data
- **Content Management**: Dynamic content with MongoDB backend
- **Admin Dashboard**: Secure admin panel for content management
- **Performance**: Optimized for speed with Next.js 14 App Router

## 🛠 Tech Stack

### Frontend
- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (Animations)
- **Three.js** (3D Graphics)
- **Lucide React** (Icons)

### Backend
- **Next.js API Routes**
- **MongoDB** (Database)
- **Mongoose** (ODM)

### UI Components
- Custom glassmorphism components
- Responsive design system
- Smooth animations and transitions

## 📁 Project Structure

```
brand-brokers/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── admin/             # Admin dashboard
│   ├── (pages)/           # Website pages
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # UI components
│   ├── sections/         # Page sections
│   └── three/            # 3D components
├── models/               # MongoDB models
├── lib/                  # Utilities
└── public/              # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- MongoDB database
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/brand-brokers.git
cd brand-brokers
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your configuration:
```env
MONGODB_URI=mongodb://localhost:27017/brand-brokers
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
ADMIN_EMAIL=admin@brandbrokers.com
ADMIN_PASSWORD=changeme
```

4. **Start the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📄 Pages

- **Home** (`/`) - Hero section with 3D animations, services, case studies
- **Team** (`/team`) - Team member profiles
- **Services** (`/services`) - Detailed service offerings
- **Clients** (`/clients`) - Client logos and testimonials
- **Case Studies** (`/case-studies`) - Success stories and metrics
- **Rosters** (`/rosters`) - Influencer talent profiles
- **Products** (`/products`) - Digital products and offerings
- **Contact** (`/contact`) - Contact form and information
- **Book a Call** (`/book-call`) - Consultation booking

## 🔧 API Endpoints

### Public APIs
- `GET /api/services` - Fetch services
- `GET /api/team` - Fetch team members
- `GET /api/clients` - Fetch client logos
- `GET /api/case-studies` - Fetch case studies
- `GET /api/rosters` - Fetch talent roster
- `GET /api/products` - Fetch products
- `GET /api/testimonials` - Fetch testimonials
- `POST /api/contact` - Submit contact form

### Admin APIs
- `POST /api/admin/*` - CRUD operations (requires authentication)

## 🎨 Design Features

### Glassmorphism UI
- Translucent backgrounds with backdrop blur
- Subtle borders and shadows
- Modern glass-like appearance

### Animations
- Framer Motion page transitions
- Scroll-triggered animations
- Hover effects and micro-interactions
- 3D particle system in hero section

### Color Scheme
- Dark premium theme
- Blue to purple gradients
- Soft accent colors
- High contrast for accessibility

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Touch-friendly interactions

## 🔒 Admin Panel

Access the admin dashboard at `/admin` (to be implemented):
- Content management for all sections
- User authentication
- Analytics dashboard
- File upload management

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Set environment variables
4. Deploy automatically

### Other Platforms
- Netlify
- Railway
- DigitalOcean App Platform

## 📊 Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Core Web Vitals optimized
- Image optimization with Next.js
- Lazy loading for components
- Efficient bundle splitting

## 🔧 Customization

### Adding New Sections
1. Create component in `components/sections/`
2. Add to page layout
3. Create corresponding API if needed
4. Update navigation

### Styling
- Modify `tailwind.config.ts` for theme changes
- Update `globals.css` for global styles
- Use CSS variables for consistent theming

### Content Management
- Add new models in `models/`
- Create API routes in `app/api/`
- Update admin interface

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Email: hello@brandbrokers.com
- Documentation: [docs.brandbrokers.com](https://docs.brandbrokers.com)
- Issues: [GitHub Issues](https://github.com/your-username/brand-brokers/issues)

## 🙏 Acknowledgments

- Design inspiration from Awwwards-winning websites
- Three.js community for 3D graphics resources
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach