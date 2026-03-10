import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Client from "@/models/Client";

export async function GET() {
  try {
    await dbConnect();
    const clients = await Client.find().sort({ order: 1, createdAt: -1 });
    return NextResponse.json(clients);
  } catch (error) {
    console.error("Get clients error:", error);
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
    const { name, logo, website, order } = body;

    if (!name || !logo) {
      return NextResponse.json(
        { error: "Name and logo are required" },
        { status: 400 }
      );
    }

    const client = new Client({
      name,
      logo,
      website,
      order: order || 0,
    });

    await client.save();

    return NextResponse.json(client, { status: 201 });
  } catch (error) {
    console.error("Create client error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}