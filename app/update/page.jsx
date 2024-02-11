'use client'
import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/navigation'
import UpdateContext from '@components/UpdateProvider'

const Update = () => {
    const router = useRouter()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const {update_query, updateQuery} = useContext(UpdateContext)
    console.log(update_query)
    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`/api/blog/${update_query}`)
            const data = await response.json()
            setTitle(data.title)
            setContent(data.content)
        }
        fetchPost()
    }, [])

    const handleSubmit = async () => {
            const response = await fetch(`/api/blog/${update_query}`, {
            method: "PATCH",

            body: JSON.stringify(
                {
                    title: title,
                    content: content
                }
            )
        })
        console.log(response)
        if (response.ok) {
            router.push('/')
        }
    }

    return (
        <div className='max-w-md mx-auto mt-16'>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                    Blog Title:
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                    Content:
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <div className="flex items-center justify-center">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={handleSubmit}
                >
                    Update
                </button>
            </div>
        </div>
    )
}

export default Update