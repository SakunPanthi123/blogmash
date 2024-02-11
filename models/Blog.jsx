import {Schema, model, models} from 'mongoose';

const BlogSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    content: {
        type: String,
        required: [true, 'Content is required!'],
        
      }
})

const Blog = models.Blog || model("Blog", BlogSchema);

export default Blog;