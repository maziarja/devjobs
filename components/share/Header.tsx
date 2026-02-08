import Image from "next/image";
import DarkMode from "./DarkMode";
import logo from "@/public/assets/desktop/logo.svg";
import { PropsWithChildren } from "react";
import Link from "next/link";

function Header({ children }: PropsWithChildren) {
  return (
    <header
      className={`h-34 bg-[url(/assets/mobile/bg-pattern-header.svg)] bg-cover bg-no-repeat md:h-40 md:bg-[url(/assets/tablet/bg-pattern-header.svg)] lg:bg-[url(/assets/desktop/bg-pattern-header.svg)]`}
    >
      <div className="flex max-w-297.5 flex-col gap-8 px-6 md:gap-11 md:px-10 lg:mx-auto">
        <div className="flex items-center justify-between pt-8 md:pt-11">
          <Link href={"/"}>
            <Image src={logo} alt="logo" loading="eager" />
          </Link>
          <DarkMode />
        </div>
        {children}
      </div>
    </header>
  );
}

export default Header;
