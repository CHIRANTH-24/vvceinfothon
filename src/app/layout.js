import { Geist, Azeret_Mono as Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";
import { ThemeProvider } from "@/components/nav/theme-provider";
import { Themetoggle } from "@/components/nav/theme-toggle";
import { MenuBar } from "@/components/nav/menu-bar";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Image from "next/image";
import { MobileMenu } from "@/components/nav/MobileMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Next.js App",
  description: "A modern web application built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background min-h-screen flex flex-col`}
        >
          <Provider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4">
                  <div className="flex items-center">
                    <a className="flex items-center space-x-2" href="/">
                      <Image
                        alt="logo"
                        src="/water-logo.svg"
                        height={30}
                        width={30}
                      />
                    </a>
                  </div>
                  <nav className="flex items-center text-sm font-medium">
                    <div className="hidden md:flex space-x-6">
                      <MenuBar />
                    </div>
                    <MobileMenu />
                  </nav>

                  <div className="flex items-center space-x-4">
                    <Themetoggle />
                    <UserButton />
                  </div>
                </div>
              </header>
              <main className="flex-grow">
                <div className="container max-w-screen-2xl py-6 px-4 md:py-10">
                  {children}
                </div>
              </main>
              <footer className="mt-auto border-t py-6 bg-background">
                <div className="container px-4 flex flex-col items-center justify-between gap-4 md:flex-row">
                  <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built by{" "}
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium underline underline-offset-4"
                    >
                      AquaVision Tech
                    </a>
                    . The source code is available on{" "}
                    <a
                      href="https://github.com/CHIRANTH-24/vvceinfothon"
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium underline underline-offset-4"
                    >
                      GitHub
                    </a>
                    .
                  </p>
                </div>
              </footer>
            </ThemeProvider>
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
