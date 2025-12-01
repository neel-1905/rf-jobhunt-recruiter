import SkillDisplayBadge from "@/features/skill/ui/SkillDisplayBadge";
import { ICONS } from "@/shared/constants/icons";
import Image from "next/image";
import JobNotes from "./JobNotes";
import RichText from "@/shared/components/ui/rich-text";
import { htmlString } from "../../lib/jobs.dummy";

const JobDetails = () => {
  return (
    <div className="content-container space-y-10">
      <section className="app-section">
        <h1>Job Description</h1>
        <p className="paragraph mb-7.5">
          We are looking for a highly skilled and creative Chef to join our
          team. The ideal candidate will be responsible for planning menus,
          preparing high-quality dishes, managing kitchen operations, and
          ensuring an exceptional dining experience for our customers. The role
          requires strong culinary expertise, leadership abilities, and a
          passion for delivering excellence in every plate.
        </p>

        <RichText html={htmlString} />
      </section>

      <section className="app-section">
        <h1>Salary & Benefits</h1>

        <div className="text-muted-foreground-secondary">
          <Image
            src={ICONS.cash}
            alt="cash"
            height={16}
            width={16}
            className="inline mr-2"
          />
          <span className="text-xsm">Upto INR 15 Lakh</span>
        </div>

        <p className="paragraph mt-3">
          Competitive salary based on experience, along with a comprehensive
          benefits package including incentives, performance-based bonuses, paid
          leave, and employee discounts.
        </p>
      </section>

      <section className="app-section">
        <h1>Skills</h1>
        <div className="flex gap-2.5 flex-wrap">
          <SkillDisplayBadge name="Kitchen management" />
          <SkillDisplayBadge name="Hygiene & safety" />
          <SkillDisplayBadge name="Menu planning" />
        </div>
      </section>

      <section className="app-section">
        <h1>Experience</h1>
        <p className="paragraph">3 Years</p>
      </section>

      <section className="app-section">
        <h1>Education</h1>
        <p className="paragraph">BBA</p>
      </section>

      <section className="app-section">
        <h1>Certifications</h1>
        <p className="paragraph">Hotel Management</p>
      </section>

      <JobNotes />
    </div>
  );
};

export default JobDetails;
