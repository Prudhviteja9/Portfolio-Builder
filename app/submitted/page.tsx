import Link from 'next/link';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Confetti from '@/components/Confetti';
import AnimatedSection from '@/components/AnimatedSection';

export default function SubmittedPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <Confetti />

      {/* Celebration particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-green-400 rounded-full float opacity-60"></div>
        <div
          className="absolute top-1/3 right-1/4 w-2 h-2 bg-emerald-400 rounded-full float-slow opacity-60"
          style={{ animationDelay: '0.5s' }}
        ></div>
        <div
          className="absolute top-2/3 left-1/3 w-2.5 h-2.5 bg-green-500 rounded-full float opacity-60"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-2 h-2 bg-emerald-500 rounded-full float-slow opacity-60"
          style={{ animationDelay: '1.5s' }}
        ></div>
      </div>

      <div className="max-w-3xl mx-auto w-full relative z-10">
        <AnimatedSection animation="scale" className="text-center mb-12">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-500 mb-6 shadow-2xl shadow-green-500/40 float animate-pulse">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Request <span className="gradient-text-animated">received</span>!
          </h1>
          <p className="text-xl text-white/70">Your portfolio application has been successfully submitted.</p>
        </AnimatedSection>

        {/* Timeline */}
        <AnimatedSection animation="fade-up" delay={200} className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">What happens next</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card hover className="relative">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300 animate-pulse">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Confirmation email</h3>
                  <p className="text-white/70 text-sm">
                    Check your inbox for a confirmation email with your submission details and what to expect.
                  </p>
                </div>
              </div>
            </Card>

            <Card hover className="relative">
              <div className="space-y-4">
                <div
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300 animate-pulse"
                  style={{ animationDelay: '0.5s' }}
                >
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. We build your portfolio</h3>
                  <p className="text-white/70 text-sm">
                    Our team starts working on your custom portfolio, showcasing your projects and experience.
                  </p>
                </div>
              </div>
            </Card>

            <Card hover className="relative">
              <div className="space-y-4">
                <div
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300 animate-pulse"
                  style={{ animationDelay: '1s' }}
                >
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Delivery in 48 hours</h3>
                  <p className="text-white/70 text-sm">
                    You'll receive your complete, deployment-ready portfolio within 48 hours via email.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </AnimatedSection>

        {/* Next Steps Info */}
        <AnimatedSection animation="fade-up" delay={300}>
          <Card className="mb-8 bg-purple-500/10 border-purple-500/30">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Keep an eye on your inbox</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  We'll send you updates as we work on your portfolio. If we need any clarification about your projects or
                  experience, we'll reach out via email. Make sure to check your spam folder just in case!
                </p>
              </div>
            </div>
          </Card>
        </AnimatedSection>

        {/* Action Buttons */}
        <AnimatedSection animation="fade-up" delay={400} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary">
            Back to home
          </Button>
          <Button href="/apply" variant="secondary">
            Submit another application
          </Button>
        </AnimatedSection>

        {/* Support */}
        <div className="text-center mt-12">
          <p className="text-white/60 text-sm">
            Questions or concerns?{' '}
            <a
              href="mailto:yedlaprudhviteja9@gmail.com"
              className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
