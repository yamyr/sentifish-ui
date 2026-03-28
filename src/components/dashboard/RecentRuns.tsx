import { motion } from "framer-motion";
import { Search, Globe, ShoppingCart, Zap } from "lucide-react";
import { useState } from "react";

const runs = [
  {
    icon: Globe,
    name: "Google vs. Perplexity Bench",
    meta: "LAUNCHED 2 HOURS AGO • QUERY-SET-PRODUCTION-V4",
    passRate: 88,
    passColor: "bg-brand-indigo",
    scoreChange: "+2.4%",
    scoreUp: true,
  },
  {
    icon: ShoppingCart,
    name: "Product Query Set V2",
    meta: "LAUNCHED YESTERDAY • E-COMMERCE-RETRIEVAL-SUITE",
    passRate: 64,
    passColor: "bg-warning",
    scoreChange: "-1.2%",
    scoreUp: false,
  },
  {
    icon: Zap,
    name: "Latency Stress Test 400ms",
    meta: "OCT 24, 2023 • GLOBAL-EDGE-BENCH",
    passRate: 98,
    passColor: "bg-brand-indigo",
    scoreChange: "~0.0%",
    scoreUp: null,
  },
];

const RecentRuns = () => {
  const [filter, setFilter] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      className="mx-5 bg-card rounded-2xl border border-border p-5"
    >
      <div className="flex items-start justify-between mb-4">
        <h2 className="font-sans-brand font-bold text-lg text-foreground leading-tight">
          Recent<br />Evaluation Runs
        </h2>
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Filter runs..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="pl-8 pr-3 py-1.5 text-xs bg-secondary border border-border rounded-lg w-28 focus:outline-none focus:ring-1 focus:ring-ring font-sans-brand"
          />
        </div>
      </div>

      <div className="space-y-0">
        {runs.map((run, i) => {
          const Icon = run.icon;
          return (
            <div key={i} className="flex gap-3 py-4 border-b border-border last:border-0">
              <div className="flex flex-col items-center pt-1">
                <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-foreground" />
                </div>
                {i < runs.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-2" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-sans-brand font-semibold text-sm text-foreground leading-snug">
                  {run.name}
                </p>
                <p className="font-mono-brand text-[9px] tracking-wider text-muted-foreground mt-0.5 uppercase">
                  {run.meta}
                </p>
                <div className="flex items-center gap-6 mt-3">
                  <div>
                    <p className="font-mono-brand text-[9px] tracking-[0.15em] uppercase text-muted-foreground mb-1">
                      Pass Rate
                    </p>
                    <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-bold font-mono-brand text-primary-foreground ${run.passColor}`}>
                      {run.passRate}%
                    </span>
                  </div>
                  <div>
                    <p className="font-mono-brand text-[9px] tracking-[0.15em] uppercase text-muted-foreground mb-1">
                      Score Change
                    </p>
                    <span className={`text-sm font-semibold font-mono-brand ${
                      run.scoreUp === true ? "text-success" : run.scoreUp === false ? "text-danger" : "text-muted-foreground"
                    }`}>
                      {run.scoreUp === true ? "↗" : run.scoreUp === false ? "↘" : "—"} {run.scoreChange}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full text-center text-brand-indigo font-mono-brand text-xs font-semibold tracking-wider uppercase mt-4 hover:opacity-70 transition-opacity">
        View All 142 Runs
      </button>
    </motion.div>
  );
};

export default RecentRuns;
