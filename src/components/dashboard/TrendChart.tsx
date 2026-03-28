import { motion } from "framer-motion";

// Simulated NDCG@10 trend data per provider over last 12 runs
const trendData = {
  brave:    [0.78, 0.80, 0.79, 0.81, 0.83, 0.82, 0.84, 0.83, 0.84, 0.85, 0.84, 0.84],
  serper:   [0.74, 0.76, 0.77, 0.78, 0.79, 0.78, 0.80, 0.79, 0.80, 0.81, 0.80, 0.80],
  tavily:   [0.82, 0.84, 0.85, 0.86, 0.87, 0.86, 0.88, 0.87, 0.89, 0.89, 0.89, 0.89],
  tinyfish: [0.80, 0.82, 0.83, 0.84, 0.85, 0.86, 0.86, 0.87, 0.87, 0.88, 0.88, 0.88],
};

const colors: Record<string, string> = {
  brave: "hsl(var(--brand-indigo))",
  serper: "hsl(var(--brand-cyan))",
  tavily: "hsl(var(--warning))",
  tinyfish: "hsl(var(--success))",
};

const TrendChart = () => {
  const min = 0.70;
  const max = 0.95;
  const range = max - min;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mx-5 bg-card rounded-2xl border border-border p-5"
    >
      <h3 className="font-mono-brand text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-1">
        NDCG@10 Trend — Last 12 Runs
      </h3>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-4">
        {Object.keys(trendData).map((provider) => (
          <div key={provider} className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors[provider] }} />
            <span className="font-mono-brand text-[9px] font-semibold text-foreground capitalize">{provider}</span>
          </div>
        ))}
      </div>

      {/* SVG sparklines */}
      <div className="relative h-32">
        <svg viewBox="0 0 220 100" className="w-full h-full" preserveAspectRatio="none">
          {Object.entries(trendData).map(([provider, data]) => {
            const points = data
              .map((v, i) => {
                const x = (i / (data.length - 1)) * 220;
                const y = 100 - ((v - min) / range) * 100;
                return `${x},${y}`;
              })
              .join(" ");
            return (
              <motion.polyline
                key={provider}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                points={points}
                fill="none"
                stroke={colors[provider]}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            );
          })}
        </svg>

        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between pointer-events-none">
          <span className="font-mono-brand text-[8px] text-muted-foreground">0.95</span>
          <span className="font-mono-brand text-[8px] text-muted-foreground">0.70</span>
        </div>
      </div>
    </motion.div>
  );
};

export default TrendChart;
