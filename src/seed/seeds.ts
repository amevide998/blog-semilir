import {connectToDatabase} from "@/databases/mongodb";
import Category from "@/models/schemas/categorySchema";
import User from "@/models/schemas/userSchema"
import Post from "@/models/schemas/postSchema";
import Comment from "@/models/schemas/commentSchema";
import EditorPick from "@/models/schemas/editorPickSchema";


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
        const p1 = {
            slug: "understanding-programming-paradigms",
            title: "Understanding Programming Paradigms",
            subtitle: "A Deep Dive into the World of Programming Languages",
            body: `
        <p>Programming is a fascinating journey into the world of problem-solving and logical thinking. At its core, programming involves the creation of software through the design and implementation of algorithms. However, the approach to programming can vary significantly, and this is where programming paradigms come into play.</p>

        <h2>Exploring Paradigms</h2>

        <p>Programming paradigms are overarching styles and philosophies that dictate how we structure and organize code. In this article, we'll explore several key programming paradigms, including:</p>

        <h3>1. Imperative Programming</h3>

        <p>Imperative programming focuses on describing how a program operates by providing step-by-step instructions. It's akin to giving commands to the computer to perform specific tasks. Languages like C and Java follow this paradigm.</p>

        <h3>2. Declarative Programming</h3>

        <p>Declarative programming, on the other hand, emphasizes what the program should accomplish without specifying how to achieve it. SQL is a classic example, where you declare what data you want, and the database system figures out the best way to retrieve it.</p>

        <h3>3. Object-Oriented Programming (OOP)</h3>

        <p>OOP is a paradigm centered around the concept of "objects," which encapsulate data and behavior. Languages like Python and Java embrace OOP principles, promoting modularity and code reusability.</p>

        <h3>4. Functional Programming</h3>

        <p>Functional programming treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. Languages like Haskell and Lisp embody functional programming concepts.</p>

        <h2>Choosing the Right Paradigm</h2>

        <p>Selecting the appropriate programming paradigm depends on various factors, including the nature of the problem, the team's familiarity with certain paradigms, and the desired outcomes. Often, a combination of paradigms is employed to leverage the strengths of each.</p>

        <h2>Conclusion</h2>

        <p>In the vast landscape of programming languages, understanding different paradigms is crucial for becoming a versatile and effective developer. Whether you're delving into imperative languages, exploring the elegance of functional programming, or harnessing the power of objects, each paradigm brings its unique perspective to the table.</p>

        <p>So, the next time you embark on a coding adventure, consider the programming paradigm that aligns with your goals, and let the creativity of software development unfold.</p>
    `,
            image: "https://firebasestorage.googleapis.com/v0/b/blog-35591.appspot.com/o/posts%2Filustration-of-proggraming-language-paradigm-upscaled%20(1)%20(1).jpg?alt=media&token=2ce48046-f935-420b-aed5-b378dd41633f",
            category: categories[0]._id,
            author: user._id,
            comments: [],
            published: true
        };

        const p2 = {
            slug: "mastering-object-oriented-design",
            title: "Mastering Object-Oriented Design Patterns",
            subtitle: "A Comprehensive Guide to Building Scalable Software Systems",
            body: `
        <p>Object-oriented design patterns are the building blocks of robust and scalable software architecture. In this guide, we'll dive deep into the world of object-oriented programming (OOP) and explore key design patterns that empower developers to create maintainable and efficient code.</p>

        <h2>Understanding OOP Principles</h2>

        <p>Object-oriented design revolves around principles like encapsulation, inheritance, and polymorphism. These principles form the foundation for creating classes and objects that model real-world entities and interactions.</p>

        <h2>Common Design Patterns</h2>

        <p>Let's explore some essential design patterns:</p>

        <h3>1. Singleton Pattern</h3>

        <p>The Singleton pattern ensures that a class has only one instance and provides a global point of access to it. This is useful in scenarios where a single point of control is crucial.</p>

        <h3>2. Factory Method Pattern</h3>

        <p>The Factory Method pattern defines an interface for creating an object but allows subclasses to alter the type of objects that will be created. This promotes flexibility in object creation.</p>

        <h3>3. Observer Pattern</h3>

        <p>The Observer pattern establishes a one-to-many dependency between objects. When one object changes its state, all its dependents are notified and updated automatically. This is commonly used in event handling systems.</p>

        <h2>Applying Design Patterns</h2>

        <p>By mastering these design patterns, developers can create scalable and adaptable software systems. Applying the right design pattern in the right context enhances code maintainability, reusability, and overall system efficiency.</p>

        <h2>Conclusion</h2>

        <p>Object-oriented design patterns are powerful tools in a developer's toolkit. Whether you're building a small application or a complex software system, understanding and applying these patterns will elevate the quality and structure of your code.</p>

        <p>As you embark on your journey to master object-oriented design, keep experimenting with these patterns and discover the optimal solutions for your unique programming challenges.</p>
    `,
            image: "https://firebasestorage.googleapis.com/v0/b/blog-35591.appspot.com/o/posts%2Fgenerate-an-image-for-an-article-object-oriented.jpg?alt=media&token=fb3149c6-9ad5-47cc-b56b-b3720fb7da8d",
            category: categories[0]._id,
            author: user._id,
            comments: [],
            published: true
        };

        const p3 = {
            slug: "modern-web-development-tools",
            title: "Exploring Modern Web Development Tools",
            subtitle: "A Guide to Boosting Productivity and Efficiency",
            body: `
        <p>Web development is a dynamic field with constantly evolving tools and technologies. In this guide, we'll explore some of the modern web development tools that can significantly enhance your productivity and streamline your workflow.</p>

        <h2>Frontend Tools</h2>

        <p>Modern frontend development relies on a variety of tools:</p>

        <h3>1. React.js</h3>

        <p>React.js is a popular JavaScript library for building user interfaces. Its component-based architecture and virtual DOM make it a powerful tool for creating interactive and responsive web applications.</p>

        <h3>2. Webpack</h3>

        <p>Webpack is a module bundler that helps manage and optimize your project's assets. It is widely used for bundling JavaScript, CSS, and other resources, providing a seamless development experience.</p>

        <h2>Backend Tools</h2>

        <p>Backend development is equally crucial, and several tools can streamline the process:</p>

        <h3>1. Node.js</h3>

        <p>Node.js enables server-side JavaScript development, allowing you to build scalable and high-performance applications. Its non-blocking, event-driven architecture makes it well-suited for handling concurrent requests.</p>

        <h3>2. Express.js</h3>

        <p>Express.js is a minimalist web application framework for Node.js. It simplifies the process of building robust APIs and web applications, providing a set of features for routing, middleware, and more.</p>

        <h2>Boosting Collaboration</h2>

        <p>Collaboration is key in web development, and tools like Git and GitHub play a crucial role in version control and team collaboration. Understanding these tools enhances code quality and ensures a smooth development process.</p>

        <h2>Conclusion</h2>

        <p>Embracing modern web development tools is essential for staying competitive in the ever-evolving tech landscape. Whether you're a frontend enthusiast exploring React.js or a backend developer leveraging Node.js, integrating these tools into your workflow will elevate your development experience.</p>

        <p>As you delve into the world of modern web development tools, keep experimenting and adapting your toolkit to suit the unique requirements of your projects.</p>
    `,
            image: "https://firebasestorage.googleapis.com/v0/b/blog-35591.appspot.com/o/posts%2Fgenerate-an-image-for-an-article-web-development.jpg?alt=media&token=3e0f29cb-cd5d-4679-ad85-a6593aaf207a",
            category: categories[1]._id,
            author: user._id,
            comments: [],
            published: true
        };

        const p4 = {
            slug: "responsive-web-design-best-practices",
            title: "Responsive Web Design Best Practices",
            subtitle: "Creating Websites for a Multi-Device World",
            body: `
        <p>With the increasing variety of devices accessing the internet, responsive web design has become a critical aspect of modern web development. In this guide, we'll explore best practices for creating responsive websites that provide a seamless user experience across different devices and screen sizes.</p>

        <h2>Understanding Responsive Design</h2>

        <p>Responsive web design is an approach that ensures a website's layout and content adapt to various screen sizes and devices. Key components of responsive design include:</p>

        <h3>1. Fluid Grids</h3>

        <p>Using relative units like percentages instead of fixed units for layout elements ensures flexibility across devices.</p>

        <h3>2. Flexible Images</h3>

        <p>Employing CSS techniques, such as max-width, to ensure images resize proportionally and maintain quality on different screens.</p>

        <h3>3. Media Queries</h3>

        <p>Using media queries to apply specific styles based on the characteristics of the device, such as screen width and height.</p>

        <h2>Optimizing Performance</h2>

        <p>Responsive design also involves optimizing performance for various devices:</p>

        <h3>1. Mobile-First Approach</h3>

        <p>Starting the design process for mobile devices and progressively enhancing it for larger screens ensures a better overall user experience.</p>

        <h3>2. Performance Budgets</h3>

        <p>Setting performance budgets helps prioritize essential content and optimize page load times for improved user satisfaction.</p>

        <h2>Testing Across Devices</h2>

        <p>Thorough testing on various devices and browsers is crucial for identifying and addressing potential issues. Tools like BrowserStack and CrossBrowserTesting can assist in comprehensive cross-browser testing.</p>

        <h2>Conclusion</h2>

        <p>Responsive web design is not just a trend; it's a necessity in today's digital landscape. By implementing best practices, considering performance, and testing rigorously, you can create websites that offer a seamless and enjoyable experience for users across diverse devices.</p>

        <p>As you embark on responsive web design projects, remember to stay updated on evolving best practices and continue refining your approach to meet the ever-changing demands of the web.</p>
    `,
            image: "https://firebasestorage.googleapis.com/v0/b/blog-35591.appspot.com/o/posts%2Fgenerate-an-image-for-an-article-responsive-web-d.jpg?alt=media&token=8e0a5f23-abaf-465e-b92e-5b3fed8e58b1",
            category: categories[1]._id,
            author: user._id,
            comments: [],
            published: true
        };

        const p5 = {
            slug: "building-your-first-react-app",
            title: "Building Your First React App: A Step-by-Step Tutorial",
            subtitle: "Learn React from Scratch and Create a Dynamic Web Application",
            body: `
        <p>Welcome to the exciting world of React.js! In this step-by-step tutorial, we'll guide you through building your first React app. Whether you're a beginner or looking to expand your web development skills, this tutorial is designed to provide a hands-on experience in creating dynamic and interactive web applications.</p>

        <h2>Getting Started with React</h2>

        <p>Before we dive into coding, let's cover the basics:</p>

        <h3>1. Setting Up Your Development Environment</h3>

        <p>We'll guide you through installing Node.js, npm (Node Package Manager), and create-react-app to set up a React project quickly.</p>

        <h3>2. Understanding Components</h3>

        <p>React is all about components. Learn the fundamentals of creating and using React components to structure your app efficiently.</p>

        <h2>Building a To-Do List App</h2>

        <p>Our tutorial project will be a simple To-Do List app. You'll learn how to:</p>

        <h3>1. Create and Render Components</h3>

        <p>Build components for the app layout, task list, and individual tasks.</p>

        <h3>2. Handle State and User Interactions</h3>

        <p>Utilize React state to manage dynamic data and implement user interactions like adding and deleting tasks.</p>

        <h3>3. Styling with CSS</h3>

        <p>Enhance the visual appeal of your app by applying basic CSS styles.</p>

        <h2>Conclusion</h2>

        <p>Congratulations on completing your first React app! By following this tutorial, you've gained essential skills in React development. Keep experimenting, exploring the React documentation, and building more complex projects to solidify your understanding of this powerful JavaScript library.</p>

        <p>Happy coding!</p>
    `,
            image: "https://firebasestorage.googleapis.com/v0/b/blog-35591.appspot.com/o/posts%2Fgenerate-an-image-for-an-article-building-your-fi.jpg?alt=media&token=7bd9ceba-ebc7-4049-9ee3-f7a40bb2a4f9",
            category: categories[2]._id,
            author: user._id,
            comments: [],
            published: true
        };

        const p6 = {
            slug: "getting-started-with-python",
            title: "Getting Started with Python: A Beginner's Guide",
            subtitle: "Learn Python Programming from Scratch",
            body: `
        <p>Welcome to the world of Python programming! Whether you're a complete beginner or transitioning from another language, this beginner's guide will help you get started with Python. Python is renowned for its readability, versatility, and a vast ecosystem of libraries, making it an excellent choice for beginners and experienced developers alike.</p>

        <h2>Setting Up Your Python Environment</h2>

        <p>Let's start by getting your Python environment ready:</p>

        <h3>1. Installing Python</h3>

        <p>We'll guide you through installing Python on your system, whether you're using Windows, macOS, or Linux.</p>

        <h3>2. Using a Code Editor</h3>

        <p>Explore popular code editors like Visual Studio Code or PyCharm to enhance your coding experience.</p>

        <h2>Python Basics</h2>

        <p>Now, let's dive into the fundamentals of Python programming:</p>

        <h3>1. Variables and Data Types</h3>

        <p>Learn how to declare variables and work with different data types such as integers, strings, and lists.</p>

        <h3>2. Control Flow</h3>

        <p>Understand concepts like if statements, loops, and conditional statements for controlling the flow of your Python programs.</p>

        <h2>Building Your First Python Program</h2>

        <p>We'll wrap up the tutorial by guiding you through building a simple Python program. You'll apply what you've learned to create a practical and executable script.</p>

        <h2>Conclusion</h2>

        <p>Congratulations on taking your first steps into the world of Python programming! As you continue your learning journey, explore Python's rich ecosystem, including web development, data science, and machine learning.</p>

        <p>Happy coding with Python!</p>
    `,
            image: "https://firebasestorage.googleapis.com/v0/b/blog-35591.appspot.com/o/posts%2Fgenerate-an-image-for-an-article-getting-started.jpg?alt=media&token=97a8c88a-d0db-4d53-bec5-5140a84fecb0",
            category: categories[2]._id,
            author: user._id,
            comments: [],
            published: true
        };

        const p7 = {
            slug: "boosting-productivity-coding-tips",
            title: "Boosting Productivity: Essential Coding Tips and Tricks",
            subtitle: "Optimize Your Workflow for Efficient and Effective Coding",
            body: `
        <p>Coding is both an art and a science, and optimizing your workflow can significantly impact your productivity. In this post, we'll explore essential coding tips and tricks to enhance your efficiency and make the coding experience more enjoyable.</p>

        <h2>Keyboard Shortcuts</h2>

        <p>Mastering keyboard shortcuts for your favorite code editor can save you valuable time. Learn the shortcuts for common actions like copy, paste, and navigation.</p>

        <h2>Version Control Best Practices</h2>

        <p>Implementing version control, such as Git, is crucial. Explore best practices like commit hygiene, branching strategies, and collaborating effectively with your team.</p>

        <h2>Code Reviews</h2>

        <p>Engage in code reviews regularly. Providing and receiving feedback improves code quality and promotes knowledge sharing within your development team.</p>

        <h2>Automation Scripts</h2>

        <p>Create automation scripts for repetitive tasks. Whether it's setting up a development environment or running tests, automation can streamline your workflow.</p>

        <h2>Conclusion</h2>

        <p>By incorporating these coding tips and tricks into your daily routine, you'll not only boost your productivity but also develop habits that contribute to becoming a more proficient coder.</p>

        <p>Happy coding!</p>
    `,
            image: "https://firebasestorage.googleapis.com/v0/b/blog-35591.appspot.com/o/posts%2F438294780021201.jpg?alt=media&token=2ff3e6e0-53fc-4942-8e15-e737c414de0e",
            category: categories[3]._id,
            author: user._id,
            comments: [],
            published: true
        };

        const p8 = {
            slug: "effective-debugging-strategies",
            title: "Effective Debugging Strategies: Tips for Resolving Code Issues",
            subtitle: "Mastering the Art of Debugging to Improve Code Quality",
            body: `
                <p>Debugging is an integral part of the coding process, and mastering effective debugging strategies can save you valuable time and improve your code quality. In this post, we'll explore tips and techniques to enhance your debugging skills.</p>
        
                <h2>Use of Debugging Tools</h2>
        
                <p>Familiarize yourself with debugging tools provided by your IDE or browser. Set breakpoints, inspect variables, and utilize features like watch expressions to gain insights into your code's behavior.</p>
        
                <h2>Logging and Print Statements</h2>
        
                <p>Strategically use logging and print statements to trace the flow of your code. This helps identify the point at which unexpected behavior occurs and provides valuable information for troubleshooting.</p>                                                                                                                                                                                     <h2>Isolate and Reproduce</h2>
        
                <p>Isolate the issue by creating a minimal, reproducible test case. This simplifies the debugging process and allows you to focus on the specific code causing the problem.</p>
        
                <h2>Collaborative Debugging</h2>
        
                <p>Engage in collaborative debugging sessions with team members. A fresh pair of eyes can bring new perspectives, leading to faster issue resolution.</p>
        
                <h2>Conclusion</h2>
        
                <p>Debugging is a skill that improves with practice and experience. By incorporating these strategies into your debugging toolbox, you'll become a more effective troubleshooter and elevate your coding expertise.</p>
        
                <p>Happy debugging!</p>
                    `,
            image: "https://firebasestorage.googleapis.com/v0/b/blog-35591.appspot.com/o/posts%2F438294921015201.jpg?alt=media&token=16010c3e-7ae6-47ae-92d5-b7e1d9c6688b",
            category: categories[3]._id,
            author: user._id,
            comments: [],
            published: true
        };
        const p9 = {
            slug: "introduction-to-sorting-algorithms",
            title: "Introduction to Sorting Algorithms",
            subtitle: "Understanding the Fundamentals of Sorting for Efficient Data Management",
            body: `
        <p>Sorting is a fundamental operation in computer science, and various sorting algorithms play a crucial role in efficiently managing data. In this post, we'll provide an introduction to sorting algorithms, exploring their principles and applications.</p>

        <h2>Bubble Sort</h2>

        <p>Explore the simple yet insightful Bubble Sort algorithm. Understand its mechanics, time complexity, and scenarios where it is most suitable.</p>

        <h2>Quick Sort</h2>

        <p>Dive into the efficient Quick Sort algorithm, known for its divide-and-conquer approach. Learn how it minimizes time complexity and its advantages over other sorting methods.</p>

        <h2>Merge Sort</h2>

        <p>Understand the principles of Merge Sort, an algorithm that divides the input into smaller sections, sorts them individually, and then merges them to achieve the final sorted order.</p>

        <h2>Choosing the Right Algorithm</h2>

        <p>Each sorting algorithm has its strengths and weaknesses. Learn how to choose the right algorithm based on the size of the dataset, desired stability, and sorting requirements.</p>

        <h2>Conclusion</h2>

        <p>Sorting algorithms are essential tools in a programmer's toolkit. By understanding the principles behind these algorithms, you'll be equipped to make informed decisions when managing and manipulating data in your projects.</p>

        <p>Happy coding with sorting algorithms!</p>
    `,
            image: "https://firebasestorage.googleapis.com/v0/b/blog-35591.appspot.com/o/posts%2F438295150040201.jpg?alt=media&token=03e74547-dfcc-4b8e-bd05-a829baaf6ae6",
            category: categories[4]._id,
            author: user._id,
            comments: [],
            published: true
        };


    const p10 = {
            slug: "dynamic-programming-explained",
            title: "Dynamic Programming Explained: Solving Complex Problems with Optimal Substructure",
            subtitle: "A Deep Dive into the Principles and Applications of Dynamic Programming",
            body: `
                <p>Dynamic programming is a powerful technique for solving complex problems by breaking them down into smaller subproblems. In this post, we'll provide a comprehensive exploration of dynamic programming, its principles, and practical applications.</p>
        
                <h2>Optimal Substructure</h2>
        
                <p>Understand the concept of optimal substructure, a key principle in dynamic programming that allows us to solve a problem by combining solutions to its subproblems.</p>
        
                <h2>Memoization</h2>
        
                <p>Explore the technique of memoization to optimize dynamic programming solutions. Learn how caching intermediate results can significantly improve the efficiency of your algorithms.</p>
        
                <h2>Applications in Problem solving</h2>
        
                <p>Discover real-world applications of dynamic programming in solving problems such as the knapsack problem, longest common subsequence, and matrix chain multiplication.</p>
        
                <h2>When to Use Dynamic Programming</h2>
        
                <p>Learn to identify scenarios where dynamic programming is the most suitable approach. Understand the trade-offs and considerations in choosing dynamic programming over other problem-solving techniques.</p>
        
                <h2>Conclusion</h2>
        
                <p>Dynamic programming is a valuable skill for tackling complex problems efficiently. By mastering the principles and techniques outlined in this post, you'll be well-equipped to apply dynamic programming to a wide range of problem-solving scenarios.</p>
        
                <p>Happy problem-solving with dynamic programming!</p>
                    `,
            image: "https://firebasestorage.googleapis.com/v0/b/blog-35591.appspot.com/o/posts%2F438295369052201.jpg?alt=media&token=e97010f4-1d19-4175-b3c3-5ce1b4f3e554",
            category: categories[4]._id,
            author: user._id,
            comments: [],
            published: true
        };

        const p11 = {
            slug: "navigating-tech-career",
            title: "Navigating a Successful Tech Career: Key Insights",
            subtitle: "Strategies for Professional Growth in the Dynamic Tech Industry",
            body: `
        <p>Embarking on a tech career is an exciting journey, but it comes with its unique challenges and opportunities. In this post, we'll provide valuable insights and strategies for navigating a successful and fulfilling career in the dynamic tech industry.</p>

        <h2>Building a Strong Foundation</h2>

        <p>Discover the importance of continuous learning, staying updated with industry trends, and building a strong technical foundation.</p>

        <h2>Effective Networking</h2>

        <p>Networking is a key element in career growth. Learn strategies for building meaningful professional connections and leveraging them for career advancement.</p>

        <h2>Skill Diversification</h2>

        <p>Explore the benefits of diversifying your skill set to become a versatile professional, capable of tackling a variety of challenges.</p>

        <h2>Handling Challenges and Setbacks</h2>

        <p>Address common challenges in a tech career, such as imposter syndrome and burnout, with strategies for overcoming setbacks and staying resilient.</p>

        <h2>Conclusion</h2>

        <p>By applying these insights and strategies, you'll be better equipped to navigate the twists and turns of a tech career. Embrace the opportunities for growth, stay resilient in the face of challenges, and enjoy a fulfilling and successful journey in the tech industry.</p>

        <p>Best of luck on your career path!</p>
    `,
            image: "https://firebasestorage.googleapis.com/v0/b/blog-35591.appspot.com/o/posts%2Foutput.jpg?alt=media&token=b46a0c27-e079-4cd7-ae51-564e4fa15226",
            category: categories[5]._id,
            author: user._id,
            comments: [],
            published: true
        };

        const p12 = {
            slug: "negotiating-salary-in-tech",
            title: "Negotiating Your Salary in the Tech Industry: A Practical Guide",
            subtitle: "Strategies for Securing the Compensation You Deserve",
            body: `
        <p>Negotiating salary can be a crucial aspect of advancing in your tech career. In this practical guide, we'll provide strategies and tips for negotiating a competitive salary in the tech industry.</p>

        <h2>Researching Market Rates</h2>

        <p>Understand the importance of researching industry and location-specific salary ranges to establish a baseline for your negotiation.</p>

        <h2>Highlighting Your Value</h2>

        <p>Learn effective ways to showcase your skills, achievements, and unique contributions to the organization, reinforcing your value to potential employers.</p>

        <h2>Effective Communication</h2>

        <p>Master the art of effective communication during salary negotiations, including when to express your salary expectations and how to handle counteroffers.</p>

        <h2>Navigating Benefit Packages</h2>

        <p>Explore considerations beyond base salary, such as benefits, bonuses, and remote work options, to ensure a comprehensive and satisfactory compensation package.</p>

        <h2>Conclusion</h2>

        <p>Negotiating salary is a skill that can significantly impact your financial well-being and career satisfaction. By employing these strategies, you'll be better equipped to secure a salary that aligns with your skills, experience, and the value you bring to the table.</p>

        <p>Best of luck in your negotiations!</p>
    `,
            image: "https://firebasestorage.googleapis.com/v0/b/blog-35591.appspot.com/o/posts%2Foutput%20(1).jpg?alt=media&token=b66662be-7286-4f43-8851-d1073e895f66",
            category: categories[5]._id,
            author: user._id,
            comments: [],
            published: true
        };




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
            const post7 = await Post.create(p7);
            await User.findByIdAndUpdate(user._id, {$push : {posts: post7._id}});
            const post8 = await Post.create(p8);
            await User.findByIdAndUpdate(user._id, {$push : {posts: post8._id}});
            const post9 = await Post.create(p9);
            await User.findByIdAndUpdate(user._id, {$push : {posts: post9._id}});
            const post10 = await Post.create(p10);
            await User.findByIdAndUpdate(user._id, {$push : {posts: post10._id}});
            const post11 = await Post.create(p11);
            await User.findByIdAndUpdate(user._id, {$push : {posts: post11._id}});
            const post12 = await Post.create(p12);
            await User.findByIdAndUpdate(user._id, {$push : {posts: post12._id}});



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


            // add editor picks

        await EditorPick.deleteMany();
        await EditorPick.create({
            createdAt: new Date(),
            posts: [post1._id, post2._id, post3._id, post4._id]
        })





    }catch (e) {
        console.log('something error', e)
    }
}

export default seeds;
