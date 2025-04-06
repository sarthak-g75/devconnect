import prisma from '@/lib/prisma'

export const revalidate = 10

export async function getBlogs() {
  try {
    const blogs = await prisma.blog.findMany()
    return blogs
  } catch (error) {
    console.error('Error fetching blogs:', error)
    // You can also throw a custom error if needed
    throw new Error('Failed to fetch blogs.')
  }
}
