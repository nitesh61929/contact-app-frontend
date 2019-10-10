import React from 'react';
import './App.css';
import Contacts from './contacts/Contacts';

const App = () => {
  return (
    <div className="card">
      <div className="card-header">Contact App</div>
      <div className="card-body">
        <Contacts />
      </div>
      <div className="card-footer">Footer</div>
    </div>
  );
}

export default App;
