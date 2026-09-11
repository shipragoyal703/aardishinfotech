import Header from "@/components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import "../styles/global.scss";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Aardish Infotech | Digital Solutions & IT Services",
  description:
    "Aardish Infotech delivers innovative web development, software solutions, and digital services to help businesses grow and succeed online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
} 