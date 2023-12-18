import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request, { params }: any) {
  console.log('** GET /users/:id');
  const user = await prisma.user.findFirst();
  return NextResponse.json(user);
}
