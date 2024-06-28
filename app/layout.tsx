import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ghaith Mlika Personal Portfolio",
  description: "This is Ghaith Mlika's Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body id="root" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
