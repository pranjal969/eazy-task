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
  description: 'Do you task in one go, Keep track of your tasks, set due dates, and receive reminders. Developed By Pranjal',
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
