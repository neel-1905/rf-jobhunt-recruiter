import { z } from "zod";

export const jobLocationFormSchema = z.object({
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  country: z.string().min(1, "Country is required"),
});

export const jobRequirementsFormSchema = z.object({
  minExperience: z.number().min(1, "Minimum experience is required"),
  skills: z.string().min(1, "Skills is required"),
  education: z.string().min(1, "Education is required"),
  certifications: z
    .array(z.string().min(1, "Certification is required"))
    .nonempty("At least one certification is required"),
});

export const skillSchema = z.object({
  name: z.string().min(1, "Skill Name is required"),
});

export const salaryInformationFormSchema = z.object({
  salaryType: z.string().min(1, "Salary type is required"),
  minSalary: z.number().min(1, "Minimum salary is required"),
  maxSalary: z.number().min(1, "Maximum salary is required"),
  currency: z.string().min(1, "Currency is required"),
  additionalBenefits: z.string().min(1, "Additional benefits is required"),
});

export const jobRecruiterFormSchema = z.object({
  email: z.string().min(1, "Email is required"),
  phone: z.string().min(1, "Phone is required"),
  showEmail: z.boolean(),
  showPhone: z.boolean(),
});

export const jobFormSchema = z.object({
  // basics
  title: z.string().min(1, "Title is required"),
  department: z.string().min(1, "Department is required"),
  location: z.string().min(1, "Location is required"),
  jobLevel: z.string().min(1, "Job level is required"),
  employmentType: z.string().min(1, "Employment type is required"),
  locations: z
    .array(jobLocationFormSchema)
    .nonempty("At least one location is required"),

  //   job description
  description: z.string().min(1, "Description is required"),

  requirements: jobRequirementsFormSchema,

  skills: z.array(skillSchema),

  //   salary information
  salary: salaryInformationFormSchema,

  recruiter: jobRecruiterFormSchema,
});

export type JobFormSchema = z.infer<typeof jobFormSchema>;
