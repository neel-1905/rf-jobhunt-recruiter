"use client";
import { PrimaryButton } from "@/shared/components/buttons";
import { PlusIcon } from "@/shared/icons";
import Link from "next/link";

const DashboardCta = () => {
  return (
    <Link href={`/jobs/new`}>
      <PrimaryButton className="w-36 h-10.5 text-sm">
        <PlusIcon /> New Job
      </PrimaryButton>
    </Link>
  );
};

export default DashboardCta;
