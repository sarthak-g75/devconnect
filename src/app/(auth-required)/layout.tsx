import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import Link from 'next/link'
import React from 'react'

export default async function AuthRequiredLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center text-center p-4'>
        <h1 className='text-2xl font-semibold mb-4'>
          🚫 Not allowed without authentication
        </h1>
        <Link
          href='/signin'
          className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
        >
          Login to Continue
        </Link>
      </div>
    )
  }

  return <>{children}</>
}
