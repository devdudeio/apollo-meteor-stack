import { createApolloServer } from 'meteor/apollo';


import schema from '/imports/api/mongodb/schema';
import resolvers from '/imports/api/mongodb/resolvers';
import mocks from '/imports/api/mongodb/mocks'

createApolloServer({
    graphiql: true,
    pretty: true,
    schema: schema,
    resolvers: resolvers,
    allowUndefinedInResolvers: false,
    printErrors: true
    //mocks: mocks
});


