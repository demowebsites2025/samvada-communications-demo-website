import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Code, TrendingUp, Palette, Film, MessageCircle, Package, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import webDev from "@/assets/web-dev.jpg";
import digitalMarketing from "@/assets/digital-marketing.jpg";
import graphicDesign from "@/assets/graphic-design.jpg";
import socialMedia from "@/assets/social-media.jpg";
import whatsappApi from "@/assets/whatsapp-api.jpg";
import offlineMarketing from "@/assets/offline-marketing.jpg";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "We develop websites that are fast, secure, responsive, and made to match your brand's personality — turning your ideas into digital reality. From concept to launch, we ensure every detail delivers an exceptional user experience that drives results.",
    features: [
      "Custom Website Design",
      "E-commerce Development",
      "Responsive Mobile Design",
      "SEO Optimization",
      "Fast Loading Speed",
      "Secure & Reliable"
    ],
    image: webDev,
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "We specialize in delivering powerful digital marketing solutions that help businesses connect with their audience, boost engagement, and drive measurable growth. From social media and search engine marketing to email campaigns and content strategy — we help you build a strong online presence that gets real results.",
    features: [
      "Social Media Marketing",
      "Search Engine Marketing",
      "Content Strategy",
      "Email Campaigns",
      "Analytics & Reporting",
      "Brand Management"
    ],
    image: digitalMarketing,
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "From bold brand identities to stunning visuals that tell your story, we craft designs that captivate and convert. Our creative team brings your vision to life with designs that stand out and leave a lasting impression.",
    features: [
      "Brand Identity Design",
      "Logo & Branding",
      "Marketing Materials",
      "Social Media Graphics",
      "Infographics",
      "Print Design"
    ],
    image: graphicDesign,
  },
  {
    icon: Film,
    title: "Social Media & Film Promotions",
    description: "We promote films and brands across digital platforms with creativity and strategy that deliver real impact. Our campaigns captivate audiences, spark conversations, and drive measurable results.",
    features: [
      "Social Media Campaigns",
      "Film Marketing",
      "Video Content Creation",
      "Influencer Marketing",
      "Viral Campaigns",
      "Audience Engagement"
    ],
    image: socialMedia,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp API",
    description: "Connect with customers instantly and professionally using the WhatsApp API — automate, engage, and grow your business like never before. With seamless integration and personalized messaging, build stronger relationships and deliver exceptional experiences at scale.",
    features: [
      "Automated Messages",
      "Customer Support",
      "Broadcasting",
      "Order Notifications",
      "Two-Way Communication",
      "Integration Support"
    ],
    image: whatsappApi,
  },
  {
    icon: Package,
    title: "Offline Marketing",
    description: "We bring your brand to life in the real world with impactful offline marketing — from packaging and banners to billboards and sticker stamping. Our creative touch ensures your brand stands out and leaves a lasting impression wherever it appears.",
    features: [
      "Banner Design",
      "Packaging Design",
      "Billboard Advertising",
      "Sticker & Labels",
      "Brochures & Flyers",
      "Event Marketing"
    ],
    image: offlineMarketing,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <span className="text-secondary font-semibold text-sm bg-secondary/10 px-4 py-2 rounded-full">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-6">
              Complete Digital Solutions for Your{" "}
              <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                Business Growth
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From web development to digital marketing, we offer comprehensive services 
              to help your business thrive in the digital world.
            </p>
          </div>
        </section>

        {/* Services Detailed */}
        <section className="container mx-auto px-4 space-y-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image/Icon */}
              <div 
                className={`${index % 2 === 1 ? "lg:order-2" : ""} animate-fade-in`}
              >
                {service.image ? (
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-auto object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="w-full h-96 rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl">
                    <service.icon size={120} className="text-primary-foreground" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""} space-y-6 animate-slide-in-right`}>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground">
                  <service.icon size={28} />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <ArrowRight size={16} className="text-secondary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 mt-4">
                    Get Started <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 mt-20">
          <div className="bg-gradient-to-r from-primary to-navy rounded-3xl p-12 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-secondary hover:bg-secondary/90">
                  Contact Us Now
                </Button>
              </Link>
              <a href="tel:+917619394676">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  Call +91 7619394676
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
