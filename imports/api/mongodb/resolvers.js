import {Author, View, FortuneCookie, LottoNumbers, Lesson} from './connectors';

const resolvers = {
    Query: {
        author(_, args){
            return Author.find({where: args});
        },
        fortuneCookie(){
            return FortuneCookie.getOne();
        },
        lottoNumbers(){
            return LottoNumbers.getSome();
        },
        lesson(){
            return Lesson.getOne();
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