import DashboardStatsCard from "./DashboardStatsCard";
import { StatsCardVariant } from "../domain/stats-card.types";
import { JobsIcon, PeopleIcon, BookmarkIcon } from "@/shared/icons";

const DashboardStats = () => {
  const stats: Array<{
    value: number;
    label: string;
    change: string;
    status: "positive" | "negative" | "neutral";
    variant: StatsCardVariant;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    iconColor: string;
    bgColor: string;
  }> = [
    {
      value: 25,
      label: "Total Jobs Posted",
      change: "+12% from last month",
      status: "positive",
      variant: "primary",
      icon: JobsIcon,
      iconColor: "text-[#1258FF]",
      bgColor: "bg-[#E7EEFF]",
    },
    {
      value: 25,
      label: "Total Active Jobs",
      change: "+12% from last month",
      status: "positive",
      variant: "primary",
      icon: PeopleIcon,
      iconColor: "text-[#FFA400]",
      bgColor: "bg-[#FFF5E3]",
    },
    {
      value: 25,
      label: "Total Saved Jobs",
      change: "+12% from last month",
      status: "positive",
      variant: "primary",
      icon: BookmarkIcon,
      iconColor: "text-[#00E45B]",
      bgColor: "bg-[#85FFB629]",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 2lg:grid-cols-3 gap-7.5">
      {stats.map((stat) => {
        return (
          <DashboardStatsCard key={stat.label}>
            <DashboardStatsCard.Content>
              <DashboardStatsCard.Value>{stat.value}</DashboardStatsCard.Value>
              <DashboardStatsCard.Label>{stat.label}</DashboardStatsCard.Label>
              <DashboardStatsCard.Change status={stat.status}>
                {stat.change}
              </DashboardStatsCard.Change>
            </DashboardStatsCard.Content>

            <DashboardStatsCard.Icon
              icon={stat.icon}
              bgColor={stat.bgColor}
              iconColor={stat.iconColor}
            />
          </DashboardStatsCard>
        );
      })}
    </section>
  );
};

export default DashboardStats;
