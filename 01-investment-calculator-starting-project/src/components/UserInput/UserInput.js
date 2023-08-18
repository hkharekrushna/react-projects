import React,{useState} from 'react';
import classes from './UserInput.module.css';

const INTIAL_USER_INPUT = {
  "current-savings": 10000,
  "yearly-contribution": 300,
  "expected-return": 7,
  "duration": 10,
};
const UserInput = (props) =>{

  const [userInput,setUserInput] = useState(INTIAL_USER_INPUT);

  const submitHandler = (event) =>{
    event.preventDefault();  //prevent from loading again after submission
    console.log("SUBMITTED");
    props.onCalculate(userInput);
  };

  const resetHandler = () =>{
    console.log("RESET");
    setUserInput(INTIAL_USER_INPUT);
  };

  const onChangeHandler = (identifier,value) =>{
    console.log(identifier + value);
    setUserInput(
      (preveState) =>{
        return {
        ...preveState,
          [identifier]: +value
        }
      }
    );
  }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" onChange={(event) =>{
              onChangeHandler("current-savings",event.target.value);
            }}
            value={userInput['current-savings']} 
            id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" onChange={(event) =>{
              onChangeHandler("yearly-contribution",event.target.value);}} 
              value={userInput['yearly-contribution']}
              id="yearly-contribution" />
          </p>
        </div>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" onChange={(event) =>{
              onChangeHandler("expected-return",event.target.value);}} 
              value={userInput['expected-return']}
              id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" onChange={(event) =>{
              onChangeHandler("duration",event.target.value);}} 
              value={userInput['duration']}
              id="duration" />
          </p>
        </div>
        <p className={classes.actions}>
          <button type="reset" className={classes.buttonAlt} onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className={classes.button}>
            Calculate
          </button>
        </p>
      </form>
    );
};

export default UserInput;