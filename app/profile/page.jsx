'use client'
import { useState, useContext } from 'react'
import { useRouter } from 'next/navigation'
import SessionContext from '@components/SessionProvider'

const Profile = () => {
  const { username, updateName } = useContext(SessionContext)
  const router = useRouter()
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/blog/new', {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          content: content
        })
      })

      if (response.ok) {
        router.push('/')
      }

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className='px-8'>
      {
        username ? (
          <div className=''>
            <h1 className='felx items-center text-2xl font-bold text-center mt-16'>
              Welcome {username}
            </h1>
            <div className='flex'>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 mx-auto"

                onClick={async () => {
                  const conf = confirm('Are you sure you want to logout?')
                  if (conf) {
                    updateName('')
                    router.push('/login')
                  } else {
                    return
                  }
                }}
              >
                Logout
              </button>
            </div>


            <div>
              <h1 className='text-2xl font-bold text-center mt-16'>
                Add a New blog and share it to the world
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md max-h-md mx-auto pt-14">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                  Blog Title:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="title"
                  type="text"
                  value={title}
                  onChange={handleTitleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                  Content:
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="content"
                  value={content}
                  onChange={handleContentChange}
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form></div>) : <div></div>}
    </div>

  )
}

export default Profile