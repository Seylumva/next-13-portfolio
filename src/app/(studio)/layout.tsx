import "@/styles/globals.css";

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
      <body>{children}</body>
    </html>
  );
}
