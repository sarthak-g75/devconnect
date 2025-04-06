'use client'

import { useForm } from 'react-hook-form'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
// import { createUser } from '@/app/actions/CreateUser'
import { signIn } from 'next-auth/react'
import { useEffect } from 'react'

type FormValues = {
  // name: string
  email: string
  password: string
}

export default function SignupPage() {
  const router = useRouter()
  const session = useSession()
  useEffect(() => {
    if (session.status === 'authenticated') {
      router.push('/')
    }
  }, [session])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  // console.log(session)
  const onSubmit = async (data: FormValues) => {
    console.log('Form Submitted:', data)
    try {
      // const user = await createUser(data)
      const res = await signIn('credentials', {
        redirect: true, // Or false if you want to handle manually
        email: data.email,
        password: data.password,
        callbackUrl: '/', // Redirect after login
      })

      // console.log(res)
      // console.log(user)
    } catch (error) {
      console.log(error)
    }
    // You can call your API here (e.g., axios.post('/api/signup', data))
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
      <div className='max-w-md w-full bg-white p-8 rounded-xl shadow-lg'>
        <h2 className='text-2xl font-bold text-center mb-6'>
          Create an Account
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='space-y-4'
        >
          <div>
            <label className='block text-sm font-medium'>Email</label>
            <input
              type='email'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: 'Invalid email address',
                },
              })}
              className='mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
            />
            {errors.email && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium'>Password</label>
            <input
              type='password'
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Minimum 6 characters required',
                },
              })}
              className='mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
            />
            {errors.password && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type='submit'
            className='w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition'
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}
