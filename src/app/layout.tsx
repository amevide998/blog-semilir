import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {NextAuthProvider} from "@/provider/auth-provider";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import {ThemeContextProvider} from "@/components/context/ThemeContext";
import {ThemeProvider} from "@/components/provider/themeProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'semilir',
    description: 'so much awesome',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <head>
            <link rel="icon" href="/favicon.ico" />
        </head>
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
