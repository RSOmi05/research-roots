import { motion } from "framer-motion";
import { Download, GraduationCap, Briefcase, Award, Banknote } from "lucide-react";
import { cvHighlights, personalInfo } from "@/data/siteData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const sections = [
  { title: "Education", icon: GraduationCap, items: cvHighlights.education },
  { title: "Experience", icon: Briefcase, items: cvHighlights.experience },
  { title: "Awards", icon: Award, items: cvHighlights.awards },
  { title: "Grants", icon: Banknote, items: cvHighlights.grants },
];

const CVSection = () => {
  return (
    <section id="cv" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-3xl font-bold text-foreground mb-12 font-display"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Curriculum Vitae
        </motion.h2>

        <div className="flex justify-center mb-10">
          <Button size="lg" asChild>
            <a href={personalInfo.cvUrl} download>
              <Download className="h-4 w-4 mr-2" /> Download Full CV (PDF)
            </a>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {sections.map(({ title, icon: Icon, items }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Icon className="h-4 w-4 text-accent" /> {title}
                  </h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CVSection;
