import User from "@/models/users";
import connectMongoDB from "../../../../libs/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { email, _id, name, orders, basket, passwrord, role  } = await request.json();
    await connectMongoDB();
    await User.create({ email, name, _id, orders, basket, passwrord, role });
    return NextResponse.json({ message: 'User Added' }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const user = await User.find();
    return NextResponse.json({ user });
}
