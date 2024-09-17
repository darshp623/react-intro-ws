import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Intro To React Workshop",
  description:
    "An Intro to the ReactJS Library by Darsh Patel during hackUMBC 2024 at the University of Maryland, Baltimore County",
  keywords:
    "React, Intro, Workshop, Darsh Patel",
  author: "Darsh Patel",
  robots: "index, follow",
  charset: "UTF-8",
  openGraph: {
    type: "website",
    url: "",
    title: "Intro To React Workshop",
    description:
      "An Intro to React Workshop by Darsh Patel during hackUMBC 2024 at the University of Maryland, Baltimore County",
    image: "",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
