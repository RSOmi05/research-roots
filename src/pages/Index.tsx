import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EducationSkillsSection from "@/components/EducationSkillsSection";
import ResearchSection from "@/components/ResearchSection";
import PublicationsSection from "@/components/PublicationsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TeachingSection from "@/components/TeachingSection";
import CVSection from "@/components/CVSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <EducationSkillsSection />
      <ResearchSection />
      <PublicationsSection />
      <ProjectsSection />
      <TeachingSection />
      <CVSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
