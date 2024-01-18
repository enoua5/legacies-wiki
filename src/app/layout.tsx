import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './_components/Header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Legacies Wiki',
  description: 'wow it sure is',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="content">
          <Header/>

          <main id="main">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
