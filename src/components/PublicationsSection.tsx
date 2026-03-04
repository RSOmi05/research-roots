import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, FileText, Copy, ChevronDown, ChevronUp } from "lucide-react";
import { publicationsData, type Publication } from "@/data/siteData";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast } from "sonner";

const categories = [
  { value: "all", label: "All" },
  { value: "journal", label: "Journal Articles" },
  { value: "conference", label: "Conference Papers" },
  { value: "book", label: "Book Chapters" },
  { value: "working", label: "Working Papers" },
];

const PublicationEntry = ({ pub }: { pub: Publication }) => {
  const [expanded, setExpanded] = useState(false);

  const copyBibtex = () => {
    navigator.clipboard.writeText(pub.bibtex);
    toast.success("BibTeX copied to clipboard!");
  };

  return (
    <div className="py-4 border-b border-border last:border-0">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h4
            className="font-medium text-foreground mb-1 text-sm leading-snug"
            dangerouslySetInnerHTML={{ __html: pub.title }}
          />
          <p
            className="text-xs text-muted-foreground mb-1"
            dangerouslySetInnerHTML={{ __html: pub.authors }}
          />
          <p className="text-xs text-muted-foreground">
            <span className="italic">{pub.venue}</span>, {pub.year}
          </p>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
            <a href={pub.doi} target="_blank" rel="noopener noreferrer" aria-label="DOI">
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
            <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer" aria-label="PDF">
              <FileText className="h-3.5 w-3.5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={copyBibtex} aria-label="Copy BibTeX">
            <Copy className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setExpanded(!expanded)}
            aria-label="Toggle abstract"
          >
            {expanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="text-xs text-muted-foreground mt-3 p-3 bg-muted rounded-md leading-relaxed">
              {pub.abstract}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PublicationsSection = () => {
  const sorted = [...publicationsData].sort((a, b) => b.year - a.year);

  return (
    <section id="publications" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-3xl font-bold text-foreground mb-12 font-display"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Publications
        </motion.h2>

        <Tabs defaultValue="all">
          <TabsList className="mb-6 flex-wrap h-auto">
            {categories.map((cat) => (
              <TabsTrigger key={cat.value} value={cat.value} className="text-xs">
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.value} value={cat.value}>
              <div className="bg-card rounded-lg border border-border p-4 sm:p-6">
                {sorted
                  .filter((p) => cat.value === "all" || p.category === cat.value)
                  .map((pub) => (
                    <PublicationEntry key={pub.title} pub={pub} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default PublicationsSection;
