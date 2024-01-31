import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.scss";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});
const museo = localFont({
  src: '../fonts/Museosanscyrl500.woff2',
  variable: '--font-museo',
  display: 'swap',
})

export const metadata = {
  title: "my CV",
  description: "my CV frontend dev",
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${museo.variable}`}>
      <body>
        <Header/>
        <div className='container'>{children}</div>
      </body>
    </html>
  );
}
