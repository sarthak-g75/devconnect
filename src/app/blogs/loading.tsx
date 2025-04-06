// src/app/blogs/loading.tsx
export default function Loading() {
  return (
    <div className='max-w-3xl mx-auto py-8'>
      <h1 className='text-2xl font-semibold mb-4'>Loading Blogs...</h1>
      <div className='space-y-4'>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className='animate-pulse border p-4 rounded shadow bg-gray-100'
          >
            <div className='h-4 bg-gray-300 rounded w-1/3 mb-2'></div>
            <div className='h-3 bg-gray-200 rounded w-full'></div>
          </div>
        ))}
      </div>
    </div>
  )
}
