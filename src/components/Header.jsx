'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";

export default function Header({ admins }) {
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
        <ul className="menuList">
          <li><Link href={'/'}>Home</Link></li>
          <li><Link href={'/menu'}>Menu</Link></li>
          <li><Link href={'/contact'}>Contact</Link></li>
          <li><Link href={'/about'}>About</Link></li>
        </ul>
      </nav>
      <div className="brgIcon">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={'access'}>
        <ul>
        
        </ul>
      </nav>
    </header>
  )
}
