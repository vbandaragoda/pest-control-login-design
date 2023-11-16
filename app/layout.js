import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pest Control Login",
  description: "The Best Pest Control Service...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <link rel="stylesheet" href="./globals.css" /> */}
        {children}
      </body>
    </html>
  );
}
