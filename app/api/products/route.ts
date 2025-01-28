import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// GET all products
export async function GET() {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}

// POST a new product
export async function POST(request: Request) {
  const body = await request.json();
  const product = await prisma.product.create({ data: body });
  return NextResponse.json(product);
}