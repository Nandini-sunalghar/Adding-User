import React from 'react';

//components
import Card from '../UI/Card.js';

//css files
import './AddUser.css';

function AddUser() {
    const handleSubmit =(prop) =>{
        prop.preventDefault();
    }
  return (
    <div>
        <Card className="input">
        <form onSubmit={handleSubmit}>
            <label>User Name:</label>
            <input type="text" placeholder="Enter Name To Be Added"></input>
            <label>Age:</label>
            <input type="number" placeholder="Enter Age To Be Added"></input>
            <button type="submit">Add User</button>
        </form>
        </Card>
    </div>
  )
}

export default AddUser;