import React, { useState } from 'react';
import useInput from '../hooks/use-input';

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@')

const Form = () => {
    const { value: enteredName, isValid: enteredInputIsValid, hasError: inputHasError, valueChangeHandler: inputChangeHandler } = useInput(value.trim() !== '');
    
    const { value: firstNameValue, isValid: firstNameIsValid, valueChangeHandler: firstNameChangeHandler, reset: resetFirstName } = useInput(isNotEmpty);
    const { value: emaiValue, isValid: emailIsValid, valueChangeHandler: emailChangeHandler, reset: resetEmail } = useInput(isNotEmpty);
    const { value: messageValue, isValid: messageIsValid, valueChangeHandler: messageChangeHandler, reset: resetMessage } = useInput(isNotEmpty);

    useInput(isNotEmpty);
    useInput(isEmail);

    // const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
    const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);
    const [enteredMessageIsValid, setEnteredMessageIsValid] = useState(true);

    // set enteredName to whatever use input to the event target
    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value)
    };

    const emailInputChangeHandler = (event) => {
        setEnteredEmail(event.target.value)
    };

    const messageInputChangeHandler = (event) => {
        setEnteredMessage(event.target.value)
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        if(enteredName.trim() === '') {
            setEnteredNameIsValid(false);
            return;
        }
            setEnteredNameIsValid(true);


        console.log(enteredName);
        console.log(enteredEmail)
        console.log(enteredMessage)
    
        setEnteredName('')
        setEnteredEmail('')
        setEnteredMessage('')
    };

    // const firstNameClasses = firstNameHassError ? 'form-control invalid' : 'form-valid'
    // const emailClasses = emailHasError ? 'form-control invalid' : 'form-valid'
    // const messageNameClasses = messageHasError ? 'form-control invalid' : 'form-valid'

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className='form'>
                <div className='form-control'>
                    <label className='firstName'>First Name</label>
                    <input 
                    type='text' 
                    id='name' 
                    onChange={nameInputChangeHandler} 
                    value={firstNameValue}
                    onChange={firstNameChangeHandler    }
                    />
                    {!enteredNameIsValid && <p className='error-text'>Name must not be empty!</p>}
                </div>
                <div className='form-control'>
                    <label className='email'>Email</label>
                    <input 
                    type='email' 
                    id='email' 
                    onChange={emailInputChangeHandler}
                    value={enteredEmail}
                    />
                    {!enteredEmailIsValid && <p className='error-text'>Email must not be empty!</p>}
                </div>
                <div className='form-control'>
                    <label className="message">Message</label>
                    <input 
                    type='text' 
                    id='message' 
                    onChange={messageInputChangeHandler}
                    value={enteredMessage}
                    />
                    {!enteredMessageIsValid && <p className='error-text'>Message must not be empty!</p>}
                </div>
                <button>Submit</button>
            </div>
        </form>
    );
};

export default Form;