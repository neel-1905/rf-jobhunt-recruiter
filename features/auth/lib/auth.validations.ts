import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.email().min(1, "Email is required"),
});

export const otpFormSchema = z.object({
  otp: z.string().min(1, "OTP is required").max(4, "OTP is invalid"),
});

export const personalDetailsFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email().min(1, "Email is required"),
  phone: z.string().min(1, "Phone number is required"),
  country: z.string().min(1, "Country is required"),
});

export const companyDetailsFormSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  email: z.string().min(1, "Email is required"),
  phone: z.string().min(1, "Company type is required"),
  companyWebsite: z.string().min(1, "Company website is required"),
  companySize: z.number().min(1, "Company size cannot be less than 1"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  country: z.string().min(1, "Country is required"),
});

export const inviteMembersFormSchema = z.object({
  email: z.string().min(1, "Email is required"),
  role: z.string().min(1, "Role is required"),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
export type OtpFormSchema = z.infer<typeof otpFormSchema>;
export type PersonalDetailsFormSchema = z.infer<
  typeof personalDetailsFormSchema
>;
export type CompanyDetailsFormSchema = z.infer<typeof companyDetailsFormSchema>;
export type InviteMembersFormSchema = z.infer<typeof inviteMembersFormSchema>;
