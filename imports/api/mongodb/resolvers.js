import {Author, View, FortuneCookie, LottoNumbers, Lesson, Weather} from './connectors';

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
        },
        weather(_, args){
            console.log(args);
            return Weather.getOne(args.latitude, args.longitude);
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
    },
    Weather: {
        current(weather){
            return Weather.getCurrent(weather);
        },
        locationname(weather){
            return Weather.getLocationName(weather);
        }
    }

};

export default resolvers;