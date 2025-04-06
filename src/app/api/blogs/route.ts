import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const blogs = await prisma.blog.findMany()
  return NextResponse.json(
    { message: 'Blogs fetched successfully', blogs },
    { status: 200 }
  )
}
