'use client'
import React from 'react'
import { signOut, useSession } from 'next-auth/react';
import Title from '@/src/components/Title';
import Link from 'next/link';
import Image from 'next/image';
import './profile.css'
import OrdersList from '@/src/components/OrdersList';


export default function ManageAccount() {
    const { status, data: session } = useSession();
    if (status === 'authenticated') {

        return (
            <>
                <Title title={'Profile'} />
                <section id='profileInfo'>
                    <div className="info">
                        <Image src={session?.user?.image} width={120} height={120} alt="personal Image" />
                        <h3>{session?.user?.name}</h3>
                        <h5>{session?.user?.email}</h5>
                        <div className='orderslist'>
                            <h2>Orders</h2>
                            <div className='evid'>
                                <h3>ID</h3>
                                <h3>Items</h3>
                                <h3>Date</h3>
                                <h3>Price</h3>
                                <h3>Status</h3>
                            </div>
                            <div className='orders' >
                                <OrdersList email={session?.user?.email} />
                            </div>
                        </div>
                    </div>
                    <Link href={'/'} onClick={() => confirm('Do you Want to Sign out ?') ? signOut(): null}>Log out</Link>
                </section>
            </>
        )
    } else {

        return (
            <>
                <Title title={'Profile'} />
                <section id="profileInfo">
                    <h2>Sign In To Show Your Data!</h2>
                </section>
            </>
        )
    }

}
