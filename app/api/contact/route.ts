import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const contact = new Contact({
      name,
      email,
      subject,
      message,
    });

    await contact.save();

    return NextResponse.json(
      { message: "Contact form submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return NextResponse.json(contacts);
  } catch (error) {
    console.error("Get contacts error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}