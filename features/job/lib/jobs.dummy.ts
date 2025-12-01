import { formatToDDMMMMYYYY, formatToHHMMA } from "@/shared/lib/date.utils";
import { JOB } from "../domain/job.types";

export const data: JOB[] = [
  {
    id: "1",
    title: "Software Engineer",
    location: "New York, NY",
    candidatesApplied: 42,
    recruiter: "John Smith",
    department: "Engineering",
    status: "Active",
    postedDate: "2024-01-15T09:30:00",
  },
  {
    id: "2",
    title: "Product Manager",
    location: "San Francisco, CA",
    candidatesApplied: 30,
    recruiter: "Sarah Johnson",
    department: "Product",
    status: "Active",
    postedDate: "2024-01-20T14:15:00",
  },
  {
    id: "3",
    title: "UI/UX Designer",
    location: "Remote",
    candidatesApplied: 18,
    recruiter: "Mike Davis",
    department: "Design",
    status: "Inactive",
    postedDate: "2024-01-10T11:00:00",
  },
  {
    id: "4",
    title: "DevOps Engineer",
    location: "Boston, MA",
    candidatesApplied: 26,
    recruiter: "Emily Chen",
    department: "Engineering",
    status: "Active",
    postedDate: "2024-02-02T10:45:00",
  },
  {
    id: "5",
    title: "Data Analyst",
    location: "Chicago, IL",
    candidatesApplied: 14,
    recruiter: "David Wilson",
    department: "Data",
    status: "Active",
    postedDate: "2024-02-08T16:20:00",
  },
  {
    id: "6",
    title: "HR Manager",
    location: "Austin, TX",
    candidatesApplied: 22,
    recruiter: "Lisa Anderson",
    department: "Human Resources",
    status: "Inactive",
    postedDate: "2024-01-28T13:30:00",
  },
  {
    id: "7",
    title: "Marketing Specialist",
    location: "Remote",
    candidatesApplied: 11,
    recruiter: "Tom Martinez",
    department: "Marketing",
    status: "Inactive",
    postedDate: "2024-02-01T08:00:00",
  },
  {
    id: "8",
    title: "QA Engineer",
    location: "Seattle, WA",
    candidatesApplied: 33,
    recruiter: "Rachel Brown",
    department: "Engineering",
    status: "Active",
    postedDate: "2024-01-18T15:45:00",
  },
  {
    id: "9",
    title: "Business Analyst",
    location: "Miami, FL",
    candidatesApplied: 27,
    recruiter: "Kevin Lee",
    department: "Business",
    status: "Active",
    postedDate: "2024-02-10T12:00:00",
  },
  {
    id: "10",
    title: "Customer",
    location: "Denver, CO",
    candidatesApplied: 9,
    recruiter: "Amanda Taylor",
    department: "Support",
    status: "Inactive",
    postedDate: "2024-01-22T09:15:00",
  },
];

export const jobDetails = {
  "Job Title": "Senior Chef",
  Department: "Food and Safety",
  "Employment Type": "Permanent",
  "Work Setting": "Onsite",
  "Posted Date & Time": `${formatToDDMMMMYYYY(
    "2024-01-15T09:30:00"
  )}, ${formatToHHMMA("2024-01-15T09:30:00")}`,
  Status: "Active",
  Recruiter: "Sumit Kumar - 199022",
  "Recruiter Contact": "sumit.kumar@cardekho.com",
};

export const htmlString = `
<h2>Menu Planning &amp; Food Preparation</h2>
<ul>
  <li>Develop innovative, seasonal, and cost-effective menus.</li>
  <li>Prepare and cook a wide range of dishes with consistency and high quality.</li>
  <li>Ensure all food items are prepared according to recipes and presentation standards.</li>
  <li>Introduce new dishes and upgrade existing menu items based on customer preferences.</li>
</ul>

<h2>Kitchen Operations &amp; Management</h2>
<ul>
  <li>Oversee daily kitchen activities, including food preparation and cooking processes.</li>
  <li>Maintain inventory levels, place orders, and manage supplier relationships.</li>
  <li>Ensure proper storage and labeling of ingredients and prepared items.</li>
  <li>Monitor food costs and minimize wastage through effective portion control.</li>
</ul>

<h2>Quality, Hygiene &amp; Safety Compliance</h2>
<ul>
  <li>Ensure the kitchen meets all health, hygiene, and food safety regulations.</li>
  <li>Maintain cleanliness and organization in all kitchen areas.</li>
  <li>Conduct routine inspections of equipment and ensure timely maintenance or repairs.</li>
  <li>Uphold consistent quality control for all dishes leaving the kitchen.</li>
</ul>
`;
