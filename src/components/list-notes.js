import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { LIST_NOTES } from '../graphql/query'

const ListNotes = () => {
  const { data } = useQuery(LIST_NOTES)

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <></>
  )
}

export default ListNotes
