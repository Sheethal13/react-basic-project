import { useState } from 'react';

import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';
import './App.css';

function App() {

  const [userInput, setUserInput]=useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10
    });//ladder method here - where one state managed for 4 input  fields.
    const inputIsValid = userInput.duration>=1 
    function handleChange(inputIdentifier,newValue){
        setUserInput(prevInputValue =>{
            return {
                ...prevInputValue ,
                [inputIdentifier] : +newValue
            };
        })
    }

    //sibling components should be depicted as a single jsx component, so this wrapping is used.
  return (
    <>
    <Header />
    <UserInput  userInput={userInput} onChange={handleChange}/>
    {!inputIsValid && (
      <p className='center'>
        Please enter a duration greater than zero.
      </p>
    )}
    {inputIsValid && <Results input={userInput}/>}
    </>
  );
}

export default App;
