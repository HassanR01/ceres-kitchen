'use client'

import Image from "next/image"
import Link from "next/link"
import { signIn, useSession } from "next-auth/react"
import { useEffect, useState } from "react";

export default function Header({ admins }) {
  const { status, data: session } = useSession();
  const [cart, setCart] = useState([])
  const Admins = []

  for (let i = 0; i < admins.length; i++) {
    Admins.push(admins[i].email)
  }

  useEffect(() => {
    const cartFromLS = localStorage.getItem('CartItems')
    if (cartFromLS) {
      setCart(JSON.parse(cartFromLS))
    }
  }, [])

  return (
    <header>
      <nav className={'menu'}>
        <ul>
          <li><Link href={'/'}>Home</Link></li>
          <li><Link href={'/menu'}>menu</Link></li>
          <li><Link href={'/contact'}>contact</Link></li>
          <li><Link href={'/about'}>about</Link></li>
        </ul>
      </nav>
      <nav className={'access'}>
        <ul>
          {status === 'authenticated' ? ((
            <>
              { Admins.includes(session?.user?.email) ? (
                <li><Link href={{
                  pathname: '/admin',
                  query: {
                    email: `${session?.user?.email}`,
                  }
                }}><Image src={'/dashboard.svg'} width={40} height={40} alt="Dashboard" /></Link></li>
              ) : (
                  <li><Link href={{
                    pathname: `/basket`,
                    query: {
                      email: `${session?.user?.email}`,
                    }
                  }}><h4>{cart.length}</h4><Image src={'/basket.svg'} width={40} height={40} alt="Basket Icon"/></Link></li>
              )}
              |
              <li><Link href={`/profile/${session?.user?.email}`}><Image src={session?.user?.image} width={50} height={50} alt="user" className={'userImg'} /></Link></li>
            </>
          )) : ((
              <>
                <li><Link href={'/basket'}><h4>{cart.length}</h4><Image src={'/basket.svg'} width={40} height={40} alt="Basket Icon" /></Link></li> | <li className="loginBtn"><Link href={'/log_in'}>Sign In</Link></li>
              </>
          ))}
        </ul>
      </nav>
    </header>
  )
}
