"use client";

import { HEADINGS } from "@/shared/constants/headings";
import { usePathname } from "next/navigation";

const AppHeader = () => {
  const pathname = usePathname();

  // Get title from exact match or find closest parent route
  const getTitle = () => {
    // Try exact match first
    if (HEADINGS[pathname]) {
      return HEADINGS[pathname];
    }

    // For dynamic routes like /products/[id], try to match parent
    const segments = pathname.split("/").filter(Boolean);
    for (let i = segments.length; i > 0; i--) {
      const partialPath = "/" + segments.slice(0, i).join("/");
      if (HEADINGS[partialPath]) {
        return HEADINGS[partialPath];
      }
    }

    return "Page"; // Default fallback
  };

  return (
    <header className="app-header border-b">
      <h1>{getTitle()}</h1>
    </header>
  );
};

export default AppHeader;
