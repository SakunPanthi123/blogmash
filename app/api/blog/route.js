import Blog from "@models/Blog"
export const revalidate = 0;
import { connectToDB } from "@utils/database"

export const GET =  async (req) => {
    try{
        await connectToDB()
        const blogs = await Blog.find({}).sort({_id: -1})

        return new Response(JSON.stringify(blogs),{
            status:200
        })

    }   catch (e){
        return new Response('An error occured',{
            status:500
        })
    }
}