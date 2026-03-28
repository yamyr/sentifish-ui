import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

const InsightCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.35 }}
    className="mx-5 bg-secondary rounded-2xl p-5"
  >
    <div className="flex items-center gap-2 mb-2">
      <Zap className="w-4 h-4 text-warning" />
      <h3 className="font-sans-brand font-bold text-lg text-foreground">
        Eval Insight
      </h3>
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
      TinyFish (browser-based) achieves comparable NDCG to Tavily but with 3.7× higher latency. Serper leads on speed at 180ms avg while maintaining 0.80 NDCG@10. Consider Serper for latency-sensitive workloads.
    </p>
    <button className="flex items-center gap-1.5 text-brand-indigo font-mono-brand text-xs font-semibold tracking-wider uppercase hover:opacity-70 transition-opacity">
      View Full Analysis
      <ArrowRight className="w-3.5 h-3.5" />
    </button>
  </motion.div>
);

export default InsightCard;
