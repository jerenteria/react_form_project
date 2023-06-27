import React from 'react';

const Form = () => {
    const formSubmissionHandler = (event) => {
        event.preventDefault()
    };
    
    // const firstNameClasses = firstNameHassError ? 'form-control invalid' : 'form-valid'
    // const emailClasses = emailHasError ? 'form-control invalid' : 'form-valid'
    // const messageNameClasses = messageHasError ? 'form-control invalid' : 'form-valid'

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className='form'>
                <div className='firstName'>
                    <label className='firstName'>First Name</label>
                    <input type='text' id='name' placeholder='First Name'></input>
                </div>
                <div className='email'>
                    <label className='email'>Email</label>
                    <input type='email' id='email' placeholder='Email'></input>
                </div>
                <div className='lastName'>
                    <label className="message">Message</label>
                    <input type='text' id='message' placeholder='Share With Us'></input>
                </div>
                <button>Submit</button>
            </div>
        </form>
    );
};

export default Form;