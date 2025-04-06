import prisma from '@/lib/prisma' // or your db file

export async function getBlogById(id: string) {
  if (!id) return null

  const blog = await prisma.blog.findUnique({
    where: { id },
  })

  if (!blog) return null

  return blog
}
