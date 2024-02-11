import Blog from "@models/Blog"
import { connectToDB } from "@utils/database"

export const GET =  async (req) => {
    try{
        await connectToDB()
        const blogs = await Blog.find({})

        return new Response(JSON.stringify(blogs),{
            status:200
        })

    }   catch (e){
        return new Response(JSON.stringify(e),{
            status:500
        })
    }
}