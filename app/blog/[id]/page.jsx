// fetch blog from api/blog/[id] using GET and display it. the params contains the id of the blog needed to be fetched.

'use client'
import {useState, useEffect} from 'react'

const Blog = ({params}) => {
    const [blog, setBlog] = useState({})
    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`/api/blog/${params.id}`)
            const data = await response.json()
            setBlog(data)
        }
        fetchPost()
    }, [])

  return (
    <div>
        <div className="mt-8 mb-8 max-w-2xl mx-auto bg-gray-100 rounded-lg p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-2">{blog.title}</h1>
            <p className="text-gray-700 font-semibold text-sm">Written on: {blog.createdAt}</p>
            <p className="text-gray-700 font-semibold text-sm">Written By: {blog.createdBy}</p>
            <br></br>
            <p className="text-gray-700">
                {blog.content}
            </p>
        </div>
    </div>

  )
}

export default Blog