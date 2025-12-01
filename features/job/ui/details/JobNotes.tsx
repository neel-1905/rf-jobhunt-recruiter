"use client";
import { PrimaryOutlineButton } from "@/shared/components/buttons";
import { TextArea } from "@/shared/components/inputs";
import Note from "./Note";

const JobNotes = () => {
  return (
    <>
      <section className="app-section">
        <h1>Internal Notes</h1>

        <TextArea label="Write Here" />

        <PrimaryOutlineButton className="w-50 mt-7">
          Add Note
        </PrimaryOutlineButton>
      </section>

      <section className="app-section">
        <h1>Notes</h1>

        <div className="divide-y">
          <Note
            content="Competitive salary based on experience, along with a comprehensive benefits package including incentives, performance-based bonuses, paid leave, and employee discounts."
            author="Sumit Kumar"
            createdAt="2024-01-15T09:30:00"
          />

          <Note
            content="Competitive salary based on experience, along with a comprehensive benefits package including incentives, performance-based bonuses, paid leave, and employee discounts."
            author="Sumit Kumar"
            createdAt="2024-01-15T09:30:00"
          />
        </div>
      </section>
    </>
  );
};

export default JobNotes;
