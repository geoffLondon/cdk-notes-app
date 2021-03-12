import React from 'react'
import { makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import Form from '../components/form'

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
      <Form />
    </Card>
  )
}

export default FrontPage
