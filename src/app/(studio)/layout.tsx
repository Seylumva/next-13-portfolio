import "@/styles/globals.css";

export const metadata = {
  title: "Blog CMS | Emilio Noa",
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
