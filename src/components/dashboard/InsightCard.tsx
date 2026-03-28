import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const InsightCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.35 }}
    className="mx-5 bg-secondary rounded-2xl p-5"
  >
    <h3 className="font-sans-brand font-bold text-lg text-foreground mb-2">
      Architect Insight
    </h3>
    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
      Evaluation detected a 15% increase in hallucination rates when processing citations from non-peer-reviewed domains.
    </p>
    <button className="flex items-center gap-1.5 text-brand-indigo font-mono-brand text-xs font-semibold tracking-wider uppercase hover:opacity-70 transition-opacity">
      Deep Dive Analysis
      <ArrowRight className="w-3.5 h-3.5" />
    </button>
  </motion.div>
);

export default InsightCard;
