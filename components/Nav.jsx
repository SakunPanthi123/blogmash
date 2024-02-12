import Link from 'next/link'
import {useContext} from 'react'
import SessionContext from './SessionProvider'
import {useRouter} from 'next/navigation'

const Nav = () => {
  const router = useRouter()
  const {username, updateName} = useContext(SessionContext)
  return (
    <nav className="bg-gray-800 w-full fixed top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-white font-bold text-lg">
                <Link href='/'>
                BlogMash
                </Link>
                </span>
          </div>
          <div className="flex">
            <Link
              href="/blogs"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              A short message
            </Link>
            {
              username ?
              <div>
            <Link
              href="/profile"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              My Profile
            </Link>
            <button
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              onClick={
                ()=>{
                  const confirm = window.confirm('Are you sure you want to logout?')
                  if(confirm){
                    updateName('')
                    router.push('/login')
                }
              }
            }
            >Logout</button>
            </div>
            
            : <Link
              href="/login"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </Link>
            }
            
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
