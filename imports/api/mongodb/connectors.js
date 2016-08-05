import Sequelize from 'sequelize';
import _ from 'lodash';
import casual from 'casual';
import Mongoose from 'mongoose';
import rp from 'request-promise';

const db = new Sequelize('blog', null, null, {
    dialect: 'sqlite',
    storage: './blog.sqlite'
});

const AuthorModel = db.define('author', {
    firstName: {type: Sequelize.STRING},
    lastName: {type: Sequelize.STRING}
});


const PostModel = db.define('post', {
    title: {type: Sequelize.STRING},
    text: {type: Sequelize.STRING}
});

AuthorModel.hasMany(PostModel);
PostModel.belongsTo(AuthorModel);

//views in mongoDB

const mongo = Mongoose.connect('mongodb://localhost:3001/meteor');

const ViewSchema = Mongoose.Schema({
    postId: Number,
    views: Number
});

const View = Mongoose.model('meteor', ViewSchema);

casual.seed(123);
db.sync({force: false}).then(()=> {
    _.times(10, ()=> {
        return AuthorModel.create({
            firstName: casual.first_name,
            lastName: casual.last_name
        }).then((author)=> {
            return author.createPost({
                title: `A fancy post by ${author.firstName}`,
                text: casual.sentences(2)
            }).then((post) => {
                return View.update(
                    {postId: post.id},
                    {views: casual.integer(0, 100)},
                    {upsert: true});
            });
        });
    });
});

const Author = db.models.author;
const Post = db.models.post;
const FortuneCookie = {
    getOne(){
        return rp('http://fortunecookieapi.com/v1/cookie')
            .then((res) => JSON.parse(res))
            .then((res) => {
                return res[0].fortune.message;
            });
    },
};
const LottoNumbers = {
    getSome(){
        return rp('http://fortunecookieapi.com/v1/cookie')
            .then((res) => JSON.parse(res))
            .then((res) => {
                return res[0].lotto.numbers;
            });
    },
};

const Lesson = {
    getOne(){
        return rp('http://fortunecookieapi.com/v1/cookie')
            .then((res) => JSON.parse(res))
            .then((res) => {
                return {
                    english: res[0].lesson.english,
                    chinese: res[0].lesson.chinese,
                    pronunciation: res[0].lesson.pronunciation
                };
            });
    },
};


const Weather = {
    getOne(lat, lon){
        return rp(`https://api.forecast.io/forecast/7e984cc3a43d812542ea7e36b25b71fc/${lat},${lon}?lang=de`)
            .then((res) => JSON.parse(res))
            .then((res) => {
                return {
                    latitude: res.latitude,
                    longitude: res.longitude,
                    timezone: res.timezone,
                    offset: res.offset
                };
            });
    },

    //how to do a subquery without hitting API again?
    getCurrent(args){
        console.log("getting current");
        console.log(args.latitude);
        console.log(args.longitude);
        return rp(`https://api.forecast.io/forecast/7e984cc3a43d812542ea7e36b25b71fc/${args.latitude},${args.longitude}?lang=de&units=si`)
            .then((res) => JSON.parse(res))
            .then((res) => {
                console.log(res.current);
                return res.currently;
            });
    },
    getLocationName(args){
        return rp({uri:`http://nominatim.openstreetmap.org/reverse?format=json&lat=${args.latitude}&lon=${args.longitude}&zoom=18&addressdetails=1`, headers:{'User-Agent': 'Request-Promise'}})
            .then((res) => JSON.parse(res))
            .then((res) => {
                if (res.address.city != null) {
                    return res.address.city;
                }
                if (res.address.village != null) {
                    return res.address.village;
                }
                return "right out in the sticks";
            }).catch(function(err){
                console.log(err);
                return null});
    }
};

export {Author, Post, View, FortuneCookie, LottoNumbers, Lesson, Weather};