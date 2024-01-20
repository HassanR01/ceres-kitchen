'use client'
import { signIn, useSession } from 'next-auth/react'
import React from 'react'

export default function AddOrder({ totalPrice }) {
    const { status, data: session } = useSession()
    
    const handelAddOrderForm = async (e) => {
        e.preventDefault()

        if (totalPrice !== 0) {
            if (status === 'authenticated') {
                try {

                } catch (error) {
                    console.log(error);
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
                    <input type="text" name='address' placeholder='Your Address' />
                    <input type="tel" name='telephone' placeholder='Phone Number'/>
                    <h2>{totalPrice} EGP</h2>
                    <button>Order Now!</button>
                </form>
            </div>
        </>
    )
}
