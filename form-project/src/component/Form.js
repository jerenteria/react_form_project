import React from 'react';

const Form = () => {
    const formSubmissionHandler = (event) => {
        event.preventDefault()
    };
    
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className='firstName'>
                <label>First Name</label>
                <input type='text' id='name' placeholder='First Name'></input>
            </div>
            <div className='email'>
                <label>Email</label>
                <input type='email' id='email' placeholder='Email'></input>
            </div>
            <div className='message'>
                <label>Message</label>
                <input type='text' id='message' placeholder='Share With Us'></input>
            </div>
            <button>Submit</button>
        </form>
    );
};

export default Form;