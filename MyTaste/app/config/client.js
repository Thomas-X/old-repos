import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';

export const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://192.168.56.1:60000/simple/v1/cj9fuwba4000b01628l9ncma6' }),
    cache: new InMemoryCache(),
});