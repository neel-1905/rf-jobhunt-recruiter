export type StatsCardVariant =
  | "primary"
  | "success"
  | "warning"
  | "info"
  | "danger";

export type StatsCardIconConfig = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  bgColor: string;
  iconColor: string;
  statusColor: string; // Color for the status text
};

export type StatsStatus = "positive" | "negative" | "neutral";
