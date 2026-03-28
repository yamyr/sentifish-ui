import { motion } from "framer-motion";
import { TrendingUp, AlertCircle } from "lucide-react";

const card = "bg-card rounded-2xl p-5 border border-border";
const label = "font-mono-brand text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-2";

const StatCards = () => (
  <div className="px-5 space-y-3">
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className={card}
    >
      <p className={label}>Total Queries Evaluated</p>
      <p className="font-sans-brand font-bold text-[2.25rem] leading-none text-foreground tracking-tight">
        12,842
      </p>
      <div className="flex items-center gap-1.5 mt-2 text-success">
        <TrendingUp className="w-3.5 h-3.5" />
        <span className="text-xs font-medium">+12% vs last month</span>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className={card}
    >
      <p className={label}>Avg Relevance Score</p>
      <p className="font-sans-brand font-bold text-[2.25rem] leading-none text-foreground tracking-tight mb-3">
        94.1%
      </p>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div className="h-full bg-brand-indigo rounded-full" style={{ width: "94.1%" }} />
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className={card}
    >
      <p className={label}>Citation Accuracy</p>
      <p className="font-sans-brand font-bold text-[2.25rem] leading-none text-foreground tracking-tight">
        88.7%
      </p>
      <div className="flex items-center gap-1.5 mt-2 text-warning">
        <AlertCircle className="w-3.5 h-3.5" />
        <span className="text-xs font-medium">Verification Pending</span>
      </div>
    </motion.div>
  </div>
);

export default StatCards;
