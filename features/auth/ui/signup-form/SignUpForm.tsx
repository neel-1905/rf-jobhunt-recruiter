import React, { Activity } from "react";
import PersonalDetails from "./PersonalDetails";
import CompanyDetailsForm from "./CompanyDetailsForm";
import InviteMembersForm from "./InviteMembersForm";

const SignUpForm = ({ currentStep }: { currentStep: string }) => {
  return (
    <>
      <Activity
        mode={currentStep === "Personal Details" ? "visible" : "hidden"}
      >
        <PersonalDetails />
      </Activity>

      <Activity mode={currentStep === "Company Details" ? "visible" : "hidden"}>
        <CompanyDetailsForm />
      </Activity>

      <Activity mode={currentStep === "Invite Members" ? "visible" : "hidden"}>
        <InviteMembersForm />
      </Activity>
    </>
  );
};

export default SignUpForm;
