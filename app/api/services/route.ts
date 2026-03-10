import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Service from "@/models/Service";

export async function GET() {
  try {
    await dbConnect();
    const services = await Service.find().sort({ order: 1, createdAt: -1 });
    return NextResponse.json(services);
  } catch (error) {
    console.error("Get services error:", error);
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
    const { title, description, features, icon, image, order } = body;

    if (!title || !description || !icon) {
      return NextResponse.json(
        { error: "Title, description, and icon are required" },
        { status: 400 }
      );
    }

    const service = new Service({
      title,
      description,
      features: features || [],
      icon,
      image,
      order: order || 0,
    });

    await service.save();

    return NextResponse.json(service, { status: 201 });
  } catch (error) {
    console.error("Create service error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}