import { Loader2 } from "lucide-react";
import React from "react";

type LoadingFeedbackProps = {
  size?: number;
};

const LoadingFeedback = (props: LoadingFeedbackProps) => {
  const { size = 30 } = props;
  return (
    <div className="flex-center w-full">
      <Loader2 className="text-primary animate-spin" size={size} />
    </div>
  );
};

export default LoadingFeedback;
