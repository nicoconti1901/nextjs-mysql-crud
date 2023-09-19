import { NextResponse } from "next/server";
import {conn} from "@/libs/mysql";

export async function GET() {
  const results = await conn.query("SELECT NOW()");
  console.log(results);
  return NextResponse.json("Hello World");
}

