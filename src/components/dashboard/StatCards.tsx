import { motion } from "framer-motion";
import { TrendingUp, Clock, Layers } from "lucide-react";

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
        1,248
      </p>
      <div className="flex items-center gap-1.5 mt-2 text-success">
        <TrendingUp className="w-3.5 h-3.5" />
        <span className="text-xs font-medium">Across 4 providers × 3 datasets</span>
      </div>
    </motion.div>

    <div className="grid grid-cols-2 gap-3">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className={card}
      >
        <p className={label}>Best NDCG@10</p>
        <p className="font-sans-brand font-bold text-2xl leading-none text-foreground tracking-tight mb-1">
          0.891
        </p>
        <span className="font-mono-brand text-[9px] tracking-wider text-brand-cyan uppercase">Tavily</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18 }}
        className={card}
      >
        <p className={label}>Fastest Avg</p>
        <p className="font-sans-brand font-bold text-2xl leading-none text-foreground tracking-tight mb-1">
          180ms
        </p>
        <div className="flex items-center gap-1 text-success">
          <Clock className="w-3 h-3" />
          <span className="font-mono-brand text-[9px] tracking-wider uppercase">Serper</span>
        </div>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className={card}
    >
      <p className={label}>Evaluation Runs</p>
      <p className="font-sans-brand font-bold text-[2.25rem] leading-none text-foreground tracking-tight">
        47
      </p>
      <div className="flex items-center gap-1.5 mt-2 text-muted-foreground">
        <Layers className="w-3.5 h-3.5" />
        <span className="text-xs font-medium">3 datasets · Top-K = 10</span>
      </div>
    </motion.div>
  </div>
);

export default StatCards;
