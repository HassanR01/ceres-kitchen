'use client'
import React from 'react'
import { signOut , useSession } from 'next-auth/react';
import Title from '@/src/components/Title';
import Link from 'next/link';
import Image from 'next/image';
import './profile.css'


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
                    </div>
                    <Link href={'/'} onClick={() => signOut()}>Log out</Link>
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
