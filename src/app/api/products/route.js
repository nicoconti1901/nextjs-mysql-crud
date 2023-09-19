import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export function GET() {
  return NextResponse.json("Listando productos");
}

export async function POST(request) {
  try {
    const { name, description, price } = await request.json();

    const result = await conn.query("INSERT INTO product SET ?", {
      name,
      description,
      price,
    });
    
    return NextResponse.json({
      name,
      description,
      price,
      id: result.insertId,
    }

    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
