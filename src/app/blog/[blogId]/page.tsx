import { getBlogById } from '@/app/actions/getBlogById'

const page = async ({ params }: { params: { blogId: string } }) => {
  try {
    const blog = await getBlogById(params.blogId)
    if (!blog)
      return (
        <div className='text-red-600 text-center py-10'>
          Blog not found or an error occurred.
        </div>
      )
    return (
      <div className='max-w-2xl mx-auto py-10'>
        <h1 className='text-3xl font-bold mb-4'>{blog.title}</h1>
        <p>{blog.content}</p>
      </div>
    )
  } catch (err) {
    return (
      <div className='text-red-600 text-center py-10'>
        Blog not found or an error occurred.
      </div>
    )
  }
}

export default page
