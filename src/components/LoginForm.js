"use client"
import Image from 'next/image';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
// import User from '@/models/users';
// import connectMongoDB from '@/libs/mongodb';
// import { useRouter } from 'next/router';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        // if (!email, !password) {
        //     alert('Email And Password Are Required!')
        //     return
        // } else {
        //     await connectMongoDB();
        //     const userExist = await User.findOne({ email })

        //     if (!userExist) {
        //         const res = await fetch('/api/users', {
        //             method: "POST",
        //             headers: {
        //                 "Content-type": "applicaiton/json"
        //             },
        //             body: JSON.stringify({
        //                 email,
        //                 password,
        //             }),
        //         });

        //         if (res.ok) {
        //             useRouter().push(`/profile/${email}`)
        //         } else {
        //             throw new Error('Faild To Create The Order')
        //         }
        //     }

        // }

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
                Login With Google Account
            </button>
        </>
    )
}
