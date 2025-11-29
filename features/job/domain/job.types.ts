export type JOB = {
  id: string;
  title: string;
  location: string;
  candidatesApplied: number;
  recruiter: string;
  department: string;
  status: "Active" | "Inactive";
  postedDate: string;
};
