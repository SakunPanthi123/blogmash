// this is the login page for the app containing username and password only for now

'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Login = () => {
    const router = useRouter()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            })
        })

        if (response.ok) {
            router.push('/')
        }
        else{
            alert('Invalid username or password')
        }
    }

    return (
        <div className='max-w-md mx-auto mt-16'>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Username:
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password:
                </label>
                <input
                    type="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleSubmit}
                >
                    Login
                </button>
                <Link
              href="/signup"
              className="text-gray-800 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Don't have a blogmash account yet? Sign up here!
            </Link>
            </div>
        </div>
    )
}

export default Login