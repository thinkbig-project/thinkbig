/** Resources:
 *  - https://nextjs.org/docs/app/building-your-application/routing/defining-routes
 *  - https://nextjs.org/docs/api-routes/introduction
 *  - https://www.prisma.io/docs/orm/prisma-schema
 */

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request, { params }: any) {
  console.log('** GET /users/:id');
  const user = await prisma.user.findFirst();
  return NextResponse.json(user);
}
