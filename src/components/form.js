import React from 'react';
import { useDispatch } from 'react-redux';

import Input from './input';
import Typography from '@material-ui/core/Typography';
import Button from './button';
import Calendar from 'react-calendar';
import { addUser } from '../redux/users/action';

const styles  = {
  form: {
    width: '400px',
    margin: '100px auto'
  }
  
};

export default function UserForm({onSubmit}) {
  const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    dob: new Date(),
    age: '',
    hobby: ''
  }
  const [values, setValues] = React.useState(INITIAL_STATE)
  const dispatch = useDispatch();

  function getInputProps(fieldName) {
    return {
      name: fieldName,
      value: values[fieldName],
    }
  }

  function getOnchageHandler(fieldName) {
    return (e) => {
      if(typeof e.persist === 'function' ) {
        e.persist();
      }
      setValues(prevValues => ({...prevValues, [fieldName]: e.target.value}));
    }
  }

  function handleCalenderChange(date) {
    function _calculateAge(birthday) { // birthday is a date
      var ageDifMs = Date.now() - birthday.getTime();
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

    setValues(prevValues => ({...prevValues, age: _calculateAge(date), dob: date}))
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addUser(values))
    setValues(INITIAL_STATE);
  }

  const firstNameInputProps = getInputProps('firstName');
  const lastNameInputProps = getInputProps('lastName');
  const dobInputProps = getInputProps('dob');
  const ageInputProps = getInputProps('age');
  const hobbyInputProps = getInputProps('hobby');

  return (
    <form style={styles.form} onSubmit={handleSubmit} >
       <Typography variant="h5" gutterBottom>
        User form
      </Typography>
      <Input placeholder="First Name" {...firstNameInputProps} onChange={getOnchageHandler('firstName')}   />
      <Input placeholder="Last Name"  {...lastNameInputProps} onChange={getOnchageHandler('lastName')} />
      <span>Date of Birth</span>
      <Calendar
        onChange={handleCalenderChange}
        {...dobInputProps}
      />
      <Input placeholder="Age" disabled {...ageInputProps } onChange={getOnchageHandler('age')} />
      <Input placeholder="Hobby"  {...hobbyInputProps} onChange={getOnchageHandler('hobby')}  />
      <Button label="Add User"  />
    </form>
  )
}