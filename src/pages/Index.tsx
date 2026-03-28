import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatCards from "@/components/dashboard/StatCards";
import ProviderComparison from "@/components/dashboard/ProviderComparison";
import RecentRuns from "@/components/dashboard/RecentRuns";
import TrendChart from "@/components/dashboard/TrendChart";
import InsightCard from "@/components/dashboard/InsightCard";
import { Plus } from "lucide-react";

const Index = () => (
  <div className="min-h-screen bg-background pb-24 max-w-md mx-auto">
    <DashboardHeader />
    <div className="mt-5 space-y-3">
      <StatCards />
      <ProviderComparison />
      <TrendChart />
      <RecentRuns />
      <InsightCard />
    </div>
    <button className="fixed bottom-6 right-6 w-14 h-14 rounded-2xl bg-brand-navy text-primary-foreground shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity">
      <Plus className="w-6 h-6" />
    </button>
  </div>
);

export default Index;
