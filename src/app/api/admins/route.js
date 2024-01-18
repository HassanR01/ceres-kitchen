import Admins from "@/models/admins";
import connectMongoDB from "../../../../libs/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { email } = await request.json();
    await connectMongoDB();
    await Admins.create({ email });
    return NextResponse.json({ message: 'Admin Created' }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const admin = await Admins.find();
    return NextResponse.json({ admin });
}

export async function DELETE(request) {
    const email = request.nextUrl.searchParams.get("email")
    await connectMongoDB()
    await Admins.findOneAndDelete({ email : email })
    return NextResponse.json({ message: "User Deleted" }, { status: 200 })
}