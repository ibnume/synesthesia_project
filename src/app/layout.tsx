import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { META_TITLE } from '@/constants'

import './globals.css'
import { ThemeProvider } from '@/components/wrapper/themeProvider'

const metaTitle = META_TITLE || 'Synesthesia'

export const metadata: Metadata = {
  title: {
    default: metaTitle,
    template: `%s | ${metaTitle}`,
  },
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
          
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
