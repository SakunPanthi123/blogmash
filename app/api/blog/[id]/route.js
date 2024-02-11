import Blog from '@models/Blog'
import { connectToDB } from '@utils/database'

//get
export const GET = async (req, {params}) => {
    try {
        await connectToDB()
        const blog = await Blog.findById(params.id )
        return new Response(JSON.stringify(blog), {
            status: 200
        })
    
    } catch (e) {   
        return new Response('An error occured', {
            status: 500
        })
    }
}

// Patch
export const PATCH = async (req, {params}) => {
    const {title, content} = await req.json()
    try {
        await connectToDB()
        const blog = await Blog.findById(params.id)
        if (!blog) {
            return new Response('Blog not found', { status: 404 })
        }

        blog.title = title
        blog.content = content
        await blog.save()

        return new Response(JSON.stringify(blog), {
            status: 200
        })
    } catch (e) {
        return new Response('An error occurred ', {
            status: 500
        })
    }
}


// delete
export const DELETE = async (req, {params}) => {
    try {
        await connectToDB()
        await Blog.findByIdAndDelete(params.id)
        console.log('Blog deleted')
        return new Response('Blog deleted', {
            status: 200
        })     
    
    } catch (e) {   
        return new Response('An error occured',{
            status: 500
        })
    }
}