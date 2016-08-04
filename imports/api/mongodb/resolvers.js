import {Author, Post} from './connectors';

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
        }
    }
};

export default resolvers;