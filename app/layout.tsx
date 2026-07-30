export const metadata = {
  title: "Ice Cream Master Pro",
  description: "Professional Ice Cream Formulation and Production System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
