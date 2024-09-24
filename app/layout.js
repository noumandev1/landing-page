import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const neue = localFont({
  src: "./fonts/NeueMachina-Regular.otf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata = {
  title: "Landing page",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${neue.className}`}>
        <Header /> {children}
      </body>
    </html>
  );
}
