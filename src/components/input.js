import React from 'react';

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(_ => ({
  input: {
    padding: '17px',
    fontSize: '13px'
  },
  textField: {
    width: '100%',
  },
  error: {
    color: 'orange',
    fontSize: '12px',
    textTransform: 'capitalize',
  },
}))

export const Input  = props => {
  const classes = useStyles()
  const { className, autoFocus, error, placeholder, ...inputProps } = props

  return (
    <div>
      <TextField
        autoFocus={autoFocus}
        label={placeholder}
        InputLabelProps={{shrink: true}}
        error={!!error}
        className={`${classes.textField} ${className}`}
        margin="normal"
        // variant="outlined"
        inputProps={{
          // className: classes.input,
          ...inputProps,
        }}
      />
      <div className={classes.error}>{error}</div>
    </div>
  )
}

Input.defaultProps = {
  autoFocus: false,
}

export default Input;
