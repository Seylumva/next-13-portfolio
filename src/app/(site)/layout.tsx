import "@/styles/globals.css";
import styles from "@/styles/Header.module.css";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Emilio Noa",
  description:
    "Emilio Noa is a web developer based in New York City. He specializes in front end development with frameworks and libraries such as React.js and Next.js",
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
