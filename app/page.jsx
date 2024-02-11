'use client'
import {useState, useEffect} from 'react'

const Home = () => {
  const [blogs,setBlogs] = useState([])
  
// this portion is good?
  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch('/api/blog')
      const data = await response.json()
      setBlogs(data)
    }
    fetchPost()
  },[])

  return (
    <div className='px-8'>
      {blogs.map((blog) => {
        return (
          <div className="mt-8 max-w-2xl mx-auto bg-gray-100 rounded-lg p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-2">{blog.title}</h1>
            <p className="text-gray-700">{blog.content}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Home