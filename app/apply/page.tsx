'use client';

import { useState } from 'react';
import Link from 'next/link';
import Card from '@/components/Card';
import Field from '@/components/Field';
import Button from '@/components/Button';
import ScrollProgress from '@/components/ScrollProgress';
import AnimatedSection from '@/components/AnimatedSection';

export default function ApplyPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [targetRole, setTargetRole] = useState('');
  const [customRole, setCustomRole] = useState('');
  const [resumeLink, setResumeLink] = useState('');
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateUrl = (url: string, fieldName: string): boolean => {
    if (!url) return true; // Optional fields
    try {
      new URL(url);
      return true;
    } catch {
      setErrors((prev) => ({ ...prev, [fieldName]: 'Please enter a valid URL' }));
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    setErrors({});
    let isValid = true;

    // Validate URLs
    if (resumeLink && !validateUrl(resumeLink, 'resumeLink')) isValid = false;
    if (github && !validateUrl(github, 'github')) isValid = false;
    if (linkedin && !validateUrl(linkedin, 'linkedin')) isValid = false;

    if (isValid) {
      setIsSubmitting(true);
    } else {
      e.preventDefault();
    }
  };

  return (
    <main className="min-h-screen">
      <ScrollProgress />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text-animated hover:scale-110 transition-transform">
            PortfoliAI
          </Link>
          <Link
            href="/"
            className="text-white/70 hover:text-white transition-all flex items-center gap-2 group"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to home
          </Link>
        </div>
      </nav>

      {/* Application Form */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Apply for your <span className="gradient-text-animated">portfolio</span>
            </h1>
            <p className="text-xl text-white/70">
              Fill out this quick form and we'll get started on your professional portfolio.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 animate-pulse">
              <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm font-medium text-purple-300">Delivery target: within 48 hours</span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <Card>
              <form
                action="https://formspree.io/f/xlgdqepk"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Hidden fields for Formspree */}
                <input type="hidden" name="_redirect" value="http://localhost:3000/submitted" />
                <input type="hidden" name="_subject" value="New Portfolio Request — PortfoliAI" />

                {/* Full Name */}
                <Field label="Full Name" name="fullName" type="text" required placeholder="John Doe" />

                {/* Email */}
                <Field label="Email Address" name="email" type="email" required placeholder="john@example.com" />

                {/* Target Role */}
                <Field
                  label="Target Role"
                  name={targetRole === 'Other' ? '_roleType' : 'targetRole'}
                  type="select"
                  required
                  value={targetRole}
                  onChange={(e) => setTargetRole(e.target.value)}
                  options={['Data Analyst', 'Software Engineer', 'Machine Learning Engineer', 'Other (please specify)']}
                />

                {/* Custom Role Field */}
                {targetRole === 'Other (please specify)' && (
                  <Field
                    label="Please specify your target role"
                    name="targetRole"
                    type="text"
                    required
                    placeholder="e.g., Product Manager, UX Designer, etc."
                    value={customRole}
                    onChange={(e) => setCustomRole(e.target.value)}
                  />
                )}

                {/* GitHub URL */}
                <div>
                  <Field
                    label="GitHub Profile URL"
                    name="github"
                    type="url"
                    required
                    placeholder="https://github.com/yourusername"
                    note="Required - helps us showcase your best projects"
                    value={github}
                    onChange={(e) => {
                      setGithub(e.target.value);
                      if (errors.github) {
                        const newErrors = { ...errors };
                        delete newErrors.github;
                        setErrors(newErrors);
                      }
                    }}
                  />
                  {errors.github && <p className="text-sm text-red-400 mt-2">{errors.github}</p>}
                </div>

                {/* LinkedIn URL */}
                <div>
                  <Field
                    label="LinkedIn Profile URL"
                    name="linkedin"
                    type="url"
                    placeholder="https://linkedin.com/in/yourprofile"
                    note="Optional - we'll use this for your professional summary"
                    value={linkedin}
                    onChange={(e) => {
                      setLinkedin(e.target.value);
                      if (errors.linkedin) {
                        const newErrors = { ...errors };
                        delete newErrors.linkedin;
                        setErrors(newErrors);
                      }
                    }}
                  />
                  {errors.linkedin && <p className="text-sm text-red-400 mt-2">{errors.linkedin}</p>}
                </div>

                {/* Resume Link */}
                <div>
                  <Field
                    label="Resume Link (Google Drive, Dropbox, etc.)"
                    name="resumeLink"
                    type="url"
                    required
                    placeholder="https://drive.google.com/file/d/..."
                    note="Share a public link to your resume PDF. Make sure the link is accessible to anyone with the link."
                    value={resumeLink}
                    onChange={(e) => {
                      setResumeLink(e.target.value);
                      if (errors.resumeLink) {
                        const newErrors = { ...errors };
                        delete newErrors.resumeLink;
                        setErrors(newErrors);
                      }
                    }}
                  />
                  {errors.resumeLink && <p className="text-sm text-red-400 mt-2">{errors.resumeLink}</p>}
                </div>

                {/* Alternative: Email Resume */}
                <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div className="text-sm text-white/80">
                      <strong className="text-blue-300">Alternative:</strong> Don't have a shareable link? You can email
                      your resume to{' '}
                      <a
                        href="mailto:yedlaprudhviteja9@gmail.com"
                        className="text-blue-400 hover:text-blue-300 underline"
                      >
                        yedlaprudhviteja9@gmail.com
                      </a>{' '}
                      with your name in the subject line after submitting this form.
                    </div>
                  </div>
                </div>

                {/* Job Links */}
                <Field
                  label="Job Links (Optional)"
                  name="jobLinks"
                  type="textarea"
                  placeholder="Paste links to jobs you're applying to (one per line). This helps us tailor your portfolio to match the roles."
                />

                {/* Privacy Note */}
                <div className="pt-4 pb-2">
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                    <svg
                      className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    <div className="text-sm text-white/80">
                      <strong className="text-purple-300">Privacy guaranteed:</strong> We only use your information to
                      build your portfolio. We never share your data with third parties. You own 100% of the final product.
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full text-lg relative overflow-hidden group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      'Submit Application'
                    )}
                  </Button>
                  <p className="text-center text-sm text-white/50 mt-4">
                    By submitting, you agree to receive email updates about your portfolio delivery.
                  </p>
                </div>
              </form>
            </Card>
          </AnimatedSection>

          {/* What happens next */}
          <AnimatedSection animation="fade-up" delay={200} className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">What happens next?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: '1',
                  title: 'Confirmation',
                  desc: "You'll receive an email confirming we got your request.",
                  icon: (
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                },
                {
                  step: '2',
                  title: 'We build',
                  desc: 'Our team starts designing your custom portfolio right away.',
                  icon: (
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  ),
                },
                {
                  step: '3',
                  title: 'Delivery',
                  desc: "Within 48 hours, you'll get your complete portfolio ready to deploy.",
                  icon: (
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                },
              ].map((item) => (
                <Card key={item.step} hover>
                  <div className="text-center space-y-3">
                    <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/30">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-white/70">{item.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-white/50 text-sm">
          <p>
            &copy; 2025 PortfoliAI. Questions? Email{' '}
            <a href="mailto:yedlaprudhviteja9@gmail.com" className="text-purple-400 hover:text-purple-300">
              yedlaprudhviteja9@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
