'use client';
import "./globals.css";
import NavMenu from "@/components/NavMenu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{"scrollbarGutter": "stable"}}>
      <body className="flex flex-col min-h-screen p-8 px-6 md:p-16 md:pb-10 lg:p-20">
        <NavMenu />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  )
}
