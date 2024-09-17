import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DAMS Research Lab Privacy Policies!",
  description:
    "A research project by Darsh Patel, Sean Belon, and Peter Gatira at the DAMS Research Lab at University of Maryland, Baltimore County",
  keywords:
    "DAMS Research Lab, DAMS, UMBC, Research",
  author: "Darsh Patel",
  robots: "index, follow",
  charset: "UTF-8",
  openGraph: {
    type: "website",
    url: "",
    title: "DAMS Research Lab Project",
    description:
      "A research project by Darsh Patel, Sean Belon, and Peter Gatira at the DAMS Research Lab at University of Maryland, Baltimore County",
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
