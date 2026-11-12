import { NextResponse } from "next/server";
import { getShoots } from "@/lib/shoots";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(getShoots());
}
