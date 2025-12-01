import { useFormContext } from "react-hook-form";
import { JobFormSchema } from "../../lib/job.validations";
import RichTextEditor from "@/shared/components/ui/rich-text-editor";
import {
  FormField,
  FormItem,
  FormMessage,
  FormControl,
} from "@/shared/components/ui/form";

const JobDescription = () => {
  const form = useFormContext<JobFormSchema>();

  return (
    <section className="app-section">
      <h1>Job Description</h1>

      <FormField
        control={form.control}
        name={"description"}
        render={({ field, fieldState }) => (
          <FormItem>
            <FormControl>
              <RichTextEditor {...field} />
            </FormControl>
            <FormMessage className="text-xs mt-1" />
          </FormItem>
        )}
      />
    </section>
  );
};

export default JobDescription;
