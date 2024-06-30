import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  const user = true;
  return (
    <header className="bg-white dark:bg-gray-900">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="md:flex md:items-center md:gap-12">
          <a className="block text-teal-600 dark:text-teal-600" href="/">
            <span className="sr-only">Home</span>
            <Image src="/nagpurhomes.png" width={80} height={20} alt='Nagpur Homes logo'/>
          </a>
        </div>
  
        {/* Hide on mobile */}
        <div className="hidden md:block">
          <nav aria-label="Global">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  href="/test"
                >
                  List
                </a>
              </li>
  
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  href="/profilePage"
                >
                  Profile
                </a>
              </li>
  
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  href="/singlePage"
                >
                  Details
                </a>
              </li>
              
            </ul>
          </nav>
        </div>
  
        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            {user ? (
              <div className='user text-white flex gap-2 items-center font-bold'>
                <Image src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&dpr=2&w=200&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8dXNlcnxlbnwwfHx8fDE3MTgyMDM2NDZ8MA&ixlib=rb-4.0.3" alt='' width={30} height={30} className='rounded-full object-cover'/>
                <span className='hidden md:block'>John Doe</span>  
                <Link href="/profilePage" className='profile bg-orange-400 px-3 rounded-lg cursor-pointer relative hidden md:block'>
                <div className='notification absolute bg-red-500 w-6 h-6 flex items-center justify-center rounded-full -top-2 -right-2'>3</div>
                <span>Profile</span>
                </Link>
              </div>
              ) : (
              <>
                <a className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500"
                href="#"
                >
                Login
                </a>
              </>)
            }
            
            {!user && <div className="hidden sm:flex">
              <a
                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Register
              </a>
            </div>}
          </div>
  
          <div className="block md:hidden">
            <button
              className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Navbar