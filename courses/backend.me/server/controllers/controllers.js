// controllers.js
const Blog = require('../models/Blog');


// HOME=GET


// const homePage= async (req, res) => {
//     try {
//         const blogs = await Blog.find();
//         res.render('index', { blogs: blogs });
//     } catch (err) {
//         console.error(err);
//         res.send('Server error');
//     }
// }

// now let's add pagination to the homePage function


const homePage= async (req, res) => {
    try {

        // let perPage = 6;
        // let page = req.query.page || 1;
        // const blogs = await Blog.find()
        //     .skip((perPage * page) - perPage)
        //     .limit(perPage);
        // const count = await Blog.countDocuments();
        // res.render('index', {
        //     blogs: blogs,
        //     current: page,
        //     pages: Math.ceil(count / perPage)
        // });

        let perPage = 6;
        let page = req.query.page || 1;
        const blogs= await Blog.aggregate([ { $sort: { createdAt: -1 } } ])
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec();
        const count = await Blog.countDocuments();
        const nextPage = parseInt(page) + 1;
        const hasNextPage = nextPage <= Math.ceil(count / perPage);
        res.render('index', {
            blogs: blogs,
            current: page,
            nextPage:hasNextPage?nextPage:null,
        });

    } catch (err) {
        console.error(err);
        res.send('Server error');
    }
}




const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        const locals={
            title:blog.title,

        }
        res.render('single_blog', { blog: blog, locals:locals });
    } catch (err) {
        console.error(err);
        res.send('Server error');
    }
}




// searching
const searchBlog = async (req, res) => {
    try {
        const search = req.body.searchItem;
        const searchNoSpecialChar=search.replace(/[^a-zA-Z0-9]/g, '');
        const blogs=await Blog.find({
            $or: [
                { title: { $regex: new RegExp(searchNoSpecialChar,'i')} },
                { body: { $regex: new RegExp(searchNoSpecialChar,'i')} }
            ]
        });

        res.render('search_res', { blogs: blogs });

    } catch (err) {
        console.error(err);
        res.send('Server error');
    }
}



module.exports = {homePage,getBlogById,searchBlog};



/* const blogData=[
    {
        "title": "Advanced React Patterns",
        "image": "https://th.bing.com/th/id/OIP.U-Lw71ugoK-7wjiS3AGFcAHaHa?w=1080&h=1080&rs=1&pid=ImgDetMain",
        "description": "Explore advanced patterns and techniques in React for building complex UIs.",
        "typeOfBlog": "Tutorial",
        "author": "Sarah Johnson"
    },
    {
        "title": "Scaling Node.js Applications",
        "image": "https://th.bing.com/th/id/OIP.oie2WFth9JcbmvaWJZPmugHaE8?w=900&h=600&rs=1&pid=ImgDetMain",
        "description": "Learn strategies for scaling Node.js applications to handle high traffic loads.",
        "typeOfBlog": "Tips & Tricks",
        "author": "Michael Brown"
    },
    {
        "title": "The Importance of Testing in Software Development",
        "image": "https://th.bing.com/th/id/OIP.Hzg4-_3TX3sz2X39jyNpAwHaEM?w=1200&h=680&rs=1&pid=ImgDetMain",
        "description": "Understand why testing is crucial in software development and learn best practices.",
        "typeOfBlog": "Educational",
        "author": "Emily Chen"
    },
    {
        "title": "Building RESTful APIs with Express",
        "image": "https://th.bing.com/th/id/OIP.EF61zyaZXQSqXFcNOoyNrAHaE8?w=1000&h=667&rs=1&pid=ImgDetMain",
        "description": "Learn how to create RESTful APIs using Express.js for your web applications.",
        "typeOfBlog": "Tutorial",
        "author": "David Lee"
    },
    {
        "title": "The Rise of Progressive Web Apps",
        "image": "https://th.bing.com/th/id/OIP.vdGWOdKCs4PEAd3yOxQcqAHaEK?rs=1&pid=ImgDetMain",
        "description": "Discover the benefits of progressive web apps and how to build them.",
        "typeOfBlog": "Opinion",
        "author": "Sophia Martinez"
    }
]

Blog.insertMany(blogData)
    .then((docs) => {
        console.log('Documents inserted successfully:', docs);
    })
    .catch((err) => {
        console.error('Error inserting documents:', err);
    });


 */