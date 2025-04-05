'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { sign } from 'crypto'
// import { useStore } from '@/store/useStore'

export default function Navbar() {
  //   const { user, logout } = useStore()
  const session = useSession()

  return (
    <div className='w-full border-b shadow-sm bg-white sticky top-0 z-50'>
      {JSON.stringify(session)}
      <div className='max-w-7xl mx-auto px-4 py-3 flex justify-between items-center'>
        <Link
          href='/'
          className='text-xl font-bold text-black'
        >
          DevConnect
        </Link>

        <NavigationMenu>
          <NavigationMenuList className='flex space-x-4'>
            <NavigationMenuItem>
              <Link
                href='/'
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className='nav-link'>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href='/developers'
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className='nav-link'>
                  Developers
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href='/blogs'
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className='nav-link'>
                  Blogs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href='/jobs'
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className='nav-link'>
                  Jobs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* {user && (
              <NavigationMenuItem>
                <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
                <NavigationMenuContent className='p-4 bg-white rounded shadow'>
                  <ul className='space-y-2'>
                    <li>
                      <Link href='/dashboard'>
                        <span className='block px-2 py-1 hover:bg-gray-100 rounded'>
                          Dashboard
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href={`/profile/${user.username}`}>
                        <span className='block px-2 py-1 hover:bg-gray-100 rounded'>
                          My Profile
                        </span>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            )} */}

            <NavigationMenuItem>
              {/* {user ? (
                <button
                  onClick={logout}
                  className='nav-link text-red-500'
                >
                  Logout
                </button>
              ) : ( */}
              {/* <Link
                href='/login'
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className='nav-link'>
                  Login
                </NavigationMenuLink>
              </Link> */}

              <button
                onClick={() => signIn()}
                className='nav-link cursor-pointer'
              >
                {' '}
                <NavigationMenuLink>Login</NavigationMenuLink>
              </button>

              {/* )} */}
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button
                onClick={() => signOut()}
                className='nav-link cursor-pointer'
              >
                {' '}
                <NavigationMenuLink>Logout</NavigationMenuLink>
              </button>

              {/* )} */}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}
