'use client';
import "./globals.css";
import Image from "next/image";
import NavMenu from "@/components/NavMenu";
import TypingText from "@/components/TerminalText";
import IconLink from "@/components/IconLink";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen p-8 px-6 md:p-16 md:pb-10 lg:p-20">
        <NavMenu />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  )
}
        // <div className="flex flex-row-reverse space-x-4 space-x-reverse p-4" style={{paddingBottom: 'env(safe-area-inset-bottom)'}}>
        //   <IconLink
        //     icon="/Gmail_white.svg"
        //     href="mailto:ethanmckgilmore@gmail.com"
        //   />
        //   <IconLink
        //     icon="/LinkedIN_white.svg"
        //     href="https://www.linkedin.com/in/ethangilmore/"
        //   />
        //   <IconLink
        //     icon="/Github_white.svg"
        //     href="https://www.github.com/ethangilmore"
        //   />
        // </div>
