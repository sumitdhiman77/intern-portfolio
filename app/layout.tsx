import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sumit Dhiman | MERN Stack Developer",
  description:
    "Portfolio of Sumit Dhiman, MERN Stack Developer specializing in Next.js, MongoDB, authentication systems, and scalable web applications.",
  keywords: [
    "Sumit Dhiman",
    "MERN Developer",
    "Next.js Developer",
    "Full Stack Developer",
    "Internship Portfolio",
  ],
  authors: [{ name: "Sumit Dhiman" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
