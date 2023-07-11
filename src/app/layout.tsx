import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  description: 'Twitch stats, by Yuval and Ofir',
  title: 'Twitch stats',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <body className={inter.className}>{children}</body>
  </html>
)

export default RootLayout
