import { gql } from 'apollo-boost'

export const CREATE_NOTE = gql`
  mutation createNote($text: String!) {
    createNote(text: $text)
  }
`
