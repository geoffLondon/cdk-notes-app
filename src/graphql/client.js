import { ApolloClient, InMemoryCache } from '@apollo/client'
import { Config } from '../config/development.config'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: Config.appSync.graphqlEndpoint,
  headers: {
    "X-Api-Key": Config.appSync.apiKey
  }
})

export default client
