"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from "@/components/navbar/NavbarStyleMinimal";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import TagAbout from "@/components/sections/about/TagAbout";
import FeatureCardThree from "@/components/sections/feature/featureCardThree/FeatureCardThree";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import PricingCardThree from "@/components/sections/pricing/PricingCardThree";
import MetricCardThree from "@/components/sections/metrics/MetricCardThree";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterSocial from "@/components/sections/footer/FooterSocial";
import { DollarSign, Linkedin, Mail, MessageCircle, Package, Quote, Shield, Sparkles, Star, TrendingUp, Twitter, Users, Award, Globe, Building } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="large"
      sizing="medium"
      background="gradientBars"
      cardStyle="gradient-bordered"
      primaryButtonStyle="flat"
      secondaryButtonStyle="outline"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="PharmaXcel"
          button={{
            text: "Order Now",
            href: "https://example.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="The World's Most Premium Quaaludes"
          description="Pharmaceutical excellence meets uncompromising quality. Our premium formulations represent the pinnacle of pharmaceutical manufacturing standards."
          tag="Premium Pharmaceuticals"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Order Now",
              href: "https://example.com"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763492968847-mgcvtveu.jpg"
          imageAlt="Premium pharmaceutical laboratory"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Why Choose Us"
          description="At PharmaXcel, we represent the pinnacle of pharmaceutical excellence. Our commitment to quality, purity, and pharmaceutical innovation sets us apart in delivering the world's most premium quaaludes. Every product undergoes rigorous testing and quality assurance to meet the highest medical standards."
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="Our Excellence Standards"
          description="Discover what makes our pharmaceutical products the premium choice"
          tag="Quality Assurance"
          tagIcon={Shield}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          features={[
            {
              id: "01",
              title: "Premium Quality Control",
              description: "Our state-of-the-art laboratory facilities ensure every product meets the highest pharmaceutical standards through rigorous testing protocols.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763492970222-iqp92dyl.jpg",
              imageAlt: "Quality control laboratory"
            },
            {
              id: "02",
              title: "Advanced Research",
              description: "Cutting-edge research and development processes guarantee optimal formulation effectiveness and pharmaceutical excellence.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763492970816-olpq9296.jpg",
              imageAlt: "Medical research facility"
            },
            {
              id: "03",
              title: "Safety First",
              description: "Comprehensive safety testing and compliance with international pharmaceutical regulations ensure product reliability and user confidence.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763492971562-7wbv1zqu.jpg",
              imageAlt: "Safety testing laboratory"
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Premium Product Line"
          description="Explore our carefully curated selection of premium pharmaceutical products"
          tag="Products"
          tagIcon={Package}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          products={[
            {
              id: "premium-series",
              name: "Premium Series Quaaludes",
              price: "$299",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763492972582-w8j8te20.jpg",
              imageAlt: "Premium pharmaceutical products"
            },
            {
              id: "standard-series",
              name: "Standard Series",
              price: "$199",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763492973230-qv9l7fx6.jpg",
              imageAlt: "Standard pharmaceutical products"
            },
            {
              id: "luxury-series",
              name: "Luxury Collection",
              price: "$499",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763492973884-6zn2eu6b.jpg",
              imageAlt: "Luxury pharmaceutical collection"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Choose Your Plan"
          description="Select the perfect pharmaceutical plan for your needs"
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "starter",
              price: "$199/month",
              name: "Starter Plan",
              buttons: [
                {
                  text: "Get Started",
                  href: "https://example.com"
                },
                {
                  text: "Contact Sales",
                  href: "contact"
                }
              ],
              features: [
                "Monthly pharmaceutical supply",
                "Quality assurance guarantee",
                "Basic customer support",
                "Standard shipping included"
              ]
            },
            {
              id: "professional",
              badge: "Most Popular Plan",
              badgeIcon: Star,
              price: "$299/month",
              name: "Professional Plan",
              buttons: [
                {
                  text: "Get Started",
                  href: "https://example.com"
                },
                {
                  text: "Contact Sales",
                  href: "contact"
                }
              ],
              features: [
                "Premium pharmaceutical supply",
                "Advanced quality testing",
                "Priority customer support",
                "Express shipping included",
                "Medical consultation access"
              ]
            },
            {
              id: "enterprise",
              price: "$499/month",
              name: "Enterprise Plan",
              buttons: [
                {
                  text: "Get Started",
                  href: "https://example.com"
                },
                {
                  text: "Contact Sales",
                  href: "contact"
                }
              ],
              features: [
                "Luxury pharmaceutical collection",
                "Comprehensive testing protocols",
                "24/7 dedicated support",
                "Same-day shipping",
                "Personal medical advisor",
                "Custom formulations available"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Our Impact in Numbers"
          description="Measurable results that demonstrate our pharmaceutical excellence"
          tag="Achievements"
          tagIcon={TrendingUp}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          metrics={[
            {
              id: "1",
              icon: Users,
              title: "Satisfied Customers",
              value: "50,000+"
            },
            {
              id: "2",
              icon: Award,
              title: "Quality Certifications",
              value: "15+"
            },
            {
              id: "3",
              icon: Globe,
              title: "Countries Served",
              value: "25+"
            },
            {
              id: "4",
              icon: Shield,
              title: "Safety Record",
              value: "99.9%"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Medical Professionals Say"
          description="Trusted by healthcare professionals worldwide"
          tag="Testimonials"
          tagIcon={Quote}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Dr. Sarah Mitchell",
              role: "Chief Medical Officer",
              testimonial: "The quality and consistency of PharmaXcel's products are unmatched in the pharmaceutical industry. Their commitment to excellence shows in every formulation.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763492974565-bmx2otuv.jpg",
              imageAlt: "Dr. Sarah Mitchell"
            },
            {
              id: "2",
              name: "Dr. Michael Chen",
              role: "Senior Pharmacologist",
              testimonial: "After 20 years in pharmaceutical research, I can confidently say PharmaXcel represents the gold standard in premium medication manufacturing.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763492975341-shkah7tb.png",
              imageAlt: "Dr. Michael Chen"
            },
            {
              id: "3",
              name: "Dr. Emily Rodriguez",
              role: "Hospital Pharmacy Director",
              testimonial: "The reliability and efficacy of PharmaXcel's products have made them our preferred pharmaceutical partner for specialized medications.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763492976323-e54vd3gm.jpg",
              imageAlt: "Dr. Emily Rodriguez"
            },
            {
              id: "4",
              name: "Dr. James Wilson",
              role: "Pharmaceutical Researcher",
              testimonial: "PharmaXcel's innovative approach to pharmaceutical development and their rigorous quality standards set them apart from competitors.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763492977133-3ghlnixs.jpg",
              imageAlt: "Dr. James Wilson"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Pharmaceutical Companies"
          description="Join industry leaders who trust our pharmaceutical excellence"
          tag="Partners"
          tagIcon={Building}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763492978545-qizonujk.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763492979261-7n50r5pz.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763492979760-fzp2x2j7.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763492980325-9a08q5xt.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763492980965-i1kot78s.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763492981951-hwka8wa7.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763492982489-21uekax4.jpg"
          ]}
          speed={30}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          title="Start Your Premium Experience"
          description="Contact our pharmaceutical specialists to learn more about our premium products and how we can meet your specific needs."
          tagIcon={MessageCircle}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763492977970-acfijlfe.jpg"
          imageAlt="Pharmaceutical consultation"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Contact Us"
          termsText="By contacting us, you agree to our Terms and Conditions and Privacy Policy."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="PharmaXcel"
          copyrightText="© 2025 PharmaXcel. All rights reserved."
          columns={[
            {
              title: "Products",
              items: [
                {
                  label: "Premium Series",
                  href: "products"
                },
                {
                  label: "Standard Series",
                  href: "products"
                },
                {
                  label: "Luxury Collection",
                  href: "products"
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
                  label: "Quality Standards",
                  href: "features"
                },
                {
                  label: "Certifications",
                  href: "features"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Contact Us",
                  href: "contact"
                },
                {
                  label: "Customer Support",
                  href: "https://support.example.com"
                },
                {
                  label: "Medical Information",
                  href: "https://medical.example.com"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Linkedin,
              href: "https://linkedin.com/company/pharmaxcel",
              ariaLabel: "LinkedIn"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/pharmaxcel",
              ariaLabel: "Twitter"
            },
            {
              icon: Mail,
              href: "mailto:contact@pharmaxcel.com",
              ariaLabel: "Email"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}