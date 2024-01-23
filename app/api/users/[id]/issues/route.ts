import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const GET = async (request: Request) => {
  console.log('** GET /users/:id/issues');
  const issues = await prisma.issue.findMany();
  return NextResponse.json({ message: 'ok', status: 200, data: issues });
};

export const POST = async (request: Request) => {
  try {
    const json = await request.json();

    const issue = await prisma.issue.create({
      data: json,
    });

    return new NextResponse(JSON.stringify(issue), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
};
