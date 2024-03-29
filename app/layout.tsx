import "./globals.css";
import { Inter } from "next/font/google";
import { Saira_Stencil_One } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const saira = Saira_Stencil_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-saira",
});

export const metadata = {
  title: "Effortless Data Management | DataMastery Solutions",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${saira.variable}`}>{children}</body>
    </html>
  );
}
