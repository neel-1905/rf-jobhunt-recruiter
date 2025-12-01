import { PrimaryOutlineButton } from "@/shared/components/buttons";

const JobDetailsCta = () => {
  return (
    <div className="flex gap-4">
      <PrimaryOutlineButton className="bg-background w-32 py-3">
        Duplicate
      </PrimaryOutlineButton>
      <PrimaryOutlineButton className="bg-background w-24 py-3">
        Edit
      </PrimaryOutlineButton>
      <PrimaryOutlineButton className="bg-background w-25 py-3">
        Close
      </PrimaryOutlineButton>
    </div>
  );
};

export default JobDetailsCta;
