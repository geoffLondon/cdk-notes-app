import React from 'react'
import { makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import ListNotes from '../components/list-notes'

const useStyles = makeStyles(theme => ({
  container: {
    background: '#e1eafc',
    padding: theme.spacing(2),
    height: '25vw',
  },
}))

const ListNotesPage = () => {
  const classes = useStyles()

  return (
    <Card className={classes.container}>
      <h1>Notes page</h1>
     <ListNotes />
    </Card>
  )
}

export default ListNotesPage
