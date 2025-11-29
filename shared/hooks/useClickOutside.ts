import { useRef, useEffect } from "react";

export const useClickOutside = (
  handler: (event: MouseEvent | TouchEvent) => void
) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleEvent = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler(event);
      }
    };

    document.addEventListener("mousedown", handleEvent);
    document.addEventListener("touchstart", handleEvent);

    return () => {
      document.removeEventListener("mousedown", handleEvent);
      document.removeEventListener("touchstart", handleEvent);
    };
  }, [handler]);

  return ref;
};
