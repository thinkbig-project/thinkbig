import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const GET = async (request: Request) => {
  console.log('** GET /users');
  const users = await prisma.user.findMany();
  return NextResponse.json({ message: 'ok', status: 200, data: users });
};
