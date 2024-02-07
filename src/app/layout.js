import Cursor from '../components/Cursor'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './globals.css'
import Bgimage from '../../public/bg.png'
import Script from 'next/script'
import { NextAuthProvider } from './providers'



const getAdmins = async () => {
  const apiUrl = process.env.API_URL
  try {
    
    const res = await fetch(`${apiUrl}/api/admins`, {
      cache: "no-store"
    })
    
    if (!res.ok) {
      throw new Error('Faild to Get the Admins')
    }
    return res.json()

  } catch (error) {
    console.log(error);
  }
  
}

export const metadata = {
  title: 'Home | Ceres Kitchen',
  description: 'Your source for fresh, healthy meals online, Enjoy nutritious dishes made with love and delivered to you hassle-free. Generated by Rockai Dev',
  images: {
    url: `https://res.cloudinary.com/db152mwtg/image/upload/v1706369733/Ceres%20Kitchen/kbz65sydntq4d8zob0oi.svg`, 
      width: 800,
      height: 600,
    },
}

export default async function RootLayout({ children }) {
  const { admin } = await getAdmins()
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} style={{
        backgroundImage: `url(${Bgimage.src})`,
      }}>
        <NextAuthProvider>
          <Header admins={admin} />
          {children}
          <Cursor />
          <Footer />
          <Script src='JS/main.js' strategy='afterInteractive' />
        </NextAuthProvider>
      </body>
    </html>
  )
}
