// SelectIcon.tsx
import { ReactNode } from "react";

interface SelectIconProps {
  children: ReactNode;
}

const SelectIcon = ({ children }: SelectIconProps) => {
  return (
    <div className="flex items-center justify-center pl-3.5">{children}</div>
  );
};

export default SelectIcon;
