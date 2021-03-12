import { createMuiTheme } from '@material-ui/core/styles'
import { teal, purple } from '@material-ui/core/colors'

const spacing = 8

export default createMuiTheme({
  spacing: spacing,
  palette: {
    type: 'dark',
    primary: teal,
    secondary: purple
  }
})

