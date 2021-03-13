import { gql } from 'apollo-boost'

export const LIST_NOTES = gql`
  query {
    listNotes {
      text
    }
  }
`
