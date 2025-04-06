import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'john.doe@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied

        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        })
        // console.log(user)
        if (user) {
          const passwordCheck = await bcrypt.compare(
            credentials?.password as string,
            user.password
          )
          if (passwordCheck) {
            return user
          }
          return null
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, account, profile }: any) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token
        // token.userId = token.sub
      }
      // console.log(token)
      return token
    },
    async session({
      session,
      token,
      user,
    }: {
      session: any
      token: any
      user: any
    }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.user.id = token.sub
      session.accessToken = token.accessToken

      // console.log(session)

      return session
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
  pages: {
    signIn: '/signin',
    signOut: '/',
  },
}
