"use client";

import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Sparkles, Zap, Crown, Shield, Database } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="large"
      sizing="large"
      background="animatedAurora"
      cardStyle="layered-gradient"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="SaaS Plus"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917343062-seftrhvr.jpg"
          logoAlt="SaaS Plus Logo"
          button={{
            text: "Get Started",
            href: "contact"
          }}
          className="bg-transparent"
          buttonClassName="hover:scale-105"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="SAAS PLUS"
          description="Powerful software solutions designed to scale your business. Streamline workflows, boost productivity, and achieve your goals faster."
          buttons={[
            {
              text: "Start Free Trial",
              href: "pricing"
            },
            {
              text: "Watch Demo",
              href: "https://www.youtube.com"
            }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917343801-avar063w.jpg",
              imageAlt: "Modern office workspace"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917344605-yq6c3jai.jpg",
              imageAlt: "Business team collaboration"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917345423-qrd7xgls.jpg",
              imageAlt: "Cloud infrastructure"
            }
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
        />
      </div>
      
      <div id="about" data-section="about">
        <TagAbout
          tag="Our Mission"
          description="We empower businesses worldwide with intelligent software solutions. Our platform transforms how teams work, collaborate, and innovate. Built on trust, transparency, and relentless innovation."
        />
      </div>
      
      <div id="features" data-section="features">
        <FeatureCardNine
          title="Powerful Features"
          description="Everything you need to drive success"
          tag="Why Choose Us"
          features={[
            {
              id: 1,
              title: "Real-time Analytics",
              description: "Track your metrics in real-time with comprehensive dashboards that give you actionable insights instantly.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917346326-9xyysbnm.jpg"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917346999-5zko74sc.jpg"
              }
            },
            {
              id: 2,
              title: "Seamless Integration",
              description: "Connect with your favorite tools and platforms effortlessly. Our API integrates with 500+ applications.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917348005-oogx1ip9.jpg"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917348671-ltmnktug.jpg"
              }
            },
            {
              id: 3,
              title: "Enterprise Security",
              description: "Bank-level security with end-to-end encryption, compliance certifications, and advanced access controls.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917346326-9xyysbnm.jpg"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917346999-5zko74sc.jpg"
              }
            },
            {
              id: 4,
              title: "Smart Automation",
              description: "Automate repetitive tasks and workflows with AI-powered automation that learns and adapts to your business.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917348005-oogx1ip9.jpg"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917348671-ltmnktug.jpg"
              }
            }
          ]}
          showStepNumbers={true}
          textboxLayout="default"
          buttons={[
            {
              text: "Explore Features",
              href: "pricing"
            }
          ]}
        />
      </div>
      
      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Simple, Transparent Pricing"
          description="Choose the plan that fits your business needs. Scale up or down anytime."
          tag="Pricing"
          plans={[
            {
              id: "starter",
              badge: "Starter",
              price: "$29/month",
              subtitle: "Perfect for getting started",
              badgeIcon: Sparkles,
              buttons: [
                {
                  text: "Get Started",
                  href: "contact"
                }
              ],
              features: [
                "Up to 5 projects",
                "Basic analytics",
                "Email support",
                "1GB storage"
              ]
            },
            {
              id: "professional",
              badge: "Professional",
              price: "$79/month",
              subtitle: "Best for growing teams",
              badgeIcon: Zap,
              buttons: [
                {
                  text: "Start Free Trial",
                  href: "contact"
                }
              ],
              features: [
                "Unlimited projects",
                "Advanced analytics",
                "Priority support",
                "50GB storage",
                "Team collaboration tools"
              ]
            },
            {
              id: "enterprise",
              badge: "Enterprise",
              price: "Custom",
              subtitle: "For large organizations",
              badgeIcon: Crown,
              buttons: [
                {
                  text: "Contact Sales",
                  href: "contact"
                }
              ],
              features: [
                "Everything in Professional",
                "Custom integrations",
                "Dedicated support",
                "Unlimited storage",
                "Advanced security",
                "SLA guarantee"
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>
      
      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join thousands of companies that rely on SaaS Plus to drive their business forward"
          tag="Partners"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917352516-4jnt8wty.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917353178-vq12vyii.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917353828-p1tzp6gc.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917354548-1dtnniy9.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917355278-h22k5r9u.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917355804-9upp7b59.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917356351-ud73amro.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917356910-j2nedu28.jpg"
          ]}
          showCard={true}
          speed={40}
          textboxLayout="default"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="What Our Customers Say"
          description="Real stories from real users who've transformed their business with SaaS Plus"
          tag="Testimonials"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              company: "TechCorp Inc",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917349152-0wqk4e71.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "CTO",
              company: "InnovateLab",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917349732-qbke6hzq.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Product Director",
              company: "GrowthCo",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917350427-z7vbdfn8.png",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Park",
              role: "Founder",
              company: "StartupXYZ",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917350948-c7mf73va.jpg",
              imageAlt: "David Park"
            }
          ]}
          textboxLayout="default"
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our platform, pricing, and support"
          tag="Help Center"
          faqs={[
            {
              id: "1",
              title: "How does the free trial work?",
              content: "Start your free trial today with full access to all Professional features. No credit card required. Trial lasts 14 days and you can cancel anytime."
            },
            {
              id: "2",
              title: "Can I change my plan anytime?",
              content: "Yes, you can upgrade or downgrade your plan anytime. Changes take effect immediately, and we prorate charges fairly based on your usage."
            },
            {
              id: "3",
              title: "What payment methods do you accept?",
              content: "We accept all major credit cards, PayPal, and bank transfers for Enterprise customers. All payments are processed securely."
            },
            {
              id: "4",
              title: "Is my data secure?",
              content: "Absolutely. We use enterprise-grade encryption, regular security audits, and comply with GDPR, CCPA, and SOC 2 Type II standards."
            },
            {
              id: "5",
              title: "Do you offer customer support?",
              content: "Yes, all plans include email support. Professional and Enterprise plans get priority support and dedicated account managers."
            },
            {
              id: "6",
              title: "Can I export my data?",
              content: "Yes, you can export all your data anytime in multiple formats including CSV, JSON, and PDF for compliance and backup purposes."
            }
          ]}
          animationType="smooth"
          textboxLayout="default"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Get Started?"
          description="Join thousands of successful companies. Start your free trial today and experience the difference SaaS Plus can make."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "work@company.com",
              required: true
            },
            {
              name: "company",
              type: "text",
              placeholder: "Company Name",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your needs...",
            rows: 5,
            required: false
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917351664-b4umte8t.jpg"
          imageAlt="Customer success team"
          mediaPosition="right"
          buttonText="Start Free Trial"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          logoText="SaaS Plus"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917343062-seftrhvr.jpg"
          copyrightText="© 2025 SaaS Plus. All rights reserved."
          columns={[
            {
              title: "Product",
              items: [
                {
                  label: "Features",
                  href: "features"
                },
                {
                  label: "Pricing",
                  href: "pricing"
                },
                {
                  label: "Security",
                  href: "#"
                },
                {
                  label: "Integrations",
                  href: "#"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Blog",
                  href: "#"
                },
                {
                  label: "Careers",
                  href: "#"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              title: "Resources",
              items: [
                {
                  label: "Documentation",
                  href: "#"
                },
                {
                  label: "API Reference",
                  href: "#"
                },
                {
                  label: "Support",
                  href: "#"
                },
                {
                  label: "FAQ",
                  href: "faq"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}