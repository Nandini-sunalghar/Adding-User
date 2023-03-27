import React, {useState} from 'react';

//components
import Card from '../UI/Card.js';
import Button from '../UI/Button.js';

//css files
import './AddUser.css';

function AddUser() {
  const [userName, setUserName] = useState('');
  const [age, setAge]= useState('');
    const handleSubmit =(prop) =>{
        prop.preventDefault();
        console.log(userName, age);
    }
    const handleUserNameChange = (event) => {
      setUserName(event.target.value);
    }

    const handleAgeChange = (event) => {
      setAge(event.target.value);
    }
  return (
    <div>
        <Card className="input">
        <form onSubmit={handleSubmit}>
            <label>User Name:</label>
            <input type="text" placeholder="Enter Name To Be Added" onChange={handleUserNameChange}></input>
            <label>Age:</label>
            <input type="number" placeholder="Enter Age To Be Added" onChange={handleAgeChange}></input>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
    </div>
  )
}

export default AddUser;