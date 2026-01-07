# PortfoliAI - Portfolio Builder

![Portfolio Builder](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

A stunning, modern web application that helps students get recruiter-ready portfolios built in 48 hours. This is the landing page and application platform for PortfoliAI's done-for-you portfolio building service.

## 🎯 Overview

PortfoliAI is a premium portfolio-as-a-service platform designed for:
- **Data Analysts**
- **Software Engineers**
- **ML Engineers**
- **Product Managers**

Students submit their information through an elegant application form, and our team builds professional portfolios that showcase projects, tell their story, and help them land interviews.

## ✨ Features

### Design & UX
- **Premium Dark Aesthetic**: Modern glassmorphism with soft glows and smooth animations
- **Fully Responsive**: Mobile-first design optimized for all devices
- **Smooth Animations**: Fade-up sections, typewriter effects, scroll progress tracking
- **Galaxy Background**: Eye-catching animated background on hero section
- **Confetti Effects**: Celebration animation on successful form submission

### Functionality
- **Landing Page**: Hero section, how-it-works guide, portfolio samples, pricing, and FAQ
- **Application Form**: Multi-step form for portfolio requests with file uploads
- **Form Handling**: Integrated with Formspree (no backend required)
- **Success Page**: Confirmation view after successful submission
- **Accessibility**: Proper labels, focus states, and semantic HTML

### Technical
- **Production Ready**: Clean, maintainable TypeScript code
- **Type Safe**: Full TypeScript support throughout
- **Optimized**: Automatic image optimization and code splitting
- **SEO Friendly**: Proper meta tags and semantic markup

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type-safe JavaScript |
| **TailwindCSS** | Utility-first CSS framework |
| **PostCSS** | CSS transformations |
| **React 18** | UI library |
| **Formspree** | Form submission handling |

## 📁 Project Structure

```
Portfolio-Builder/
├── app/                           # Next.js app directory
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Landing/home page
│   ├── globals.css               # Global styles
│   ├── apply/
│   │   └── page.tsx              # Application form page
│   └── submitted/
│       └── page.tsx              # Success confirmation page
├── components/                    # Reusable React components
│   ├── AnimatedSection.tsx       # Fade-up animation wrapper
│   ├── Button.tsx                # Custom button component
│   ├── Card.tsx                  # Card component for content
│   ├── Accordion.tsx             # Expandable FAQ sections
│   ├── Tabs.tsx                  # Tabbed content
│   ├── TypewriterText.tsx        # Typewriter animation
│   ├── GalaxyBackground.tsx      # Animated background
│   ├── HeroPreview.tsx           # Hero section preview
│   ├── PortfolioPreview.tsx      # Portfolio samples
│   ├── UploadDropzone.tsx        # File upload component
│   ├── BeforeAfter.tsx           # Before/after comparison
│   ├── ScrollProgress.tsx        # Progress bar
│   ├── Step.tsx                  # Step indicator
│   ├── Confetti.tsx              # Celebration effect
│   └── Field.tsx                 # Form field component
├── public/                        # Static assets
├── tailwind.config.ts            # TailwindCSS configuration
├── tsconfig.json                 # TypeScript configuration
├── next.config.mjs               # Next.js configuration
├── postcss.config.mjs            # PostCSS configuration
└── package.json                  # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 18.17 or higher
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Prudhviteja9/Portfolio-Builder.git
cd Portfolio-Builder
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables** (if needed)

Create a `.env.local` file for any environment-specific settings.

4. **Run development server**

```bash
npm run dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

The application should now be running with hot-reload enabled!

## 📦 Available Scripts

```bash
# Development server with hot-reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 🎨 Design Highlights

- **Color Scheme**: Dark theme with purple accents and white text
- **Typography**: Large, bold headers with smooth scroll effects
- **Animations**: 
  - Fade-up animations on sections
  - Typewriter effect for dynamic text
  - Scroll progress tracking
  - Confetti celebration on form success
- **Components**: Reusable, modular components with consistent styling

## 🔧 Configuration

### TailwindCSS
Custom Tailwind configuration for extended theme colors and animations.

### TypeScript
Strict type-checking enabled for better code quality.

### Next.js
Configured with App Router for modern React patterns and automatic optimizations.

## 📝 Form Handling

The application form uses **Formspree** for email delivery:
1. User fills out the application form
2. Form data is submitted to Formspree endpoint
3. Email notification sent to the business
4. User sees success confirmation page

## 🌐 Deployment

### Deploy to Vercel

This project is optimized for deployment on [Vercel](https://vercel.com).

1. **Push to GitHub**

```bash
git add .
git commit -m "Deploy to Vercel"
git push origin main
```

2. **Connect to Vercel**

- Go to [vercel.com](https://vercel.com)
- Click "Add New..." → "Project"
- Select your GitHub repository
- Click "Import"

3. **Configure Build Settings**

- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`

4. **Deploy**

Vercel will automatically build and deploy your project. You'll get a production URL immediately!

## 📊 Performance

- **Optimized Build**: Automatic code splitting and lazy loading
- **Image Optimization**: Next.js automatic image optimization
- **CSS**: TailwindCSS purge unused styles
- **Type Safety**: TypeScript catches errors at build time

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Prudhvi Teja**
- GitHub: [@Prudhviteja9](https://github.com/Prudhviteja9)
- Project: [Portfolio-Builder](https://github.com/Prudhviteja9/Portfolio-Builder)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- TailwindCSS for the utility-first CSS framework
- Vercel for seamless deployment platform

## Formspree Configuration

### For Local Development

The form is currently configured with the endpoint: `https://formspree.io/f/xlgdqepk`

The redirect URL is set to: `http://localhost:3000/submitted`

### Important: Update Before Deployment

Before deploying to production, you MUST update the redirect URL in `/app/apply/page.tsx`:

**File location**: `app/apply/page.tsx`

**Line to change** (around line 43):
```tsx
<input type="hidden" name="_redirect" value="http://localhost:3000/submitted" />
```

**Change to your production URL**:
```tsx
<input type="hidden" name="_redirect" value="https://your-domain.com/submitted" />
```

### Replace Formspree Endpoint (Optional)

If you want to use your own Formspree account:

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form
3. Copy your form endpoint (format: `https://formspree.io/f/YOUR_FORM_ID`)
4. Update the form action in `app/apply/page.tsx` (around line 40):

```tsx
<form
  action="https://formspree.io/f/YOUR_FORM_ID"  // Replace with your endpoint
  method="POST"
  encType="multipart/form-data"
  ...
>
```

## Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Deploy to Vercel**

- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Vercel will auto-detect Next.js and configure everything
- Click "Deploy"

3. **After Deployment**

**CRITICAL**: Update the `_redirect` URL in `app/apply/page.tsx` with your production domain:

```tsx
<input type="hidden" name="_redirect" value="https://your-actual-domain.vercel.app/submitted" />
```

Then commit and push the change - Vercel will automatically redeploy.

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy to Netlify:
- Drag and drop the `.next` folder, or
- Connect your GitHub repo and set build command to `npm run build`

3. Update the redirect URL as mentioned above.

## Project Structure

```
portfoliai/
├── app/
│   ├── apply/
│   │   └── page.tsx          # Application form page
│   ├── submitted/
│   │   └── page.tsx          # Success confirmation page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Landing page
├── components/
│   ├── Button.tsx            # Reusable button component
│   ├── Card.tsx              # Glassmorphism card component
│   ├── Field.tsx             # Form field component
│   └── Step.tsx              # Step indicator component
├── public/                   # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Form Fields

The application form collects:

- **Full Name** (required)
- **Email** (required)
- **Target Role** (required) - Data Analyst / Software Engineer / ML Engineer / Other (custom input)
- **GitHub URL** (required) - Mandatory to showcase projects
- **LinkedIn URL** (optional)
- **Resume Link** (required) - Google Drive, Dropbox, or other shareable link to resume PDF
- **Job Links** (optional) - Text area for job applications

All data is sent via Formspree to your configured email address.

**Note on Target Role:** Users can select from predefined roles or choose "Other (please specify)" to enter a custom role like Product Manager, UX Designer, etc.

**Note on Resume Submission:** Since Formspree's free tier doesn't support file uploads, users provide a shareable link to their resume (Google Drive, Dropbox, etc.). An alternative option is provided for users to email their resume directly to yedlaprudhviteja9@gmail.com.

## Customization

### Update Branding

- Logo and brand name: Update in `app/page.tsx` and `app/layout.tsx`
- Colors: Modify the gradient classes in Tailwind (e.g., `from-purple-600 to-blue-600`)
- Pricing: Update the pricing section in `app/page.tsx` (around line 195)

### Update Content

- **FAQ**: Edit the FAQ section in `app/page.tsx` (around line 250)
- **Samples**: Modify sample portfolio cards in `app/page.tsx` (around line 170)
- **Trust Badges**: Update badges in `app/page.tsx` (around line 85)

## Architecture Notes

This is a **frontend-only application**:

- No database required
- No authentication system
- No backend API routes
- All form handling is done via Formspree
- Static generation for optimal performance

This architecture keeps hosting costs at zero and makes deployment extremely simple.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Support

For questions or issues:
- Email: yedlaprudhviteja9@gmail.com
- Or create an issue in the GitHub repository

## License

MIT License - feel free to use this for your own projects!

---

**Built with Next.js, TypeScript, and TailwindCSS**
