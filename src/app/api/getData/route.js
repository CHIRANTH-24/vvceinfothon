import { NextResponse } from "next/server";
import db from "../../../../configs/db";
import { eq } from "drizzle-orm";
import { IOT_TABLE } from "../../../../configs/schema";

export async function POST(req) {
  const result = await db
    .select()
    .from(IOT_TABLE)
    .where(eq(IOT_TABLE.name, "Chiranth"));
  return NextResponse.json({ result: result });
}

export async function GET(req) {
  const course = await db
    .select()
    .from(IOT_TABLE)
    .where(eq(IOT_TABLE?.name, "Chiranth"));
  return NextResponse.json({ result: course[0] });
}
