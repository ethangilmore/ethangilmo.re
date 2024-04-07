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
        <div className="w-1/2 m-auto">
          <TypingText text={"Coming Soon..."}/>
        </div>
        <main>{children}</main>
      </body>
    </html>
  )
}
