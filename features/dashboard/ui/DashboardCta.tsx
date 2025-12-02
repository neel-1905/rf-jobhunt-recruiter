"use client";
import { PrimaryButton } from "@/shared/components/buttons";
import { PlusIcon } from "@/shared/icons";
import Link from "next/link";

const DashboardCta = () => {
  return (
    <Link href={`/jobs/new`}>
      <PrimaryButton className="cta-btn">
        <PlusIcon /> New Job
      </PrimaryButton>
    </Link>
  );
};

export default DashboardCta;
