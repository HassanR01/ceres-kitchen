'use client'
import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function SendToBasket({ title, price , image }) {
    const { status, data: session } = useSession()
    const [quantity, setQuantity] = useState("")
    const basket = { quantity, title, price , image }
    price = price * quantity
    const router = useRouter()
    const sendOrderToBasket = async (e) => {
        e.preventDefault()

        if (!quantity || !title || !price || !image) {
            alert('Quantity is required!')
        } else {

            try {
                const res = await fetch(`/api/users/${session?.user?.email}`, {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({ basket }),
                })

                if (!res.ok) {
                    throw new Error("Cannot add the Item")
                } else {
                    location.replace(`/basket/${session?.user?.email}`)
                }

            } catch (error) {
                console.log(error);
            }
        }

    }

    if (status === 'authenticated') {

        return (
            <>
                <form onSubmit={sendOrderToBasket}>
                    <div className="quantity">
                        <h4>Quantity:</h4>
                        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="0" min={1} max={1000} />
                        <span>KG</span>
                    </div>
                    <h5>{price} EGP</h5>
                    <button>
                        Add To Basket
                    </button>
                </form>
            </>
        )
    } else {
        return (
            <>
                <Link href={'/log_in'}>Sign In To Order</Link>
            </>
        )
    }
}
