import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import CaseStudy from "@/models/CaseStudy";

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const featured = searchParams.get("featured");
    const limit = searchParams.get("limit");

    let query = {};
    if (featured === "true") {
      query = { featured: true };
    }

    let caseStudiesQuery = CaseStudy.find(query).sort({ order: 1, createdAt: -1 });
    
    if (limit) {
      caseStudiesQuery = caseStudiesQuery.limit(parseInt(limit));
    }

    const caseStudies = await caseStudiesQuery;
    return NextResponse.json(caseStudies);
  } catch (error) {
    console.error("Get case studies error:", error);
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
    const { title, client, description, strategy, results, images, stats, featured, order } = body;

    if (!title || !client || !description) {
      return NextResponse.json(
        { error: "Title, client, and description are required" },
        { status: 400 }
      );
    }

    const caseStudy = new CaseStudy({
      title,
      client,
      description,
      strategy,
      results,
      images: images || [],
      stats: stats || [],
      featured: featured || false,
      order: order || 0,
    });

    await caseStudy.save();

    return NextResponse.json(caseStudy, { status: 201 });
  } catch (error) {
    console.error("Create case study error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}