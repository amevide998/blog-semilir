import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {NextAuthProvider} from "@/provider/auth-provider";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";
import {ThemeContextProvider} from "@/app/components/context/ThemeContext";
import {ThemeProvider} from "@/app/components/provider/themeProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextAuthProvider>
          <ThemeContextProvider>
              <ThemeProvider>
                  <div className="container">
                      <div className="wrapper">
                          <Navbar />
                          {children}
                          <Footer />
                      </div>
                  </div>
              </ThemeProvider>
          </ThemeContextProvider>
      </NextAuthProvider>
      </body>
    </html>
  )
}
