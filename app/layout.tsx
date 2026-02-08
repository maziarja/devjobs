import type { Metadata } from "next";
import "./globals.css";
import { Kumbh_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: {
    default: "DevJobs",
    template: "%s | DevJobs",
  },
  description:
    "A modern job board for developers to search and filter tech roles by location, contract type, and keywords.",
};

export const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kumbhSans.className} bg-background antialiased`}>
        {children}
      </body>
    </html>
  );
}
