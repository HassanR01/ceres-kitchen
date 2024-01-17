'use client'

import Image from "next/image"
import Link from "next/link"
import { signIn, useSession } from "next-auth/react"

export default function Header() {
  const { status, data: session } = useSession();
  const Admins = ["hassanrageh.236@gmail.com", "pavarotie@yahoo.com", "hkrock236@gmail.com"]
  return (
    <header>
      <nav className={'menu'}>
        <ul>
          <li><Link href={'/'}>Home</Link></li>
          <li><Link href={'/menu'}>menu</Link></li>
          <li><Link href={'/offer'}>offer</Link></li>
          <li><Link href={'/contact'}>contact</Link></li>
          <li><Link href={'/about'}>about</Link></li>
        </ul>
      </nav>
      <nav className={'access'}>
        <ul>
          {status === 'authenticated' ? ((
            <>
              { Admins.includes(session?.user?.email) ? (
                <li><Link href={'/admin/Dashboard'}><Image src={'/dashboard.svg'} width={40} height={40} alt="Dashboard" /></Link></li>
              ) : (
                  <li><Link href={`/basket/${session?.user?.email}`}><Image src={'/basket.svg'} width={40} height={40} alt="Basket Icon"/></Link></li>
              )}
              |
              <li><Link href={`/profile/${session?.user?.email}`}><Image src={session?.user?.image} width={50} height={50} alt="user" className={'userImg'} /></Link></li>
            </>
          )) : ((<li className="loginBtn"><Link href={'/log_in'}>Sign In</Link></li>))}
        </ul>
      </nav>
    </header>
  )
}
