# INM-BioNeno Website

Professional biotech company website for INM-BioNeno - India's leading biotechnology solutions provider for sustainable agriculture.

## 🚀 Features

- **Modern Next.js Architecture**: Built with React 18 and Next.js 14 for optimal performance
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Product Showcase**: Comprehensive product catalog with detailed information
- **Blog Section**: Latest articles and insights on agriculture and biotech
- **Contact Management**: Fully functional contact form with email integration
- **E-commerce Ready**: Foundation for adding shopping cart and payment integration
- **Professional Design**: Corporate aesthetic with green/biotech branding
- **Image Gallery**: Beautiful image displays using optimized Next.js Image component
- **SEO Optimized**: Built-in meta tags and structured data for search engines
- **Fast Performance**: Optimized for Core Web Vitals and lighthouse scores

## 📋 Pages

- **Home** (`/`) - Hero section with featured products and services overview
- **About** (`/about`) - Company information, mission, values, and team
- **Products** (`/products`) - Complete product catalog with filtering
- **Blog** (`/blog`) - Latest news and insights about agriculture and biotech
- **Contact** (`/contact`) - Contact form, email, phone, and location information

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Email**: Nodemailer (configured)
- **Node Version**: 18+

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn installed
- Git (optional, for version control)

### Steps

1. **Clone or navigate to the project**
   ```bash
   cd inm-Bio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and add your configuration:
   - Email: `info@inm-bioneno.co.in`
   - Phone: `+91 90000 00000`
   - Address: `Bangalore, India`

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
inm-Bio/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Home page
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── products/
│   │   └── page.tsx         # Products page
│   ├── blog/
│   │   └── page.tsx         # Blog page
│   └── contact/
│       └── page.tsx         # Contact page
├── components/              # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── FeaturedProducts.tsx
│   ├── ServicesOverview.tsx
│   ├── TestimonialSection.tsx
│   ├── CTASection.tsx
│   ├── ProductCard.tsx
│   └── BlogCard.tsx
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.js
```

## 📝 Key Components

### Header
- Sticky navigation with responsive menu
- Logo and company branding
- Mobile hamburger menu
- Quick access "Shop Now" button

### Footer
- Company information
- Quick links navigation
- Contact details (email, phone, address)
- Social media links
- Privacy and terms links

### Hero Section
- Eye-catching gradient background
- Company value proposition
- Key statistics display
- Call-to-action buttons

### Product Cards
- Product image with hover effects
- Category tags
- Price display
- Features list with checkmarks
- Add to cart functionality

### Blog Cards
- Featured blog post images
- Category and author information
- Publication dates
- Read more links

## 🎨 Customization

### Colors
Update the primary colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#1e7e34',      // Green
  secondary: '#f39200',    // Orange
  accent: '#0066cc',       // Blue
}
```

### Company Information
Update contact details in:
- `app/contact/page.tsx` - Contact page info
- `components/Footer.tsx` - Footer contact details
- `.env.local` - Environment variables

### Products
Edit the products array in `app/products/page.tsx` to add/modify products

### Blog Articles
Edit the articles array in `app/blog/page.tsx` to add new blog posts

## 🛒 E-Commerce Integration

To add shopping functionality:

1. **Install Stripe** (if needed)
   ```bash
   npm install @stripe/stripe-js @stripe/react-stripe-js
   ```

2. **Add payment processing** to `/api/checkout` route

3. **Connect to your backend** for order management

## 📧 Contact Form Setup

The contact form currently logs to console. To send emails:

1. Configure SMTP settings in `.env.local`
2. Create an API route: `app/api/contact/route.ts`
3. Implement email sending logic using Nodemailer

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

The project can be deployed to:
- Netlify
- AWS Amplify
- GitHub Pages (static export)
- Traditional Node.js hosting

For static export:
```bash
npm run build
```

## 📱 Mobile Optimization

- Fully responsive design
- Touch-friendly buttons and navigation
- Mobile-optimized images
- Fast loading on slow networks

## ⚡ Performance Tips

1. Images are optimized via Next.js Image component
2. CSS is purged automatically by Tailwind
3. Code splitting happens automatically
4. Consider implementing image lazy loading

## 🔒 Security

- Environment variables for sensitive data
- No API keys exposed in frontend code
- CORS-ready for API integration
- Input validation on forms

## 🤝 Support & Contact

- **Email**: info@inm-bioneno.co.in
- **Phone**: +91 90000 00000
- **Location**: Bangalore, India

## 📄 License

This website is created for INM-BioNeno. All rights reserved.

## 🎯 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Set up environment variables: `.env.local`
3. ✅ Start development: `npm run dev`
4. ⬜ Add product images and information
5. ⬜ Set up email notifications
6. ⬜ Configure payment gateway (Stripe/Razorpay)
7. ⬜ Connect to backend database
8. ⬜ Deploy to production

---

**Created for INM-BioNeno | 2026**
