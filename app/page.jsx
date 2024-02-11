'use client'
import {useState, useEffect, useContext} from 'react'
import {useRouter} from 'next/navigation'
import UpdateContext from '@components/UpdateProvider'

const Home = () => {
  const [blogs,setBlogs] = useState([])
  const router = useRouter()
  const {update_query, updateQuery} = useContext(UpdateContext)
  
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
        return (
          <div key={blog._id} className="mt-8 max-w-2xl mx-auto bg-gray-100 rounded-lg p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-2">{blog.title}</h1>
            <p className="text-gray-700">{blog.content}</p>
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
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
            } else {
              return
            }
            }}
          >
            Delete
            </button>

            <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4"
            onClick={
              ()=>{
                updateQuery(blog._id)
                router.push('/update')

              }
            }
            >
            Update
            </button>
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