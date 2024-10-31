// import localFont from "next/font/local";
import {Open_Sans} from "next/font/google"
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const open_sans = Open_Sans({subsets: ['latin'],})

export const metadata = {
  title: "ICPC Amritapuri Regional 2024",
  description: "Website for ICPC Amritapuri Regionals 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>ICPC Asia Amritapuri Regional Contest</title>
        {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet"/> */}
        <link rel="icon" href="/icon.png" sizes="any" />
    </head>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={open_sans.className}
      >
        {children}
      </body>
    </html>
  );
}
