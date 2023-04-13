import React from 'react';

import Card from './Card';
import Button from './Button';

import './ErrorModal.css';

function ErrorModal(props) {
  return (
    <div>
        {console.log(props)}
        <div className='backdrop' onClick={props.onConfirm}/>
        <Card className="modal">
            <header className="header">
                <h1>
                    {props.title}
                </h1>
            </header>
            <div className="content">
                <p>{props.content}</p>
            </div>
            <footer className='actions'>
                <Button onClick={props.onConfirm}>Got it!</Button>
            </footer>
        </Card>

    </div>
  )
}

export default ErrorModal;