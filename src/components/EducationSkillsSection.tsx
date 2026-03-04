import { motion } from "framer-motion";
import { GraduationCap, Wrench } from "lucide-react";
import { aboutData } from "@/data/siteData";
import { Badge } from "@/components/ui/badge";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const EducationSkillsSection = () => {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Education */}
        <motion.div
          className="mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-8 font-display flex items-center gap-3">
            <GraduationCap className="h-7 w-7 text-accent" /> Education
          </h2>
          <div className="space-y-4">
            {aboutData.education.map((edu) => (
              <div key={edu.degree} className="flex items-start gap-4 pl-3 border-l-2 border-accent/40">
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
          <h2 className="text-3xl font-bold text-foreground mb-8 font-display flex items-center gap-3">
            <Wrench className="h-7 w-7 text-accent" /> Skills
          </h2>
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

export default EducationSkillsSection;
