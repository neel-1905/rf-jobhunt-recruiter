import { redirect } from "next/navigation";

const page = () => {
  return redirect(`/sign-up/step/1`);
};

export default page;
