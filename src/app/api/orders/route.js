import connectMongoDB from "@/libs/mongodb";
import Order from "@/models/orders";
import { NextResponse } from "next/server";

export async function POST(request){
    const { person, address, phone, totalPrice, items } = await request.json()
    await connectMongoDB()
    await Order.create({ person, address, phone, totalPrice, items })
    return NextResponse.json({message: 'Order Created'} , {status: 201})
}

export async function GET() {
    await connectMongoDB()
    const orders = await Order.find()
    return NextResponse.json({ orders })
}

