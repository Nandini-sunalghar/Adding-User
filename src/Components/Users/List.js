import React from 'react';

import Card from '../UI/Card';

//css
import './List.css';

function List(props) {
  console.log(props);
  return (
    <div>
        <Card className="users">
        <ul>
            {props.user.map(data => (
                <li key={data.id}>
                    {data.uName}({data.uAge} years old)
                </li>
            ))}
        </ul>
        </Card>
    </div>
  )
}

export default List;