import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Team from "@/models/Team";

export async function GET() {
  try {
    await dbConnect();
    const team = await Team.find().sort({ order: 1, createdAt: -1 });
    return NextResponse.json(team);
  } catch (error) {
    console.error("Get team error:", error);
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
    const { name, role, email, linkedin, image, bio, order } = body;

    if (!name || !role || !email || !image) {
      return NextResponse.json(
        { error: "Name, role, email, and image are required" },
        { status: 400 }
      );
    }

    const teamMember = new Team({
      name,
      role,
      email,
      linkedin,
      image,
      bio,
      order: order || 0,
    });

    await teamMember.save();

    return NextResponse.json(teamMember, { status: 201 });
  } catch (error) {
    console.error("Create team member error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}