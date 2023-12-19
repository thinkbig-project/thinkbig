import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  console.log('** GET /users');
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  console.log('** POST /users');
  return NextResponse.json({ Hello: 'World!' });
}
