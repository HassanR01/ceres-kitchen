import React from 'react'

export default function AddOrder({ totalPrice }) {
    return (
        <>
            <div className="orderNow">
                <form>
                    <input type="text" name='address' placeholder='Your Address' />
                    <input type="tel" name='telephone' placeholder='Phone Number'/>
                    <h2>{totalPrice} EGP</h2>
                    <button>Order Now!</button>
                </form>
            </div>
        </>
    )
}
