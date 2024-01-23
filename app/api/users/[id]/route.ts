/** Resources:
 *  - https://nextjs.org/docs/app/building-your-application/routing/defining-routes
 *  - https://nextjs.org/docs/api-routes/introduction
 *  - https://www.prisma.io/docs/orm/prisma-schema
 */

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const GET = async (request: Request) => {
  console.log('** GET /users/:id/issues');
  const user = await prisma.user.findFirst();
  return NextResponse.json({ message: 'ok', status: 200, data: user });
};

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const id = params.id;
    const json = await request.json();

    const user = await prisma.user.update({
      where: { id },
      data: json,
    });

    return new NextResponse(JSON.stringify(user), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
};
