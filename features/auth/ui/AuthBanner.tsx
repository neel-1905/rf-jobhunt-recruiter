import { IMAGES } from "@/shared/constants/images";
import Image from "next/image";

const AuthBanner = () => {
  return (
    <div className="border border-background/50 max-w-md w-full rounded-[46px] bg-background/20 relative">
      <p className="max-w-[243px] font-bold text-secondary leading-11.5 text-3xl absolute top-7 left-7">
        Exciting opportunities await you—please log in to continue!
      </p>

      <Image
        src={IMAGES.thunder}
        alt="thunder"
        className="absolute bottom-20 -left-10"
        height={80}
        width={80}
      />

      <img src={IMAGES.authWoman} alt="woman" className="ml-auto -mr-10" />
    </div>
  );
};

export default AuthBanner;
