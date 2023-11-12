import {connectToDatabase} from "@/databases/mongodb";
import Category from "@/models/schemas/categorySchema";
import User from "@/models/schemas/userSchema"
import Post from "@/models/schemas/postSchema";
import Comment from "@/models/schemas/commentSchema";


const seeds = async () => {
    try {
        await connectToDatabase();

        // get user
        const user = await User.findOne({email: "blogsemilir@gmail.com"})

        // get category
        const categories = await Category.find()

        console.log(categories[0].title)
        console.log(categories[1].title)
        console.log(categories[2].title)
        console.log(categories[3].title)
        console.log(categories[4].title)
        console.log(categories[5].title)

        // delete posts and comments
        await User.findByIdAndUpdate(user._id, {$set: {posts: [], comments: []}})
        await Comment.deleteMany();
        await Post.deleteMany();

        // add post
        const p1 =
            {
                slug: "what-is-programming",
                title: "What Is Programming?",
                subtitle: "An Introduction to the Basics",
                body: "Programming is the process of designing and building software ...",
                image: "https://picsum.photos/600",
                category: categories[0]._id,
                author: user._id,
                comments: [],
            }
        const p2 =
            {
                slug: "what-is-web-development",
                title: "What Is Web Development?",
                subtitle: "An Introduction to the Basics",
                body: "Web Development is the process of designing and building software ...",
                image: "https://picsum.photos/600",
                category: categories[1]._id,
                author: user._id,
                comments: [],
            }
        const p3 =
            {
                slug: "what-is-tutorial-proggraming",
                title: "What Is Tutorial Proggraming?",
                subtitle: "An Introduction to the Basics",
                body: "v is the process of designing and building software ...",
                image: "https://picsum.photos/600",
                category: categories[2]._id,
                author: user._id,
                comments: [],
            }
        const p4 =
            {
                slug: "what-is-tips-and-trick",
                title: "What Is Tips and Tricks?",
                subtitle: "An Introduction to the Basics",
                body: "Tips and Tricks is the process of designing and building software ...",
                image: "https://picsum.photos/600",
                category: categories[3]._id,
                author: user._id,
                comments: [],
            }
        const p5 =
            {
                slug: "what-is-algorithm",
                title: "What Is Algorithm?",
                subtitle: "An Introduction to the Basics",
                body: "Algorithm is the process of designing and building software ...",
                image: "https://picsum.photos/600",
                category: categories[0]._id,
                author: user._id,
                comments: [],
            }
        const p6 =
            {
                slug: "what-is-career-advice",
                title: "What Is Carreer Advice?",
                subtitle: "An Introduction to the Basics",
                body: "Carreer Advice is the process of designing and building software ...",
                image: "https://picsum.photos/600",
                category: categories[0]._id,
                author: user._id,
                comments: []
            }

            const post1 = await Post.create(p1);
            await User.findByIdAndUpdate(user._id, {$push : {posts: post1._id}});
            const post2 = await Post.create(p2);
            await User.findByIdAndUpdate(user._id, {$push : {posts: post2._id}});
            const post3 = await Post.create(p3);
            await User.findByIdAndUpdate(user._id, {$push : {posts: post3._id}});
            const post4 = await Post.create(p4);
            await User.findByIdAndUpdate(user._id, {$push : {posts: post4._id}});
            const post5 = await Post.create(p5);
            await User.findByIdAndUpdate(user._id, {$push : {posts: post5._id}});
            const post6 = await Post.create(p6);
            await User.findByIdAndUpdate(user._id, {$push : {posts: post6._id}});



        const c1 = {
                text: "This is a awesome",
                user: user._id,
                post: post1._id,
            }

            const c2 = {
                text: "This is a awesome",
                user: user._id,
                post: post2._id,
            }

            const c3 = {
                text: "This is a awesome",
                user: user._id,
                post: post3._id,
            }

            const c4 = {
                text: "This is a awesome",
                user: user._id,
                post: post4._id,
            }


            const c5 = {
                text: "This is a awesome",
                user: user._id,
                post: post5._id,
            }

            const c6 = {
                text: "This is a awesome",
                user: user._id,
                post: post6._id,
            }

            const comment1 = await Comment.create(c1);
        await User.findByIdAndUpdate(user._id, {$push : {comments: comment1._id}});
        await Post.findByIdAndUpdate(post1._id, {$push : {comments: comment1._id}});
        const comment2 = await Comment.create(c2);
        await User.findByIdAndUpdate(user._id, {$push : {comments: comment2._id}});
        await Post.findByIdAndUpdate(post2._id, {$push : {comments: comment2._id}});
        const comment3 = await Comment.create(c3);
        await User.findByIdAndUpdate(user._id, {$push : {comments: comment3._id}});
        await Post.findByIdAndUpdate(post3._id, {$push : {comments: comment3._id}});
        const comment4 = await Comment.create(c4);
        await User.findByIdAndUpdate(user._id, {$push : {comments: comment4._id}});
        await Post.findByIdAndUpdate(post4._id, {$push : {comments: comment4._id}});
        const comment5 = await Comment.create(c5);
        await User.findByIdAndUpdate(user._id, {$push : {comments: comment5._id}});
        await Post.findByIdAndUpdate(post5._id, {$push : {comments: comment5._id}});
        const comment6 = await Comment.create(c6);
        await User.findByIdAndUpdate(user._id, {$push : {comments: comment6._id}});
        await Post.findByIdAndUpdate(post6._id, {$push : {comments: comment6._id}});
            console.log('seeds success')

        // cek seeds
        const post = await Post.find();
            console.log(post);





    }catch (e) {
        console.log('something error', e)
    }
}

export default seeds;
