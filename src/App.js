import React from 'react';

import UserForm from './components/form';
import UserTable from './components/table';
import Typography from '@material-ui/core/Typography';


function App() {
  const [users, setUsers] = React.useState([]);
  
  function saveUser(user) {
    setUsers(prevUsers => ([...prevUsers, user]))
  }

  return (
    <div style={{padding: '30px 0px'}}>
      <Typography variant="h3" gutterBottom style={{color: '#5f2979', fontWeight: 'bold', textAlign: 'center'}}>
        Enye Challenge
      </Typography>
      <UserForm onSubmit={saveUser} />
      <UserTable data={users} />
    </div>
  );
}

export default App;
