import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import 'react-toastify/dist/ReactToastify.css';
import 'react-multi-carousel/lib/styles.css';

import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eazy Task',
  description: 'Developed by Pranjal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}> 
      <ToastContainer />
        <Navbar />
       {children}
        <Footer />

      </body>
    </html>
  )
}
