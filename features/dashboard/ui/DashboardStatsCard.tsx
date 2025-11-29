import { cn } from "@/shared/lib/utils";
import { StatsStatus } from "../domain/stats-card.types";

// Root Component
type DashboardStatsCardProps = {
  children: React.ReactNode;
  className?: string;
};

const DashboardStatsCard = ({
  children,
  className,
}: DashboardStatsCardProps) => {
  return <div className={cn("stats-card", className)}>{children}</div>;
};

// Content Component (Left Side)
type StatsCardContentProps = {
  children: React.ReactNode;
  className?: string;
};

const StatsCardContent = ({ children, className }: StatsCardContentProps) => {
  return <div className={cn(className)}>{children}</div>;
};

// Value Component
type StatsCardValueProps = {
  children: React.ReactNode;
  className?: string;
};

const StatsCardValue = ({ children, className }: StatsCardValueProps) => {
  return <h1 className={cn(className)}>{children}</h1>;
};

// Label Component
type StatsCardLabelProps = {
  children: React.ReactNode;
  className?: string;
};

const StatsCardLabel = ({ children, className }: StatsCardLabelProps) => {
  return <p className={cn(className)}>{children}</p>;
};

// Change Component
type StatsCardChangeProps = {
  children: React.ReactNode;
  status?: StatsStatus;
  className?: string;
};

const StatsCardChange = ({
  children,
  status = "neutral",
  className,
}: StatsCardChangeProps) => {
  return (
    <span data-status={status} className={cn(className)}>
      {children}
    </span>
  );
};

// Icon Component (Right Side)
type StatsCardIconProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  bgColor?: string;
  iconColor?: string;
  className?: string;
  iconClassName?: string;
};

const StatsCardIcon = ({
  icon: Icon,
  bgColor = "bg-[#E7EEFF]",
  iconColor = "text-[#1258FF]",
  className,
  iconClassName,
}: StatsCardIconProps) => {
  return (
    <div
      className={cn("size-12 rounded-primary flex-center", bgColor, className)}
    >
      <Icon className={cn("size-6", iconColor, iconClassName)} />
    </div>
  );
};

// Compound Component Exports
DashboardStatsCard.Content = StatsCardContent;
DashboardStatsCard.Value = StatsCardValue;
DashboardStatsCard.Label = StatsCardLabel;
DashboardStatsCard.Change = StatsCardChange;
DashboardStatsCard.Icon = StatsCardIcon;

export default DashboardStatsCard;
