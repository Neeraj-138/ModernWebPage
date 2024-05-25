import axios from 'axios';
import{  React, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Add() {
const [book,setBook]=useState(
    {
        title:"",
        descrip:"",
        price:null,
        cover:""
    });

const navigate=useNavigate();

const handleChange=(e)=>{
    setBook((prev)=>({ ...prev,  [e.target.name]:e.target.value}));
};
const handleClick= async(e)=>{
    e.preventDefault();
    try{
        console.log("data to be sent",book);
        await axios.post("http://localhost:8000/books",book); 
        navigate('/');
    }
    catch(err){
        console.log(err);
    }

}

  return (
    <div>
        <div className='form'>
            <h2>Add new book</h2>
            <input type='text' placeholder='Title' onChange={handleChange} name='title'  /> 
            <input type='text' placeholder='Description' onChange={handleChange} name='descrip' /> 
            <input type='number' placeholder='Price' onChange={handleChange} name='price' /> 
            <input type='text' placeholder='Cover' onChange={handleChange} name='cover' /> 
            <button onClick={handleClick}>Add</button>
        </div>

    </div>
  )
}

export default Add