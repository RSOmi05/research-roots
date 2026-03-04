import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { researchData } from "@/data/siteData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ResearchSection = () => {
  return (
    <section id="research" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-3xl font-bold text-foreground mb-12 font-display"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Research
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {researchData.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full group hover:shadow-lg hover:border-accent/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg flex items-start justify-between">
                    {item.title}
                    <a href={item.link} className="text-muted-foreground group-hover:text-accent transition-colors shrink-0 ml-2">
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <ul className="space-y-1">
                    {item.contributions.map((c) => (
                      <li key={c} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="mt-1 h-1 w-1 rounded-full bg-accent shrink-0" />
                        {c}
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

export default ResearchSection;
