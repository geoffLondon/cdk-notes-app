import React from 'react'
import { makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CreateNote from '../components/create-note'

const useStyles = makeStyles(theme => ({
  container: {
    background: '#e1eafc',
    padding: theme.spacing(2),
    height: '43vw',
  },
}))

const FrontPage = () => {
  const classes = useStyles()

  return (
    <Card className={classes.container}>
      <CreateNote />
    </Card>
  )
}

export default FrontPage
