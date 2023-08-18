import React,{useState} from 'react';
import cssClasses from './NewUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';


const NewUser = (props) => {

    const [userName,setUserName] = useState("");
    const [age,setAge] = useState("");
    const [error,setError] = useState();

    const userNameChangeHandler = (event) => {  
        setUserName(event.target.value); 
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if(userName.trim().length ===0 || age.trim().length ===0){
            setError(
                {   
                    title : "INVALID INPUT", 
                    message : "Please fill all the fields"
                }
            );

            return ;
        }

        if(+age <1 ){
            setError(
                {   
                    title : "INVALID INPUT", 
                    message : "Please enter a valid age"
                }
            );

            return ;
        }

        props.addUser(userName,age);
        setUserName("");
        setAge("");   
       
    };

    const onErrorOkHanlder = (   ) => {
        setError(null);
        console.log("clearing error");
    };



    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={onErrorOkHanlder}></ErrorModal>}

            <Card className={cssClasses.input}>
                <form onSubmit={submitHandler}> 
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" value={userName} onChange={userNameChangeHandler}/>
                    </div>
                    <div>
                        <label htmlFor="age">Age</label>
                        <input type="number" name="age" id="age" value={age} onChange={ageChangeHandler}/>
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </Card>

        </div>
        

    );
};

export default NewUser;
