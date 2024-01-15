'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export default function AddReview() {
    const { status, data: session } = useSession()

    if (status === "authenticated") {
        return (
            <>
                <div className='addReview'>
                    <h3><span>Name:</span> {session?.user?.name}</h3>
                    <h3><span>Email:</span> {session?.user?.email}</h3>
                    <form>
                        <input type="text" placeholder='Do You Want To Add A Title?' />
                        <textarea cols="30" rows="10" placeholder='We are waiting for your nice review 😊'></textarea>
                        <button>Send Review</button>
                    </form>
                </div>
            </>
        )
    } else {
        return (
            <>
                <Link href={'/log_in'}>Sign in To Add Review</Link>
            </>
        )
    }

}
