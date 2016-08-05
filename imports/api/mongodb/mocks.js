import casual from 'casual';

const mocks = {
    String: () => 'Some Fancy String! (I´m a mock and proud!1111einself)',
    Query: () => ({
        author: (root, args) => {
            return {firstName: args.firstName, lastName: args.lastName};
        }
    }),
    Author: () => ({firstName: () => casual.first_name, lastName: ()=> casual.last_name}),
    Post: () =>({title:() => casual.title, text:() => casual.sentence})
};

export default mocks;