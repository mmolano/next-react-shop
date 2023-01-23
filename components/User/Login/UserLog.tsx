import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import Link from "next/link";

export const UserLog: React.FC = (isMobile: boolean = false) => {
  const { user }: UserContext = useUser();

  if (!isMobile && !user)
    return (
      <>
        <li>
          <Link href={"/api/auth/login"} className="flex items-center space-x-2 focus:outline-none text-gray-800 dark:text-white focus:ring-2 focus:ring-gray-800 hover:underline" >
            <div>
              <svg className="fill-stroke" width={18} height={20} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-base">My account</p>
          </Link>
        </li>
      </>
    )
  else if (isMobile && !user)
    return (
      <>
        <Link aria-label="my account" href={"/api/auth/login"} className="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100 p-0.5 rounded">
          <svg className="fill-stroke text-gray-800 dark:text-black" width={18} height={20} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </>
    )

  else if (user)
    return (
      <>
        <li className="list-none">
          <Link href={'/user/profile'}>
            <Image className="rounded-xl w-6 h-6 m-auto"
              src={user.picture}
              height="24"
              width="24"
              alt={user.name}
            />
          </Link>
        </li>
      </>
    )

}