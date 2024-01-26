import User from "../../../../../models/users";
import connectMongoDB from "../../../../../libs/mongodb";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { email } = params;
    const { orders, basket, name, passwrord, role } = await request.json();
    await connectMongoDB();
    await User.findOneAndUpdate({ email: email }, { $addToSet: {orders}, $push : {basket}, name, passwrord, role })
    return NextResponse.json({ message: 'User Updated' }, { status: 200 })
}

export async function PATCH(request, { params }) {
    const { email } = params;
    const { orders, basket, name, passwrord, role } = await request.json();
    await connectMongoDB();
    await User.findOneAndUpdate({ email: email }, { $pull: { orders }, $pull: { basket }, name, passwrord, role })
    return NextResponse.json({ message: 'User Updated' }, { status: 200 })
}

export async function GET(request, { params }) {
    const { email } = params;
    await connectMongoDB();
    const user = await User.findOne({ email: email });
    return NextResponse.json({ user }, { status: 200 });
}

export async function DELETE(request, { params }) {
    const { email } = params;
    await connectMongoDB()
    await User.findOneAndDelete({email : email})
    return NextResponse.json({ message: "User Deleted" }, { status: 200 })
}