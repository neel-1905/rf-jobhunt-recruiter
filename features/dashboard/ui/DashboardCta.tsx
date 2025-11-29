import { PrimaryButton } from "@/shared/components/buttons";
import { PlusIcon } from "@/shared/icons";
import React from "react";

const DashboardCta = () => {
  return (
    <PrimaryButton className="w-36 h-10.5 text-sm">
      <PlusIcon /> New Job
    </PrimaryButton>
  );
};

export default DashboardCta;
