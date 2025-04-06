import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { authOptions } from '@/lib/auth'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import AuthButtons from './AuthButtons'

export default async function Navbar() {
  const session = await getServerSession(authOptions)

  return (
    <div className='w-full border-b shadow-sm bg-white sticky top-0 z-50'>
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
                passHref
                legacyBehavior
              >
                <NavigationMenuLink className='nav-link'>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <Link
                href='/developers'
                passHref
                legacyBehavior
              >
                <NavigationMenuLink className='nav-link'>
                  Developers
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}
            <NavigationMenuItem>
              <Link
                href='/blogs'
                passHref
                legacyBehavior
              >
                <NavigationMenuLink className='nav-link'>
                  Blogs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href='/add-blog'
                passHref
                legacyBehavior
              >
                <NavigationMenuLink className='nav-link'>
                  Add Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <Link
                href='/jobs'
                passHref
                legacyBehavior
              >
                <NavigationMenuLink className='nav-link'>
                  Jobs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}

            {/* AuthButtons gets session as prop */}
            <AuthButtons session={session} />
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}
