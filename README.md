# PortfoliAI

A beautiful, modern web application for students to submit their portfolio building requests. Built with Next.js 14, TypeScript, and TailwindCSS with a dark, premium design aesthetic.

## Features

- **Modern Design**: Dark theme with glassmorphism, soft glows, and smooth animations
- **Three Pages**:
  - Landing page with hero, how it works, samples, pricing, and FAQ
  - Application form connected to Formspree
  - Success confirmation page
- **Form Submission**: Integrated with Formspree for email delivery (no backend needed)
- **Fully Responsive**: Mobile-first design that works on all devices
- **Accessible**: Proper labels, focus states, and semantic HTML
- **Production Ready**: Clean code, TypeScript, and optimized build

## Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Formspree** (form handling)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**

```bash
npm install
```

2. **Run the development server**

```bash
npm run dev
```

3. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

The app should now be running locally!

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
