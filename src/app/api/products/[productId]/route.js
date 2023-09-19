import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export async function GET(request, { params }) {
  try {
    const result = await conn.query("SELECT * FROM product WHERE id = ?", [
      params.productId,
    ]);

    if (!result.lenght) {
      return NextResponse.json(
        {
          message: "Product not found",
        },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json(result[0]);
  } catch {
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

export function PUT() {
  return NextResponse.json("Actualizando un producto");
}

export async function DELETE(request, { params }) {
  try {
    const result = await conn.query("DELETE FROM product WHERE id = ?", [
      params.productId,
    ]);
    if (!result.affectedRows) {
      return NextResponse.json(
        {
          message: "Product not found",
        },
        {
          status: 404,
        }
      );
    }
    return new Response(null, {
      status: 204,
    });
  } catch (error) {
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
