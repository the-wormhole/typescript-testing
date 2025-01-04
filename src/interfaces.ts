interface Blogger{
    name:string,
    age:number
}

var bloggerOne:Blogger = {
    name:"Robin",
    age:23
}

console.log(bloggerOne);

//interface inside interface
interface Post{
    title:string,
    body:string,
    tags:string[]
    date:Date,
    author:Blogger
}

var newPost: Post = {           //without specifying the Post type as well, typescript implictly recognizes the Post type based on the object structure
    title:"Starry Night",
    body:"A night full of Stars!!",
    tags:['Art','Poetry'],
    date:new Date(),
    author:bloggerOne
}

console.log(newPost);

//Interfaces in functions

function createPost(post:Post): void {
    console.log(`Created a post: ${post.body}, Blogger: ${post.author.name}`);
}

createPost(newPost);

//arrays with interfaces

var postArr: Post[] = [];
postArr.push(newPost);

console.log(postArr);