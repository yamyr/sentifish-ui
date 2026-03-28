import { motion } from "framer-motion";
import { Search, Globe, ShoppingCart, Zap, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";

const providerBadge: Record<string, string> = {
  brave: "bg-brand-indigo",
  serper: "bg-brand-cyan",
  tavily: "bg-warning",
  tinyfish: "bg-success",
};

const runs = [
  {
    icon: Globe,
    name: "General Knowledge Bench",
    dataset: "sample",
    providers: ["brave", "serper", "tavily", "tinyfish"],
    status: "completed" as const,
    top_k: 10,
    meta: "COMPLETED 2 HOURS AGO",
    bestProvider: "tavily",
    bestNdcg: 0.891,
  },
  {
    icon: ShoppingCart,
    name: "E-Commerce Query Set",
    dataset: "ecommerce-v2",
    providers: ["brave", "serper", "tavily"],
    status: "completed" as const,
    top_k: 10,
    meta: "COMPLETED YESTERDAY",
    bestProvider: "brave",
    bestNdcg: 0.842,
  },
  {
    icon: Zap,
    name: "Latency Stress Test",
    dataset: "latency-edge",
    providers: ["serper", "tinyfish"],
    status: "running" as const,
    top_k: 5,
    meta: "RUNNING NOW",
    bestProvider: null,
    bestNdcg: null,
  },
];

const RecentRuns = () => {
  const [filter, setFilter] = useState("");

  const filtered = runs.filter(
    (r) => !filter || r.name.toLowerCase().includes(filter.toLowerCase())
  );

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
        {filtered.map((run, i) => {
          const Icon = run.icon;
          return (
            <div key={i} className="flex gap-3 py-4 border-b border-border last:border-0">
              <div className="flex flex-col items-center pt-1">
                <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-foreground" />
                </div>
                {i < filtered.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-2" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-sans-brand font-semibold text-sm text-foreground leading-snug">
                  {run.name}
                </p>
                <p className="font-mono-brand text-[9px] tracking-wider text-muted-foreground mt-0.5 uppercase">
                  {run.meta} · TOP-K={run.top_k}
                </p>

                {/* Provider badges */}
                <div className="flex flex-wrap gap-1 mt-2">
                  {run.providers.map((p) => (
                    <span
                      key={p}
                      className={`${providerBadge[p]} text-primary-foreground font-mono-brand text-[9px] font-bold px-2 py-0.5 rounded-md uppercase`}
                    >
                      {p}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center gap-1.5">
                    {run.status === "completed" ? (
                      <CheckCircle className="w-3.5 h-3.5 text-success" />
                    ) : (
                      <Loader2 className="w-3.5 h-3.5 text-brand-cyan animate-spin" />
                    )}
                    <span className="font-mono-brand text-[10px] font-semibold uppercase text-muted-foreground">
                      {run.status}
                    </span>
                  </div>
                  {run.bestProvider && run.bestNdcg && (
                    <div>
                      <span className="font-mono-brand text-[9px] text-muted-foreground uppercase">
                        Best NDCG:{" "}
                      </span>
                      <span className="font-mono-brand text-xs font-bold text-foreground">
                        {run.bestNdcg} ({run.bestProvider})
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full text-center text-brand-indigo font-mono-brand text-xs font-semibold tracking-wider uppercase mt-4 hover:opacity-70 transition-opacity">
        View All 47 Runs
      </button>
    </motion.div>
  );
};

export default RecentRuns;
