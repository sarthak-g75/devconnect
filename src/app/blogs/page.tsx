// src/app/blogs/page.tsx
import Link from 'next/link'
import React from 'react'
import { getBlogs } from '@/app/actions/getBlogs'

type Blog = {
  id: string
  title: string
  content: string
}

const BlogsPage = async () => {
  //   const res = await fetch('http://localhost:3000/api/blogs', {
  //     next: { revalidate: 5 }, // disables caching so it's server-side every request (like getServerSideProps)
  //   })
  //   const response = await res.json()
  //   console.log(response)
  const blogs: Blog[] = await getBlogs()

  return (
    // <div>hello</div>
    <div className='max-w-3xl mx-auto py-8'>
      <h1 className='text-3xl font-bold mb-6'>Blogs</h1>
      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id}>
            <Link
              href={`/blog/${blog.id}`}
              className='border p-4 rounded mb-4 '
            >
              <h2 className='text-xl font-semibold'>{blog.title}</h2>
              <p className='mt-2'>{blog.content}</p>
            </Link>
          </div>
        ))
      )}
    </div>
  )
}

export default BlogsPage
