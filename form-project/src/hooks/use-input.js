import React, { useState } from 'react';

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');

    const valueIsValid = validateValue(enteredValue);
    const hasError = !entereValueIsValid;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value)
    };


    return {
        value: enteredValue, 
        isValid: valueIsValid,
        hasError: hasError,
        valueChangeHandler
    }
};

export default useInput;