import { useFormContext } from "react-hook-form";
import { JobFormSchema } from "../../lib/job.validations";
import { Select } from "@/shared/components/inputs";
import { SearchIcons } from "@/shared/icons";
import SkillBadge from "@/features/skill/ui/SkillBadge";

const JobSkills = () => {
  const form = useFormContext<JobFormSchema>();
  const skills = form.watch("skills") || [];

  const options = [
    { value: "1", label: "JavaScript" },
    { value: "2", label: "React" },
    { value: "3", label: "Node" },
  ];

  const addSkill = (skill: { value: string; label: string }) => {
    const exists = skills.some((s) => s.name === skill.label);
    if (exists) return;

    form.setValue("skills", [
      ...form.getValues("skills"),
      { name: skill.label },
    ]);
  };

  return (
    <section className="app-section">
      <h1>Skills</h1>

      <Select.Root
        name="skills"
        options={options}
        onValueChange={(o) => addSkill(o)}
      >
        <Select.Trigger>
          <Select.Icon>
            <SearchIcons />
          </Select.Icon>
          <Select.Input placeholder="Search by Job Title, Recruiter, Department, Location" />
        </Select.Trigger>
        <Select.Dropdown>
          {options.map((op) => {
            return (
              <Select.Option
                key={op.value}
                value={op.value}
                label={op.label}
                shouldClear
              />
            );
          })}
        </Select.Dropdown>
      </Select.Root>

      <div className="mt-5 flex gap-2.5">
        {skills.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} isSelected={true} />
        ))}
      </div>
    </section>
  );
};

export default JobSkills;
