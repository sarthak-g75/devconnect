'use client'

import { useForm } from 'react-hook-form'
import { useTransition, useState } from 'react'
import { createBlog } from '@/app/actions/CreateBlog' // update the import path if needed

type FormData = {
  title: string
  content: string
}
export default function CreateBlogForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()
  console.log('hello')
  const [isPending, startTransition] = useTransition()
  const [errorMessage, setErrorMessage] = useState('')
  const [success, setSuccess] = useState(false)

  const submitHandler = (data: FormData) => {
    startTransition(async () => {
      try {
        await createBlog({
          title: data.title,
          content: data.content,
        })
        setSuccess(true)
        reset()
        setErrorMessage('')
      } catch (error: any) {
        setErrorMessage(error.message)
        setSuccess(false)
      }
    })
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className='max-w-xl mx-auto p-4 space-y-4'
    >
      <div>
        <label className='block mb-1 font-medium'>Title</label>
        <input
          type='text'
          {...register('title', { required: 'Title is required' })}
          className='w-full border border-gray-300 rounded-md px-3 py-2'
        />
        {errors.title && (
          <p className='text-red-500 text-sm'>{errors.title.message}</p>
        )}
      </div>

      <div>
        <label className='block mb-1 font-medium'>Content</label>
        <textarea
          {...register('content', { required: 'Content is required' })}
          className='w-full border border-gray-300 rounded-md px-3 py-2 h-40'
        />
        {errors.content && (
          <p className='text-red-500 text-sm'>{errors.content.message}</p>
        )}
      </div>

      <button
        type='submit'
        disabled={isPending}
        className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50'
      >
        {isPending ? 'Submitting...' : 'Create Blog'}
      </button>

      {errorMessage && <p className='text-red-600 mt-2'>{errorMessage}</p>}
      {success && (
        <p className='text-green-600 mt-2'>Blog created successfully!</p>
      )}
    </form>
  )
}
