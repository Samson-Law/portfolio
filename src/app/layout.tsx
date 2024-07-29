import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@Styles/global.scss';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samson Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
