import React from 'react';
import { useSelector } from 'react-redux';

import { usersSelector } from '../redux/users'

import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  headerText: {
    color: '#5f2979'
  },
  bodyText: {
    fontSize: '12px'
  }
});

export default function UserTable() {
  const classes = useStyles();
  const users = useSelector(usersSelector);

  return (
   <div style={{padding: '0px 10%'}} >
      <Typography variant="h5" gutterBottom>
        User Table
      </Typography>
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" className={classes.headerText}>First Name</TableCell>
            <TableCell align="right" className={classes.headerText}>Last Name</TableCell>
            <TableCell align="right" className={classes.headerText}>Date of Birth</TableCell>
            <TableCell align="right" className={classes.headerText}>Age</TableCell>
            <TableCell align="right" className={classes.headerText}>Hobby</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell align="left" className={classes.bodyText}>
                {row.firstName}
              </TableCell>
              <TableCell align="right" className={classes.bodyText} >{row.lastName}</TableCell>
              <TableCell align="right" className={classes.bodyText}>{row.dob.toDateString()}</TableCell>
              <TableCell align="right" className={classes.bodyText}>{row.age}</TableCell>
              <TableCell align="right" className={classes.bodyText}>{row.hobby}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
   </div>
  );
}