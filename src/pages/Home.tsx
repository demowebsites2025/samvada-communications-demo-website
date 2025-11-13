import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";
import ClientsSection from "@/components/ClientsSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <TestimonialSection />
        <ClientsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
