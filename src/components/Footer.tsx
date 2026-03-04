import { Mail, Github, Linkedin, BookOpen, ExternalLink } from "lucide-react";
import { personalInfo, footerData } from "@/data/siteData";

const navLinks = ["Home", "About", "Research", "Publications", "Projects", "Teaching", "CV", "Contact"];

const socialIcons = [
  { icon: BookOpen, href: personalInfo.socialLinks.googleScholar, label: "Google Scholar" },
  { icon: ExternalLink, href: personalInfo.socialLinks.researchGate, label: "ResearchGate" },
  { icon: ExternalLink, href: personalInfo.socialLinks.orcid, label: "ORCID" },
  { icon: Linkedin, href: personalInfo.socialLinks.linkedIn, label: "LinkedIn" },
  { icon: Github, href: personalInfo.socialLinks.github, label: "GitHub" },
  { icon: Mail, href: personalInfo.socialLinks.email, label: "Email" },
];

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="font-semibold text-foreground mb-2">{personalInfo.fullName}</p>
            <p className="text-xs text-muted-foreground">{personalInfo.affiliation}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground mb-3">Quick Links</p>
            <div className="grid grid-cols-2 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-xs text-muted-foreground hover:text-accent transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground mb-3">Connect</p>
            <div className="flex gap-3">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
          <p>{footerData.copyright}</p>
          <p>Last updated: {footerData.lastUpdated}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
