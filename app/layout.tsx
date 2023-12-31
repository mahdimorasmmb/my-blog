import "./globals.css";
import type { Metadata } from "next";
import localFont from 'next/font/local'
import NavBar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import ThemeProvider from "@/components/provider/theme/component";

const myFont = localFont({ src: './font/Qs_Iranyekan.ttf' })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className} >
        <ThemeProvider >
          <div className=" dark:bg-neutral-950 dark:text-[#ddd]  bg-white min-h-screen text-black">
            <div className=" mx-auto  container px-10 sm:px-4   ">
              <NavBar />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

//  max-w-3xl  lg:max-w-5xl xl:max-w-[1366px]  2xl:max-w-[1536px]
