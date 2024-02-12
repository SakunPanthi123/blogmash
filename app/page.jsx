'use client'
import {useState, useEffect, useContext} from 'react'
import Link from 'next/link'
import moment from 'moment'
import SessionContext from '@components/SessionProvider'

const Home = () => {
  const [blogs,setBlogs] = useState([])
  const {username} = useContext(SessionContext)
  
  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch('/api/blog')
      const data = await response.json()
      setBlogs(data)
    }
    fetchPost()
  },[])

  return (
    <div>

    <div className='px-8'>
      {blogs.map((blog) => {
        const formattedDate = moment(blog.createdAt).format('MMMM Do YYYY, h:mm:ss a');

        return (
          <div key={blog._id} className="mt-8 max-w-2xl mx-auto bg-gray-100 rounded-lg p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-2">{blog.title}</h1>
            <p className="text-gray-700 font-semibold text-sm">Written on: {formattedDate}</p>
            <p className="text-gray-700 font-semibold text-sm">Written By: {blog.createdBy}</p>
            <br></br>
            <p className="text-gray-700">{blog.content}</p>
          {
            username === blog.createdBy ?
          <div> 
            <button 
            className=" hover:text-red-700 text-red-300 font-bold mt-4"
            onClick={async () => {
              const conf = confirm('Are you sure you want to delete this blog?')
              if(conf){
               
              const response = await fetch(`/api/blog/${blog._id.toString()}`, {
                method: 'DELETE'
              })

              console.log(response)
            
              if (response.ok) {
                const newBlogs = blogs.filter((item) => item._id !== blog._id)
                setBlogs(newBlogs)
              }
            } 
            }}
          >
            Delete
            </button>

            <Link 
            href={`/update/${blog._id}`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4"  
            >
            Update
            </Link>
          </div>:<div></div>
          }

          </div>
        )
      })}
    </div>
    <footer className='mt-8'>

    </footer>
    </div>
  )
}

export default Home