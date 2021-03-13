import React from 'react'
import { makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CreateNote from '../components/create-note'

const useStyles = makeStyles(theme => ({
  container: {
    background: '#e1eafc',
    padding: theme.spacing(2),
    height: '25vw',
  },
}))

const CreateNotePage = () => {
  const classes = useStyles()

  return (
    <Card className={classes.container}>
      <h1>Create Note Page</h1>
      <CreateNote />
    </Card>
  )
}

export default CreateNotePage
