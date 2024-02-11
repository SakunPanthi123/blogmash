'use client'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

const Update = () => {
    const router = useRouter()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const searchParams = useSearchParams()
    const blogid = searchParams.get('id')

   return (
    <div>
        Update page
    </div>
   )
}

export default Update