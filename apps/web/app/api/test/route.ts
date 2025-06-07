import api from "@repo/api-client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await api.get("/test");
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
