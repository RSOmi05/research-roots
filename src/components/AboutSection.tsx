import { motion } from "framer-motion";
import { GraduationCap, Wrench } from "lucide-react";
import { aboutData, personalInfo } from "@/data/siteData";
import { Badge } from "@/components/ui/badge";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-3xl font-bold text-foreground mb-12 font-display"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* Bio */}
        <motion.div
          className="grid md:grid-cols-5 gap-10 mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="md:col-span-2 flex justify-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-md">
              <img src={personalInfo.headshot} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="text-foreground/85 leading-relaxed mb-6">{aboutData.biography}</p>
            <h3 className="text-lg font-semibold text-foreground mb-3">Research Interests</h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {aboutData.researchInterests.map((interest) => (
                <li key={interest} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          className="mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-accent" /> Education
          </h3>
          <div className="space-y-4">
            {aboutData.education.map((edu) => (
              <div key={edu.degree} className="flex items-start gap-4 pl-2 border-l-2 border-accent/40">
                <div>
                  <p className="font-medium text-foreground">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  <p className="text-xs text-muted-foreground">{edu.year}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Wrench className="h-5 w-5 text-accent" /> Skills
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-medium text-foreground mb-3">Technical</p>
              <div className="flex flex-wrap gap-2">
                {aboutData.skills.technical.map((s) => (
                  <Badge key={s} variant="secondary">{s}</Badge>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground mb-3">Research Tools</p>
              <div className="flex flex-wrap gap-2">
                {aboutData.skills.research.map((s) => (
                  <Badge key={s} variant="outline">{s}</Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
