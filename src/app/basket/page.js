'use client'
import Title from '@/src/components/Title'
import React, { useEffect } from 'react'
import { useState } from "react"
import { useSession } from "next-auth/react"
import Image from 'next/image'
import './basket.css'
import RemoveFromCart from '@/src/components/removeFromCart'
import AddOrder from '@/src/components/AddOrder'


// const getUserbyEmail = async (email) => {
//     const apiUrl = process.env.API_URL

//     try {
//         const res = await fetch(`${apiUrl}/api/users/${email}`, {
//             cache: "no-store",
//         })

//         if (!res.ok) {
//             throw new Error('Cannot fetch the item api')
//         }

//         return res.json()
//     } catch (error) {
//         console.log('err', error);
//     }
// }

export default function basket({ searchParams }) {
    const [cart, setCart] = useState([])
    const { status, data: session } = useSession()
    const email = searchParams.email
    useEffect(() => {
        const cartFromLS = localStorage.getItem('CartItems')
        if (cartFromLS) {
            setCart(JSON.parse(cartFromLS))
        }
    }, [])
    let totalPrice = 0
    for (let i = 0; i < cart.length; i++) {
        totalPrice += (cart[i].price * cart[i].quantity)
    }

  return (
      <>
          <Title title={'Basket'} />
          <section id="basket">
              <div className="items">
                  {cart.length > 0 && cart.map((item , index) => (
                      <div className="item" key={item._id}>
                          <Image src={item.image} width={100} height={70} alt={item.title} />
                          <h3>{item.title}</h3>
                          <h3>{item.quantity} KG</h3>
                          <h4>{item.price * item.quantity} EGP</h4>
                          <RemoveFromCart email={email} item={item} index={index} />
                      </div>
                  ))}
              </div>
              <AddOrder totalPrice={totalPrice} />
          </section>
      </>
  )
}
