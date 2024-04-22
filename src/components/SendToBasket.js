'use client'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

export default function SendToBasket({ title, price, image }) {
    const [Cart, setCart] = useState([])
    const { status, data: session } = useSession()
    const [quantity, setQuantity] = useState(1)
    const [alerting, setalerting] = useState('')
    const basket = { quantity, title, price, image }
    price = price * quantity

    useEffect(() => {
        const cartFromLS = localStorage.getItem('CartItems')
        if (cartFromLS) {
            setCart(JSON.parse(cartFromLS))
        }
    }, [])

    const increase = () => {
        setQuantity(quantity + 1)
        setalerting('')
    }

    const decrease = () => {
        setQuantity(quantity - 1)
    }


    const sendOrderToBasket = async (e) => {
        e.preventDefault()

        if (quantity <= 0 || !title || !price || !image) {
            setalerting("Quantity is required!")
        } else {

            if (status === 'authenticated') {
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
                        location.replace(`/basket?email=${session?.user?.email}`)
                    }
                    
                } catch (error) {
                    console.log(error);
                }
                
            }
            
            const updatCart = [...Cart, basket]
            setCart(updatCart)
            console.log(basket);
            localStorage.setItem('CartItems', JSON.stringify(updatCart))
            location.replace(`/basket?email=${session?.user?.email}`)
            setQuantity('')
        }
    }

    return (
        <>
            <form onSubmit={sendOrderToBasket}>
                <div className="quantity">
                    <span className='DIBtn' onClick={() => decrease()}>-</span><input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="0" min={1} max={1000} /><span>KG</span><span className='DIBtn' onClick={() => increase()}>+</span>
                </div>
                <h3>{ alerting }</h3>
                <h5>{price} EGP</h5>
                <button>Add To Basket</button>
            </form>
        </>
    )
}
