import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink, FileText, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/siteData";

const socialIcons = [
{ icon: BookOpen, href: personalInfo.socialLinks.googleScholar, label: "Google Scholar" },
{ icon: ExternalLink, href: personalInfo.socialLinks.researchGate, label: "ResearchGate" },
{ icon: Linkedin, href: personalInfo.socialLinks.linkedIn, label: "LinkedIn" },
{ icon: Github, href: personalInfo.socialLinks.github, label: "GitHub" },
{ icon: Mail, href: personalInfo.socialLinks.email, label: "Email" }];


const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          {/* Text content */}
          <motion.div
            className="md:col-span-3 order-2 md:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            
            <p className="text-accent font-medium mb-2 tracking-wide text-sm uppercase">​</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-3 font-display">
              {personalInfo.fullName}
            </h1>
            <p className="text-lg text-muted-foreground mb-2">{personalInfo.title}</p>
            <p className="text-sm text-muted-foreground mb-6">{personalInfo.affiliation}</p>
            <p className="text-base text-foreground/80 leading-relaxed mb-8 max-w-xl opacity-100 rounded-lg shadow-2xl">
              {personalInfo.researchSummary}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button asChild>
                <a href={personalInfo.cvUrl} download className="rounded-none">
                  <FileText className="h-4 w-4 mr-2" />
                  Download CV
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#publications">View Publications</a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="flex gap-3">
              {socialIcons.map(({ icon: Icon, href, label }) =>
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-full border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors">
                
                  <Icon className="h-4 w-4" />
                </a>
              )}
            </div>
          </motion.div>

          {/* Headshot */}
          <motion.div
            className="md:col-span-2 order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            
            <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-accent/30 shadow-lg">
              <img
                src={personalInfo.headshot}
                alt={`${personalInfo.fullName} portrait`}
                className="w-full h-full object-cover" />
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default HeroSection;