import AuthBanner from "@/features/auth/ui/AuthBanner";
import Logo from "@/shared/components/ui/logo";

import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-4 md:p-6 2lg:p-7.5 h-screen w-full">
      <div className="border border-primary size-full rounded-3xl flex auth">
        <div className="w-full 2lg:w-1/2 flex flex-col items-center px-3 overflow-auto min-h-full">
          <div className="flex flex-col items-center justify-center flex-1 w-full py-10">
            <Logo className="mb-12" />
            {children}
          </div>
        </div>
        <div className="2lg:w-1/2 relative flex-center auth-right hidden 2lg:flex">
          <AuthBanner />
        </div>
      </div>
    </div>
  );
};

export default layout;
