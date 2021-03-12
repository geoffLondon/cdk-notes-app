import React, { useState } from 'react'
import { CREATE_NOTE } from '../graphql/mutation'
import { useMutation } from '@apollo/client'

const Form = () => {
  const [text, setText] = useState("")

  const [createNote, { error }] = useMutation(CREATE_NOTE)

  const addNote = () => {
    createNote({
      variables: {
        text
      }
    })
    if (error) {
      console.log("there was an error", error)
    }
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Add note"
        onChange={(event => {
          setText(event.target.value)
        })}
      />
      <button onClick={addNote}> Add Note </button>
    </div>
  )
}

export default Form
