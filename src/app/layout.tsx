import "../css/index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* custom head di sini */}
        <link rel="icon" href="/image/logo.svg" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  );
}
