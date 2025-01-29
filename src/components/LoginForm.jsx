"use client"
import Image from 'next/image';
import { useState } from 'react';
import { signIn } from 'next-auth/react';


export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        console.log('Email:', email);
        console.log('Password:', password);

        // Reset the form
        setEmail('');
        setPassword('');
    };

    return (
        <>
            <form onSubmit={handleLogin}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your Email' />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Your Password' />
                <br />
                <button type="submit">Submit</button>
            </form>
            <button onClick={() => signIn('google')}>
                <Image src={'/Google.gif'} width={30} height={30} alt='google icon gif' />
                <p>
                    Login With Google Account
                </p>
            </button>
        </>
    )
}
