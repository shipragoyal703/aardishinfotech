import Header from "@/components/header";
import { getMenu } from "@/lib/menu";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import { Lato } from 'next/font/google';
import { Be_Vietnam_Pro } from "next/font/google";
import type { Metadata } from "next";
import "../styles/global.scss";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/footer";




const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
});




export const metadata: Metadata = {
  title: "Aardish InfoTech",
  description: "We help businesses turn ideas into powerful digital experiences. From stunning UI/UX to robust development, Aardish Infotech is your partner for scalable, future-ready solutions.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const menuData = await getMenu();

  return (
    <html lang="en">
      <body
        className={`${inter.variable}  ${lato.variable} antialiased`}
      >
         <Header menu={menuData?.items || []} />
        {children}
        <Footer menu={menuData?.items || []} />
      </body>
    </html>
  );
}
