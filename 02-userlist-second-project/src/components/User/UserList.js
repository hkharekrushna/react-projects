import React,{useState} from 'react';
import Card from '../UI/Card';
import cssClasses from './UserList.module.css';

const UserList = (props) => {

    return (
        <Card className={cssClasses.users}>
            <ul > 
                {props.users.map(user => (
                    <li key={user.id}>{user.userName}-{user.age}</li>
                ))}
            </ul>
        </Card>
            
    );

};

export default UserList;

