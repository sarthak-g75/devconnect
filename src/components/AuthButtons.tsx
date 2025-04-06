'use client'

import { signIn, signOut } from 'next-auth/react'
import { Session } from 'next-auth'
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'

export default function AuthButtons({ session }: { session: Session | null }) {
  if (!session) {
    return (
      <NavigationMenuItem>
        <button
          onClick={() => signIn()}
          className='nav-link cursor-pointer'
        >
          <NavigationMenuLink>Login</NavigationMenuLink>
        </button>
      </NavigationMenuItem>
    )
  }

  return (
    <NavigationMenuItem>
      <button
        onClick={() => signOut()}
        className='nav-link cursor-pointer'
      >
        <NavigationMenuLink>Logout</NavigationMenuLink>
      </button>
    </NavigationMenuItem>
  )
}
