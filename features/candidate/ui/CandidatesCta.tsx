import { PrimaryOutlineButton } from "@/shared/components/buttons";
import React from "react";

const CandidatesCta = () => {
  return (
    <div className="flex gap-3.5">
      <PrimaryOutlineButton className="cta-btn">Duplicate</PrimaryOutlineButton>

      <PrimaryOutlineButton className="cta-btn">Edit</PrimaryOutlineButton>

      <PrimaryOutlineButton className="cta-btn">Close</PrimaryOutlineButton>
    </div>
  );
};

export default CandidatesCta;
