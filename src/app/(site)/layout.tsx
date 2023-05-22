import "@/styles/globals.css";
import styles from "@/styles/Header.module.css";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Emilio Noa",
  description:
    "Results-driven web developer with a passion for creating seamless user experiences and innovative digital solutions. Specializing in front-end development, with a focus on React, I have a proven ability to quickly adapt to new technologies and thrive in fast-paced environments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={`${styles.header} ${styles.container}`}>
          <span>
            <Link href="/">Emilio Noa</Link>
          </span>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
