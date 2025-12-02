import { PrimaryOutlineButton } from "@/shared/components/buttons";
import { Flag } from "lucide-react";

const CandidateActions = () => {
  return (
    <div className="flex gap-3.5 px-7.5 pb-7.5">
      <PrimaryOutlineButton className="w-22 h-8">
        <Flag size={15} /> Flag
      </PrimaryOutlineButton>

      <PrimaryOutlineButton className="w-22 h-8">Save</PrimaryOutlineButton>
    </div>
  );
};

export default CandidateActions;
