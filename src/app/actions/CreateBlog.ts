'use server'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { getServerSession } from 'next-auth'

export async function createBlog(formData: { title: string; content: string }) {
  const session = await getServerSession(authOptions)
  if (!session) {
    throw new Error('Not authenticated')
  }
  if (!formData.title || !formData.content) {
    throw new Error('All fields are required')
  }
  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  })
  if (!user) {
    throw new Error('User not Authenticated')
  }
  const blog = await prisma.blog.create({
    data: {
      title: formData.title,
      content: formData.content,
      authorId: session.user.id,
    },
  })
  return blog
}
