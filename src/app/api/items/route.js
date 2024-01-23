import connectMongoDB from "../../../../libs/mongodb";
import Item from "../../../../models/items";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { _id, image, title, titleAr, description, price, category } = await request.json();
    await connectMongoDB();
    await Item.create({ _id, image, title, titleAr, description, price, category });
    return NextResponse.json({ message: 'Item Created' }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const items = await Item.find();
    return NextResponse.json({ items });
}

