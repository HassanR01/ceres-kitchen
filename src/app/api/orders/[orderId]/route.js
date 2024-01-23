import Order from "../../../../../models/orders";
import connectMongoDB from "../../../../../libs/mongodb";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { orderId } = params;
    const { newperson: person, newaddress: address, newphone: phone, newitems: items, newtotalPrice: totalPrice } = await request.json();
    await connectMongoDB();
    await Order.findByIdAndUpdate(orderId, { person, address, phone, items, totalPrice })
    return NextResponse.json({ message: 'Order Updated' }, { status: 200 })
}

export async function GET(request, { params }) {
    const { orderId } = params;
    await connectMongoDB();
    const order = await Order.findOne({ _id: orderId });
    return NextResponse.json({ order }, { status: 200 });
}

export async function DELETE(request, { params }) {
    const { orderId } = params;
    await connectMongoDB()
    await Order.findByIdAndDelete(orderId)
    return NextResponse.json({ message: "Order Deleted" }, { status: 200 })
}
