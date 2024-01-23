import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const GET = async (request: Request) => {
  console.log('** GET /users/:id/issues/:slug');
  const issue = await prisma.issue.findFirst();
  return NextResponse.json({ message: 'ok', status: 200, data: issue });
};

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const id = params.id;
    const json = await request.json();

    const issue = await prisma.issue.update({
      where: { id },
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
