import { motion } from "framer-motion";

const bars = [65, 45, 72, 58, 80, 90, 85, 70, 88, 95, 78, 82];

const TrendChart = () => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="mx-5 bg-card rounded-2xl border border-border p-5"
  >
    <h3 className="font-mono-brand text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-5">
      Precision Trendline
    </h3>
    <div className="flex items-end gap-1.5 h-28">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.4 + i * 0.04, duration: 0.4, ease: "easeOut" }}
          className="flex-1 rounded-t-sm origin-bottom"
          style={{
            height: `${h}%`,
            backgroundColor: i >= bars.length - 3
              ? "hsl(var(--brand-indigo))"
              : "hsl(var(--brand-indigo) / 0.2)",
          }}
        />
      ))}
    </div>
  </motion.div>
);

export default TrendChart;
