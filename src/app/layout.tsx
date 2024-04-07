import "./globals.css";
import NavMenu from "@/components/NavMenu";
import TypingText from "@/components/TerminalText";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavMenu />
        <TypingText text={"Coming Soon..."}/>
        <main>{children}</main>
      </body>
    </html>
  )
}
