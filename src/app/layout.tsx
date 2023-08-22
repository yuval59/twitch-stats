import SideAndTopNav from '@/components/navs/SideAndTopNav'
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
        <SideAndTopNav></SideAndTopNav>
        <div className='p-4 sm:ml-64'>
          <div className='p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14'>
            {children}
          </div>
        </div>

        <script src='https://unpkg.com/flowbite@1.5.1/dist/flowbite.js'></script>
      </body>
    </html>
  </ClerkProvider>
)

export default RootLayout
