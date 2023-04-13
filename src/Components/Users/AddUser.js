import React, {useState} from 'react';

//components
import Card from '../UI/Card.js';
import Button from '../UI/Button.js';
import ErrorModal from '../UI/ErrorModal.js';

//css files
import './AddUser.css';

function AddUser(props) {
  const [userName, setUserName] = useState('');
  const [age, setAge]= useState('');
  const [errorMsg, setErrorMsg] = useState();
    const handleSubmit =(prop) =>{
        prop.preventDefault();
        if(userName.length===0 || age.length===0){
          setErrorMsg({title: 'Invalid Input', content: 'Please enter valid Name and Age(non-empty) values'})
          return;
        } 
        if(age < 1){
          setErrorMsg({title: 'Invalid Input', content: 'Please enter valid Age(>0)'})
          return;
        }
        props.onAddUser(userName,age);
        // console.log(userName, age);
        setUserName('');
        setAge('');
    }
    const handleUserNameChange = (event) => {
      setUserName(event.target.value);
    }

    const handleAgeChange = (event) => {
      setAge(event.target.value);
    }

    const errorHandler = () => {
      setErrorMsg(null);
    }
  return (
    <div>
        {errorMsg && <ErrorModal title={errorMsg.title} content={errorMsg.content} onConfirm={errorHandler}/> }
        <Card className="input">
        <form onSubmit={handleSubmit}>
            <label>User Name:</label>
            <input type="text" placeholder="Enter Name To Be Added" value={userName} onChange={handleUserNameChange}></input>
            <label>Age:</label>
            <input type="number" placeholder="Enter Age To Be Added" value={age} onChange={handleAgeChange}></input>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
    </div>
  )
}

export default AddUser;