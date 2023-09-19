import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json("Obteniendo un producto");
}

export function PUT() {
  return NextResponse.json("Actualizando un producto");
}

export function DELETE() {
  return NextResponse.json("Eliminando un producto");
}
