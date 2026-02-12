import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = 'force-dynamic';

export async function GET() {
  const dir = path.join(process.cwd(), "public/images/wedding-photos");
  const files = fs
    .readdirSync(dir)
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)?.[0] || "0");
      const numB = parseInt(b.match(/\d+/)?.[0] || "0");
      return numA - numB;
    });

  const images = files.map((file, i) => ({
    id: i + 1,
    src: `/images/wedding-photos/${file}`,
    alt: `Super 8 wedding photography ${i + 1} - Campbell Films Southern California`,
  }));

  return NextResponse.json(images);
}
