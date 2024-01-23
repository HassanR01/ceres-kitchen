import React from 'react'

export default function OrdersList({ email }) {
    let Arr = [1,3,2]
    return (
        <>
            {Arr.length > 0 && Arr.map((ar, index) => (

                <div className='order'>
                    <h3>#{index + 1}</h3>
                    <h3>2 Items</h3>
                    <h3>22-1-2024</h3>
                    <h3 style={{ color: "#00ff00"}}>5000 EGP</h3>
                    <h3>Delivered</h3>
                </div>
            ))}
            {Arr.length === 0 && (<h3>No Orders Added</h3>)}
        </>
    )
}
