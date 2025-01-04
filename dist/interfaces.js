"use strict";
var bloggerOne = {
    name: "Robin",
    age: 23
};
console.log(bloggerOne);
var newPost = {
    title: "Starry Night",
    body: "A night full of Stars!!",
    tags: ['Art', 'Poetry'],
    date: new Date(),
    author: bloggerOne
};
console.log(newPost);
//Interfaces in functions
function createPost(post) {
    console.log(`Created a post: ${post.body}, Blogger: ${post.author.name}`);
}
createPost(newPost);
//arrays with interfaces
var postArr = [];
postArr.push(newPost);
console.log(postArr);
