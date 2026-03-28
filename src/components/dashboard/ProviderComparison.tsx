import { motion } from "framer-motion";

const providers = [
  { name: "Brave", key: "brave", precision: 0.82, recall: 0.76, ndcg: 0.84, mrr: 0.88, latency: 320 },
  { name: "Serper", key: "serper", precision: 0.79, recall: 0.81, ndcg: 0.80, mrr: 0.85, latency: 180 },
  { name: "Tavily", key: "tavily", precision: 0.91, recall: 0.73, ndcg: 0.89, mrr: 0.92, latency: 440 },
  { name: "TinyFish", key: "tinyfish", precision: 0.87, recall: 0.85, ndcg: 0.88, mrr: 0.90, latency: 680 },
];

const metrics = [
  { key: "precision" as const, label: "P@K" },
  { key: "recall" as const, label: "R@K" },
  { key: "ndcg" as const, label: "NDCG" },
  { key: "mrr" as const, label: "MRR" },
];

const providerColors: Record<string, string> = {
  brave: "bg-brand-indigo",
  serper: "bg-brand-cyan",
  tavily: "bg-warning",
  tinyfish: "bg-success",
};

const ProviderComparison = () => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.25 }}
    className="mx-5 bg-card rounded-2xl border border-border p-5"
  >
    <h2 className="font-sans-brand font-bold text-lg text-foreground mb-1">
      Provider Head-to-Head
    </h2>
    <p className="font-mono-brand text-[9px] tracking-[0.15em] uppercase text-muted-foreground mb-5">
      Latest evaluation · Top-K = 10
    </p>

    {/* Legend */}
    <div className="flex flex-wrap gap-3 mb-5">
      {providers.map((p) => (
        <div key={p.key} className="flex items-center gap-1.5">
          <div className={`w-2.5 h-2.5 rounded-full ${providerColors[p.key]}`} />
          <span className="font-mono-brand text-[10px] font-semibold text-foreground">{p.name}</span>
        </div>
      ))}
    </div>

    {/* Metric bars */}
    <div className="space-y-4">
      {metrics.map((metric) => (
        <div key={metric.key}>
          <p className="font-mono-brand text-[9px] tracking-[0.15em] uppercase text-muted-foreground mb-2">
            {metric.label}
          </p>
          <div className="space-y-1.5">
            {providers.map((p, i) => {
              const value = p[metric.key];
              return (
                <div key={p.key} className="flex items-center gap-2">
                  <span className="font-mono-brand text-[10px] text-muted-foreground w-14 shrink-0">
                    {p.name}
                  </span>
                  <div className="flex-1 h-3 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${value * 100}%` }}
                      transition={{ delay: 0.3 + i * 0.05, duration: 0.5, ease: "easeOut" }}
                      className={`h-full rounded-full ${providerColors[p.key]}`}
                    />
                  </div>
                  <span className="font-mono-brand text-xs font-bold text-foreground w-10 text-right">
                    {(value * 100).toFixed(1)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>

    {/* Latency section */}
    <div className="mt-5 pt-4 border-t border-border">
      <p className="font-mono-brand text-[9px] tracking-[0.15em] uppercase text-muted-foreground mb-3">
        Avg Latency (ms)
      </p>
      <div className="grid grid-cols-4 gap-2">
        {providers.map((p) => (
          <div key={p.key} className="text-center">
            <p className="font-mono-brand text-lg font-bold text-foreground">{p.latency}</p>
            <p className="font-mono-brand text-[9px] text-muted-foreground">{p.name}</p>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default ProviderComparison;
