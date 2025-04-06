'use server'
import prisma from '@/lib/prisma'
import bcrypt from 'bcryptjs'
export async function createUser(formData: {
  email: string
  password: string
  name: string
}) {
  if (!formData.email || !formData.password || !formData.name) {
    throw new Error('All fields are required')
  }
  const hashedPassword = await bcrypt.hash(formData.password, 10)
  const user = await prisma.user.create({
    data: {
      email: formData.email,
      password: hashedPassword,
      name: formData.name,
    },
  })
  return user
}
