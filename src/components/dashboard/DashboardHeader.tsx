import { motion } from "framer-motion";
import { Plus, Fish } from "lucide-react";

const DashboardHeader = () => (
  <motion.header
    initial={{ opacity: 0, y: -12 }}
    animate={{ opacity: 1, y: 0 }}
    className="px-5 pt-6 pb-2"
  >
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-brand-indigo flex items-center justify-center">
          <Fish className="w-4 h-4 text-primary-foreground" />
        </div>
        <span className="font-sans-brand font-bold text-foreground text-sm tracking-tight">
          Sentifish
        </span>
      </div>
      <span className="font-mono-brand text-[9px] tracking-[0.15em] uppercase text-muted-foreground bg-secondary px-2.5 py-1 rounded-lg">
        4 Providers
      </span>
    </div>

    <h1 className="font-sans-brand font-bold text-[2rem] leading-[1.1] tracking-tight text-foreground mb-3">
      Web Search<br />Agent Evals
    </h1>
    <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-[320px]">
      Compare Brave, Serper, Tavily & TinyFish with IR metrics — Precision@K, Recall@K, NDCG@K, MRR & Latency.
    </p>

    <button className="w-full flex items-center justify-center gap-2 bg-brand-indigo text-primary-foreground font-sans-brand font-semibold text-sm py-3.5 rounded-xl hover:opacity-90 transition-opacity">
      <Plus className="w-4 h-4" />
      New Evaluation Run
    </button>
  </motion.header>
);

export default DashboardHeader;
