// import localFont from "next/font/local";
import { Montserrat } from "next/font/google"
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'] // Adding common weights we'll need
})

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
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
