import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Testimonial from "@/models/Testimonial";

export async function GET() {
  try {
    await dbConnect();
    const testimonials = await Testimonial.find().sort({ order: 1, createdAt: -1 });
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error("Get testimonials error:", error);
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
    const { name, company, review, image, rating, order } = body;

    if (!name || !company || !review) {
      return NextResponse.json(
        { error: "Name, company, and review are required" },
        { status: 400 }
      );
    }

    const testimonial = new Testimonial({
      name,
      company,
      review,
      image,
      rating: rating || 5,
      order: order || 0,
    });

    await testimonial.save();

    return NextResponse.json(testimonial, { status: 201 });
  } catch (error) {
    console.error("Create testimonial error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}