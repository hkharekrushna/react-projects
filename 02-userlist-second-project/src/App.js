import React, {useState} from 'react';
import NewUser from './components/User/NewUser';
import UserList from './components/User/UserList';


function App() {
  
  const INITIAL_USRERS = [] ;

  const [users, setUsers] = useState(INITIAL_USRERS);

  console.log(users);

  const addUserHandler = (userName,age) => {
    //users.push({userName,age});
    let user = {userName: userName, age: age ,id: Math.random().toString()}
    setUsers(
      (previoususers) =>{
        return [...previoususers, user];
      }

    );
    console.log(users);
  };


  return (
    <div>
      <NewUser addUser={addUserHandler}/>
      {users.length===0 && <p style={{textAlign : 'center', fontWeight: 'bold'}}> NO DATA FOUND</p>}
      {users.length>0 && <UserList users={users}/>}
    </div>
  );
}

export default App;
