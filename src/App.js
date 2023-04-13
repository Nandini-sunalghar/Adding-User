import React, { useState } from 'react';
//components
import AddUser from './Components/Users/AddUser';
import List from './Components/Users/List';

//css files
import './App.css';


function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler =(name,age) => {
    setUserList((prev) => {
      return [...prev, {uName: name, uAge: age, id: Math.random()*10}];
    })
  }
  return (
    <div className="App">
      <h1>Adding-user</h1>
      <AddUser onAddUser={addUserHandler}/>
      <List user={userList}/>
    </div>
  );
}

export default App;
