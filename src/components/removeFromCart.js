'use client'
import React from 'react'

export default function RemoveFromCart({ email, item }) {
    const removeItem = async () => {
        const apiUrl = process.env.API_URL
        const basket = item
        const confirmed = confirm('Do you want delete this item ?')
        if (confirmed) {
            try {
                const res = await fetch(`/api/users/${email}`, {
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
    }

    return (
        <button onClick={() => removeItem()}>Cancel</button>
    )
}
