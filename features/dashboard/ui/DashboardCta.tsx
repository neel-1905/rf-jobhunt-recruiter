"use client";
import { PrimaryButton } from "@/shared/components/buttons";
import { PlusIcon } from "@/shared/icons";

const DashboardCta = () => {
  return (
    <PrimaryButton className="w-36 h-10.5 text-sm">
      <PlusIcon /> New Job
    </PrimaryButton>
  );
};

export default DashboardCta;
