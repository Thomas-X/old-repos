import React, { Component } from 'react';
import styled from 'styled-components';

const Input = (props) => {
    const { onChangeHandler, onClickHandler, buttonName, onClear, value } = props;

    const onKeyPressHandler = (event) => {
        if (event.key === 'Enter') {
            onClickHandler();
            onClear();
        }
    };

    const onClickButton = (event) => {
        onClickHandler(event);
        onClear();
    };

    return (
        <div>
            <input 
                value={value} 
                onChange={onChangeHandler} 
                onKeyPress={onKeyPressHandler}/>
            <button onClick={onClickButton}>{buttonName}</button>
        </div>
    );
};

export default Input;