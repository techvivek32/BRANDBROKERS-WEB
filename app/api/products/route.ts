import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET() {
  try {
    await dbConnect();
    const products = await Product.find().sort({ order: 1, createdAt: -1 });
    return NextResponse.json(products);
  } catch (error) {
    console.error("Get products error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { name, description, image, price, link, order } = body;

    if (!name || !description || !image) {
      return NextResponse.json(
        { error: "Name, description, and image are required" },
        { status: 400 }
      );
    }

    const product = new Product({
      name,
      description,
      image,
      price,
      link,
      order: order || 0,
    });

    await product.save();

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Create product error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}