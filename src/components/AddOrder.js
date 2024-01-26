'use client'
import { signIn, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

export default function AddOrder({ totalPrice }) {
    const { status, data: session } = useSession()
    const [Cart, setCart] = useState([])
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const items = Cart
    const person = {
        name: session?.user?.name,
        email: session?.user?.email,
    }
    const orders = { totalPrice, items }
    useEffect(() => {
        const cartFromLS = localStorage.getItem('CartItems')
        if (cartFromLS) {
            setCart(JSON.parse(cartFromLS))
        }
    }, [])
    
    
    const handelAddOrderForm = async (e) => {
        e.preventDefault()
        
        if (totalPrice !== 0 && phone && address) {
            if (status === 'authenticated') {
                const confermed = confirm('Are You Ready to send the order?')
                if (confermed) {   
                    try {
                        const res = await fetch('/api/orders', {
                            method: 'POST',
                            headers: {
                                "Content-type": "application/json"
                            },
                            body: JSON.stringify({ person, address, phone, items, totalPrice })
                        })

                        const resU = await fetch(`/api/users/${session?.user?.email}`, {
                            method: 'PUT',
                            headers: {
                                "Content-type": "application/json"
                            },
                            body: JSON.stringify({ orders })
                        })
                        
                        if (res.ok && resU.ok) {
                            localStorage.clear()
                            location.replace('/')
                        }
                        
                    } catch (error) {
                        console.log(error);
                    }
                }
            } else {
                signIn('google')
            }
        }
    }

    return (
        <>
            <div className="orderNow">
                <form onSubmit={handelAddOrderForm}>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} name='address' placeholder='Your Address' />
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} name='telephone' placeholder='Phone Number'/>
                    <h2>{totalPrice} EGP</h2>
                    <button>Order Now!</button>
                </form>
            </div>
        </>
    )
}
