import Item from "../../../../../models/items";
import connectMongoDB from "../../../../../libs/mongodb";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { itemId } = params;
    const { newTitle: title, newDescripiton: description } = await request.json();
    await connectMongoDB();
    await Item.findByIdAndUpdate(itemId, { title, description })
    return NextResponse.json({ message: 'Item Updated' }, { status: 200 })
}

export async function GET(request, { params }) {
    const { itemId } = params;
    await connectMongoDB();
    const item = await Item.findOne({ _id: itemId });
    return NextResponse.json({ item }, { status: 200 });
}

export async function DELETE(request, { params }) {
    const { itemId } = params;
    await connectMongoDB()
    await Item.findByIdAndDelete(itemId)
    return NextResponse.json({ message: "Item Deleted" }, { status: 200 })
}