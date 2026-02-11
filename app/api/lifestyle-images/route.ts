import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const dir = path.join(process.cwd(), "public/images/lifestyle");
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
    src: `/images/lifestyle/${file}`,
    alt: `Film photography lifestyle portrait ${i + 1} - Campbell Films Southern California`,
  }));

  return NextResponse.json(images);
}
