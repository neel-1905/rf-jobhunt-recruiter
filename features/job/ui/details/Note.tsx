import { PrimaryOutlineButton } from "@/shared/components/buttons";
import { formatToDDMMMMYYYY, formatToHHMMA } from "@/shared/lib/date.utils";

type NoteProps = {
  content: string;
  author: string;
  createdAt: string;
};

const Note = (props: NoteProps) => {
  const { content, author, createdAt } = props;

  const postedOn = `${formatToDDMMMMYYYY(createdAt)} - ${formatToHHMMA(
    createdAt
  )}`;

  return (
    <div className="note">
      <div className="content">
        <p>{content}</p>
        <span className="author">By {author}</span>
        <span className="date">{postedOn}</span>
      </div>

      <div className="actions">
        <PrimaryOutlineButton>Edit</PrimaryOutlineButton>
        <PrimaryOutlineButton>Delete</PrimaryOutlineButton>
      </div>
    </div>
  );
};

export default Note;
