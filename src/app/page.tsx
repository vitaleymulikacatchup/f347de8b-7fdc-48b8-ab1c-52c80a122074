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
import { Sparkles, Zap, Crown, Star, Lightbulb, Users, Target, CheckCircle } from "lucide-react";

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
          brandName="InnovateAI"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917343062-seftrhvr.jpg"
          logoAlt="InnovateAI Logo"
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
          logoText="INNOVATE AI"
          description="Revolutionary AI-powered platform that transforms how businesses operate. Automate processes, gain insights, and scale effortlessly with intelligent solutions."
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
              imageAlt: "AI dashboard interface"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917344605-yq6c3jai.jpg",
              imageAlt: "Machine learning visualization"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917345423-qrd7xgls.jpg",
              imageAlt: "AI automation workflow"
            }
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
        />
      </div>
      
      <div id="about" data-section="about">
        <TagAbout
          tag="Our Vision"
          description="At InnovateAI, we believe artificial intelligence should amplify human potential, not replace it. Our cutting-edge platform democratizes AI, making it accessible to businesses of all sizes. We're building the future where intelligent automation drives exponential growth."
        />
      </div>
      
      <div id="features" data-section="features">
        <FeatureCardNine
          title="Intelligent Features"
          description="AI-powered tools that adapt to your business"
          tag="Core Capabilities"
          features={[
            {
              id: 1,
              title: "Smart Automation Engine",
              description: "Advanced AI algorithms that learn your workflows and automate repetitive tasks with precision and reliability.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917346326-9xyysbnm.jpg"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917346999-5zko74sc.jpg"
              }
            },
            {
              id: 2,
              title: "Predictive Analytics",
              description: "Harness the power of machine learning to forecast trends, predict outcomes, and make data-driven decisions with confidence.",
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
              text: "Explore AI Features",
              href: "pricing"
            }
          ]}
        />
      </div>
      
      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="AI-Powered Plans"
          description="Choose your intelligence level. Our Pro plan offers the perfect balance of advanced AI capabilities and value for growing teams."
          tag="Pricing"
          plans={[
            {
              id: "basic",
              badge: "Basic AI",
              price: "$49/month",
              subtitle: "Essential AI tools for small teams",
              badgeIcon: Lightbulb,
              buttons: [
                {
                  text: "Start Basic",
                  href: "contact"
                }
              ],
              features: [
                "5 AI automation workflows",
                "Basic predictive analytics",
                "Standard support",
                "10GB AI model storage"
              ]
            },
            {
              id: "pro",
              badge: "Pro AI - Recommended",
              price: "$149/month",
              subtitle: "Advanced intelligence for growing businesses",
              badgeIcon: Star,
              buttons: [
                {
                  text: "Start Pro Trial",
                  href: "contact"
                }
              ],
              features: [
                "Unlimited AI workflows",
                "Advanced ML analytics",
                "Priority AI support",
                "100GB model storage",
                "Custom AI training",
                "Multi-team collaboration"
              ]
            },
            {
              id: "enterprise",
              badge: "Enterprise AI",
              price: "Custom",
              subtitle: "Enterprise-scale artificial intelligence",
              badgeIcon: Crown,
              buttons: [
                {
                  text: "Contact AI Experts",
                  href: "contact"
                }
              ],
              features: [
                "Everything in Pro AI",
                "Custom AI model development",
                "Dedicated AI specialists",
                "Unlimited storage",
                "Advanced security & compliance",
                "White-label solutions"
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>
      
      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by AI Innovators"
          description="Leading companies worldwide trust InnovateAI to power their intelligent transformation"
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
          title="AI Success Stories"
          description="Discover how InnovateAI has revolutionized businesses with intelligent automation"
          tag="Customer Stories"
          testimonials={[
            {
              id: "1",
              name: "Dr. Sarah Chen",
              role: "Chief Technology Officer",
              company: "TechVision Labs",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917349152-0wqk4e71.jpg",
              imageAlt: "Dr. Sarah Chen"
            },
            {
              id: "2",
              name: "Marcus Thompson",
              role: "AI Strategy Director",
              company: "FutureScale Inc",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917349732-qbke6hzq.jpg",
              imageAlt: "Marcus Thompson"
            },
            {
              id: "3",
              name: "Elena Rodriguez",
              role: "VP of Innovation",
              company: "SmartSystems Corp",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917350427-z7vbdfn8.png",
              imageAlt: "Elena Rodriguez"
            },
            {
              id: "4",
              name: "James Wilson",
              role: "Founder & CEO",
              company: "AI Dynamics",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917350948-c7mf73va.jpg",
              imageAlt: "James Wilson"
            }
          ]}
          textboxLayout="default"
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqDouble
          title="AI Questions Answered"
          description="Everything you need to know about our AI platform, from setup to advanced capabilities"
          tag="AI Support"
          faqs={[
            {
              id: "1",
              title: "How does the AI learning process work?",
              content: "Our AI platform uses advanced machine learning algorithms to analyze your data and workflows. It continuously learns and adapts to your business patterns, becoming more intelligent over time. The initial setup takes just minutes, and you'll see improvements within the first week."
            },
            {
              id: "2",
              title: "Is my data safe with AI processing?",
              content: "Absolutely. We use enterprise-grade encryption and follow strict data privacy protocols. Your data is processed securely within isolated environments and never shared with third parties. We comply with GDPR, CCPA, and maintain SOC 2 Type II certification."
            },
            {
              id: "3",
              title: "Can I customize the AI models?",
              content: "Yes, our Pro and Enterprise plans allow you to train custom AI models specific to your business needs. Our AI experts can help you develop tailored solutions that integrate seamlessly with your existing workflows and systems."
            },
            {
              id: "4",
              title: "What kind of ROI can I expect?",
              content: "Our customers typically see 3-5x ROI within the first year through automation savings, improved efficiency, and better decision-making. The exact ROI depends on your use case, but our AI specialists can provide a customized ROI analysis during your trial."
            },
            {
              id: "5",
              title: "Do you provide AI training and support?",
              content: "Yes, all plans include comprehensive AI training resources, documentation, and support. Pro and Enterprise customers get dedicated AI specialists, custom training sessions, and priority support to ensure successful implementation."
            },
            {
              id: "6",
              title: "Can I integrate with existing tools?",
              content: "Our AI platform integrates with 1000+ business tools and platforms through APIs and pre-built connectors. Whether you use CRM, ERP, analytics, or communication tools, we can connect and enhance them with intelligent capabilities."
            }
          ]}
          animationType="smooth"
          textboxLayout="default"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Transform with AI?"
          description="Join the intelligence revolution. Start your AI journey today and discover how artificial intelligence can accelerate your business growth."
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
            placeholder: "Tell us about your AI goals...",
            rows: 5,
            required: false
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917351664-b4umte8t.jpg"
          imageAlt="AI specialists team"
          mediaPosition="right"
          buttonText="Start AI Trial"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          logoText="InnovateAI"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763917343062-seftrhvr.jpg"
          copyrightText="© 2025 InnovateAI. All rights reserved."
          columns={[
            {
              title: "AI Platform",
              items: [
                {
                  label: "AI Features",
                  href: "features"
                },
                {
                  label: "Pricing",
                  href: "pricing"
                },
                {
                  label: "AI Security",
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
                  label: "About AI",
                  href: "about"
                },
                {
                  label: "AI Blog",
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
                  label: "AI Documentation",
                  href: "#"
                },
                {
                  label: "API Reference",
                  href: "#"
                },
                {
                  label: "AI Support",
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