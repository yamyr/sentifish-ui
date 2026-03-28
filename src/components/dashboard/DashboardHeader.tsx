import { motion } from "framer-motion";
import { Plus, User } from "lucide-react";

const DashboardHeader = () => (
  <motion.header
    initial={{ opacity: 0, y: -12 }}
    animate={{ opacity: 1, y: 0 }}
    className="px-5 pt-6 pb-2"
  >
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-brand-indigo flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="2" y="2" width="5" height="5" rx="1" fill="white" />
            <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.6" />
            <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.6" />
            <rect x="9" y="9" width="5" height="5" rx="1" fill="white" opacity="0.3" />
          </svg>
        </div>
        <span className="font-sans-brand font-bold text-foreground text-sm tracking-tight">
          ClinicalArchitect
        </span>
      </div>
      <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
        <User className="w-4 h-4 text-muted-foreground" />
      </div>
    </div>

    <h1 className="font-sans-brand font-bold text-[2rem] leading-[1.1] tracking-tight text-foreground mb-3">
      Search Evaluation<br />Dashboard
    </h1>
    <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-[320px]">
      Systematic benchmarking of retrieval precision and citation veracity across competitive LLM search architectures.
    </p>

    <button className="w-full flex items-center justify-center gap-2 bg-brand-indigo text-primary-foreground font-sans-brand font-semibold text-sm py-3.5 rounded-xl hover:opacity-90 transition-opacity">
      <Plus className="w-4 h-4" />
      New Evaluation Run
    </button>
  </motion.header>
);

export default DashboardHeader;
