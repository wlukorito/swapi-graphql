import {ApolloServer} from 'apollo-server';

import typeDefs from './schema';
import Query from './resolvers/Query';
import Person from './resolvers/Person';
import Swapi from './api';

const server =  new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Person
    },
    context: {
        api: new Swapi()
    }
});

server.listen().then(({ url }) => {
    console.log(`Server started on ${url}`);
});
