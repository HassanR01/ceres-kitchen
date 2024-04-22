import connectMongoDB from "@/libs/mongodb";
import User from "@/models/users";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {

            if (account.provider === 'google') {
                const { name, email, orders, basket, passwrord, role } = user
                const apiUrl = process.env.API_URL
                try {
                    await connectMongoDB();
                    const userExist = await User.findOne({ email })

                    if (!userExist) {

                        const res = await fetch(`${apiUrl}/api/users`, {
                            method: "POST",
                            headers: {
                                "Content-type": "applicaiton/json"
                            },
                            body: JSON.stringify({
                                name, email, orders, basket, passwrord, role
                            }),
                        });
                        if (res.ok) {
                            return user
                        }
                    }
                } catch (error) {
                    console.log(error);
                }
            }

            return user
        }
    }
};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }