import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
export default async function User() {
  const session = await getServerSession(authOptions)
  return <div>hello{JSON.stringify(session)}</div>
}
