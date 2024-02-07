import Item from "../../../../../models/items";
import connectMongoDB from "../../../../../libs/mongodb";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { itemId } = params;
    const { new_id: _id, newimage: image, newtitle: title, newtitleAr: titleAr, newdescription: description, newprice: price, newcategory: category, newstatus: status } = await request.json();
    await connectMongoDB();
    await Item.findByIdAndUpdate(itemId, { _id, image, title, titleAr, description, price, category, status })
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
