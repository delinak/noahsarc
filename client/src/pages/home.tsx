import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import MissionVision from "@/components/mission-vision";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import ContactForm from "@/components/contact-form";
import RegistrationForm from "@/components/registration-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <MissionVision />
      <ServicesSection />
      <AboutSection />
      <ContactForm />
      <RegistrationForm />
      <Footer />
    </div>
  );
}
