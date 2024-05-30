import React from 'react';
import { useNavigate } from "react-router-dom"

export default function Home()
{
  const navigate = useNavigate();
  const data = {
    name: 'Gungun',
    age: 20,
    gender: 'Female'
  }
  return(
    <div>
      <p>Welcome to React App</p>
      <button onClick={()=>{
          navigate("/about",{state: data});
      }}>About</button>
    </div>
  );
}