import * as React from 'react'
import Button from '@material-ui/core/Button'

import { makeStyles, withStyles } from '@material-ui/core/styles'

const StyledButton = withStyles(() => ({
  root: {
    color: '#fff',
    backgroundColor: '#5f2979',
    '&:hover': {
      backgroundColor: '#84499a'
    },
  },
}))(Button)

const useStyle = makeStyles(_ => ({
  button: {
    background:'#5f2979' ,
    borderRadius: '30px',
    color: 'white',
    padding: '13px',
    fontWeight: 400,
    fontSize: '14px',
    marginTop: '10px',
    letterSpacing: '0.751847px',
    maxWidth: '450px',
    textDecoration: 'none',
  },
}))


const PrimaryButton = ({
  label,
  style,
  onClick,
}) => {
  const classes = useStyle()
  return (
    <StyledButton
      className={classes.button}
      fullWidth
      type="submit"
      style={style}
      onClick={onClick}>
      {label}
    </StyledButton>
  )
}
export default PrimaryButton