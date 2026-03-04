import { motion } from "framer-motion";
import { BookOpen, Users } from "lucide-react";
import { teachingData } from "@/data/siteData";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TeachingSection = () => {
  return (
    <section id="teaching" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-3xl font-bold text-foreground mb-12 font-display"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Teaching
        </motion.h2>

        {/* Courses */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-accent" /> Courses
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {teachingData.courses.map((course) => (
              <Card key={course.title} className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <h4 className="font-medium text-foreground text-sm mb-1">{course.title}</h4>
                  <p className="text-xs text-muted-foreground mb-1">{course.institution}</p>
                  <Badge variant="outline" className="text-xs mb-3">{course.semester}</Badge>
                  <p className="text-xs text-muted-foreground leading-relaxed">{course.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Supervision */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Users className="h-5 w-5 text-accent" /> Supervision
          </h3>
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <div className="hidden sm:grid grid-cols-4 gap-4 px-5 py-3 text-xs font-medium text-muted-foreground border-b border-border bg-muted/50">
              <span>Student</span>
              <span>Level</span>
              <span>Topic</span>
              <span>Year</span>
            </div>
            {teachingData.supervision.map((s) => (
              <div key={s.name} className="grid sm:grid-cols-4 gap-2 sm:gap-4 px-5 py-3 text-sm border-b border-border last:border-0">
                <span className="font-medium text-foreground">{s.name}</span>
                <span><Badge variant="secondary" className="text-xs">{s.level}</Badge></span>
                <span className="text-muted-foreground text-xs">{s.topic}</span>
                <span className="text-muted-foreground text-xs">{s.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;
