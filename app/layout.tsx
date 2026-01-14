import type { Metadata } from "next";
import { Manrope, Source_Code_Pro } from "next/font/google";
import SiteLayout from "./components/SiteLayout";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "CS Roadmap",
  description: "A calm, self-paced guide to CS50P and Python foundations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${sourceCodePro.variable} antialiased`}
      >
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
 