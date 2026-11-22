import Header from "@/components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/global.scss";
import Footer from "@/components/footer";
import Script from "next/script";
import "../styles/buttons.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
 
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
      <head>
  <link
    rel="stylesheet"
    href="https://sibforms.com/forms/end-form/build/sib-styles.css"
  />

  <Script
    id="brevo-config"
    strategy="beforeInteractive"
  >
    {`
      window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
      window.LOCALE = 'en';
      window.EMAIL_INVALID_MESSAGE = 'Please enter a valid email address.';
      window.SMS_INVALID_MESSAGE = 'The information provided is invalid.';
      window.REQUIRED_ERROR_MESSAGE = 'This field cannot be left blank.';
      window.GENERIC_INVALID_MESSAGE = 'Please check your information.';
      window.INVALID_NUMBER = 'Please enter a valid number.';
      window.INVALID_DATE = 'Please enter a valid date';
      window.REQUIRED_MULTISELECT_MESSAGE = 'Please select at least 1 option';
      window.translation = {
        common: {
          selectedList: '{quantity} list selected',
          selectedLists: '{quantity} lists selected',
          selectedOption: '{quantity} selected',
          selectedOptions: '{quantity} selected'
        }
      };
      var AUTOHIDE = Boolean(0);
    `}
  </Script>
</head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}