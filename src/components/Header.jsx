'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function Header() {
  const pathname = usePathname()
 
  return (
    <nav className='bg-purple-200 flex justify-center items-center gap-5 py-2'>
      <Link className={`link ${pathname === '/' ? 'active underline text-white' : ''}`} href="/">
        Home
      </Link>
 
      <Link
        className={`link ${pathname === '/blogs' ? 'active underline text-white ' : ''}`}
        href="/blogs"
      >
        Blogs
      </Link>

      <Link
        className={`link ${pathname === '/quotes' ? 'active underline text-white ' : ''}`}
        href="/quotes"
      >
        Quotes
      </Link>


      <Link
        className={`link ${pathname === '/dashboard' ? 'active underline text-white' : ''}`}
        href="/dashboard"
      >
        Dashboard
      </Link>

      <Link
        className={`link ${pathname === '/contactus' ? 'active underline text-white' : ''}`}
        href="/contactus"
      >
        Contact Us
      </Link>
    </nav>
  )
}