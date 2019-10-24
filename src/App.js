import React from 'react';
import { Provider } from 'react-redux';

import UserForm from './components/form';
import UserTable from './components/table';
import Typography from '@material-ui/core/Typography';
import store from './redux';


function App() {
  return (
    <div style={{padding: '30px 0px'}}>
      <Typography variant="h3" gutterBottom style={{color: '#5f2979', fontWeight: 'bold', textAlign: 'center'}}>
        Enye Challenge
      </Typography>
      <Provider store={store} >
        <UserForm />
        <UserTable />
      </Provider>
    </div>
  );
}

export default App;
