import TopNav from '@/components/navs/TopNav'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  description: 'Twitch stats, by Yuval and Ofir',
  title: 'Twitch stats',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <ClerkProvider>
    <html lang='en'>
      <body className={inter.className}>
        <TopNav></TopNav>
        {children}
        <script src='https://unpkg.com/flowbite@1.5.1/dist/flowbite.js'></script>
      </body>
    </html>
  </ClerkProvider>
)

export default RootLayout
