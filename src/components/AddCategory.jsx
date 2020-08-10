import React, { Fragment,useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const[inputValue,SetInputValue]=useState('');

    const inputChange=(e)=>{
        // console.log(e.target.value);
        SetInputValue(e.target.value);
    }

    const handelSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategories(cats=>[inputValue,...cats])
            SetInputValue('');
        }
    }

    return ( 
        <Fragment>
        {/* <h1>{inputValue}</h1> */}
        <form onSubmit={handelSubmit}>
            <p>{inputValue}</p>
            <input
            type="text"
            value={inputValue}
            onChange={inputChange}
            />
            </form>
        </Fragment>
     );
}

AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired
}
 
export default AddCategory;