import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Business solutions system presentation',
  description: 'Business solutions system presentation',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
