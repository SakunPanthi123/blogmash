import {connectToDB} from '@utils/database'
export const revalidate = 0;
import Blog from '@models/Blog'

export const POST = async (req) => {
    const {title, content, creator} = await req.json();

    try {
        await connectToDB();
        const newBlog = new Blog({
            title: title, 
            content:content,
            createdBy: creator,
            createdAt: new Date()
        })

        await newBlog.save()

        return new Response(JSON.stringify(newBlog),{
            status:201
        })
    } catch (error){
        return new Response("Failed to create a new Blog",{status: 500})
    }
}