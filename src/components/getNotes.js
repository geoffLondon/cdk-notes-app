import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_NOTES } from '../graphql/query'

const GetNotes = () => {
  const { data } = useQuery(GET_NOTES)

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <></>
  )
}

export default GetNotes
