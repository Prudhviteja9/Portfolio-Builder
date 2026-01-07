'use client';

import Link from 'next/link';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Step from '@/components/Step';
import ScrollProgress from '@/components/ScrollProgress';
import AnimatedSection from '@/components/AnimatedSection';
import TypewriterText from '@/components/TypewriterText';
import HeroPreview from '@/components/HeroPreview';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/50 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text-animated hover:scale-110 transition-transform">
            PortfoliAI
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#how" className="text-white/70 hover:text-white transition-all hover:scale-110">
              How it works
            </a>
          </div>

          <Button href="/apply" variant="primary" className="px-6 py-3">
            Apply now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-up">
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Get a recruiter-ready{' '}
                  <span className="gradient-text-animated">portfolio</span> built in 48 hours.
                </h1>

                <div className="text-2xl md:text-3xl font-semibold text-white/90">
                  For{' '}
                  <TypewriterText
                    words={['Data Analysts', 'Software Engineers', 'ML Engineers', 'Product Managers']}
                    className="gradient-text-animated"
                  />
                </div>

                <p className="text-xl text-white/70 leading-relaxed">
                  Skip the struggle. We build professional portfolios for students that showcase your projects, tell your
                  story, and land you interviews. Done-for-you service with fast delivery.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="/apply" variant="primary">
                    Apply in 2 minutes
                  </Button>
                  <Button href="#how" variant="secondary">
                    How it works
                  </Button>
                </div>

                {/* Trust badges */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    { icon: '⚡', text: '48h delivery' },
                    { icon: '🎨', text: 'Custom design' },
                    { icon: '📊', text: 'Role-focused' },
                    { icon: '✨', text: 'SEO optimized' },
                  ].map((badge, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group cursor-pointer"
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform">{badge.icon}</span>
                      <span className="text-sm font-medium">{badge.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Portfolio Preview */}
            <AnimatedSection animation="scale" delay={200} className="hidden lg:block">
              <HeroPreview />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple process, <span className="gradient-text-animated">professional results</span>
            </h2>
            <p className="text-xl text-white/70">Three steps from application to delivery</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-12">
            <AnimatedSection animation="fade-up" delay={100}>
              <Step
                number={1}
                title="Submit your details"
                description="Fill out the form with your resume, GitHub, LinkedIn, and target role. Takes 2 minutes."
              />
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <Step
                number={2}
                title="We build your site"
                description="Our team designs and develops a custom portfolio that highlights your best work and tells your story."
              />
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={300}>
              <Step
                number={3}
                title="Receive & deploy"
                description="Get your complete portfolio within 48 hours. Deploy instantly to Vercel or Netlify."
              />
            </AnimatedSection>
          </div>

          {/* CTA in How It Works */}
          <AnimatedSection animation="fade-up" delay={400} className="mt-12 text-center">
            <Button href="/apply" variant="primary">
              Start your portfolio →
            </Button>
          </AnimatedSection>
        </div>
      </section>


      {/* Final CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="scale">
            <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"></div>
              <div className="relative z-10 text-center space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Ready to <span className="gradient-text-animated">stand out</span>?
                </h2>
                <p className="text-xl text-white/70">
                  Join students who landed their dream roles with a professional portfolio.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="/apply" variant="primary" className="text-lg px-12 py-5">
                    Apply now - 2 min form
                  </Button>
                  <Button href="#how" variant="secondary" className="text-lg px-12 py-5">
                    Learn how it works
                  </Button>
                </div>
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pulse-glow"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pulse-glow"></div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold gradient-text-animated mb-4">PortfoliAI</div>
              <p className="text-white/60 text-sm">
                Professional portfolios built for students. Fast, beautiful, effective.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>
                  <a href="#how" className="hover:text-white transition-colors">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="/apply" className="hover:text-white transition-colors">
                    Apply
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-white/60 text-sm">
                Questions? Reach out at:
                <br />
                <a
                  href="mailto:yedlaprudhviteja9@gmail.com"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  yedlaprudhviteja9@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-white/50 text-sm">
            <p>&copy; 2025 PortfoliAI. Built to help students shine.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
