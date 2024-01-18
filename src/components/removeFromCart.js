'use client'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

export default function RemoveFromCart({ item, index }) {
    const [cart, setCart] = useState([])
    const { status, data: session } = useSession()
    useEffect(() => {
        const cartFromLs = localStorage.getItem('CartItems')
        if (cartFromLs) {
            setCart(JSON.parse(cartFromLs))
        }
    }, [])

    const removeItem = async () => {
        const apiUrl = process.env.API_URL
        const basket = item
        const confirmed = confirm('Do you want delete this item ?')
        if (confirmed) {
            if (status === 'authenticated') {


                try {
                    const res = await fetch(`/api/users/${session?.user?.email}`, {
                        method: 'PATCH',
                        headers: {
                            "Content-type": 'application/json'
                        },
                        body: JSON.stringify({ basket })
                    })

                    if (res.ok) {
                        location.reload()
                    }

                } catch (error) {
                    console.log(error);
                }
            }
            const updateCart = [...cart]
            updateCart.splice(index, 1)
            setCart(updateCart)
            localStorage.setItem('CartItems', JSON.stringify(updateCart))
            location.reload()
        }
    }

    return (
        <button onClick={() => removeItem()}>Cancel</button>
    )
}
