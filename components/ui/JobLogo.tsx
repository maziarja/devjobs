import Image from "next/image";

type Props = {
  logo: string;
  logoBackground: string;
  company: string;
};

function JobLogo({ logo, logoBackground, company }: Props) {
  return (
    <div
      style={{ backgroundColor: logoBackground }}
      className="flex size-12.5 items-center justify-center rounded-2xl p-2.5"
    >
      <Image
        src={logo}
        alt={`${company} logo`}
        width={50}
        height={50}
        className="object-contain"
      />
    </div>
  );
}

export default JobLogo;
