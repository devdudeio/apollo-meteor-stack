import {Author, Post, View} from './connectors';

const resolvers = {
    Query: {
        author(_, args){
            return Author.find({where: args});
        }
    },
    Author: {
        posts(author){
            console.log(author.getPosts());
            return author.getPosts();
        }
    },
    Post: {
        author(post){
            return post.getAuthor();
        },
        views(post){
            return View.findOne({postId: post.id}).then((view)=> view.views);
        }
    }
};

export default resolvers;