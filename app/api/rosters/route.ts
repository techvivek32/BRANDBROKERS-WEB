import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Roster from "@/models/Roster";

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const featured = searchParams.get("featured");
    const limit = searchParams.get("limit");
    const category = searchParams.get("category");

    let query = {};
    if (featured === "true") {
      query = { ...query, featured: true };
    }
    if (category) {
      query = { ...query, category };
    }

    let rostersQuery = Roster.find(query).sort({ order: 1, createdAt: -1 });
    
    if (limit) {
      rostersQuery = rostersQuery.limit(parseInt(limit));
    }

    const rosters = await rostersQuery;
    return NextResponse.json(rosters);
  } catch (error) {
    console.error("Get rosters error:", error);
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
    const { name, platform, followers, category, bio, image, socialLinks, featured, order } = body;

    if (!name || !platform || !followers || !category || !image) {
      return NextResponse.json(
        { error: "Name, platform, followers, category, and image are required" },
        { status: 400 }
      );
    }

    const roster = new Roster({
      name,
      platform,
      followers,
      category,
      bio,
      image,
      socialLinks: socialLinks || {},
      featured: featured || false,
      order: order || 0,
    });

    await roster.save();

    return NextResponse.json(roster, { status: 201 });
  } catch (error) {
    console.error("Create roster error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}