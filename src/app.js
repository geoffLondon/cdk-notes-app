import Router from './router'
import { ApolloProvider } from '@apollo/client'
import client from './graphql/client'

const App = () => (
  <ApolloProvider client={client}>
    <Router/>
  </ApolloProvider>
)

export default App
