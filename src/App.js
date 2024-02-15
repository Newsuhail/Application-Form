import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [details,setDetails]=useState({
    FullName:'',
    LastName:'',
    MobileNumber:'',
    Email:'',
    Password:'',
    ConformPassword:'',
    Address:'',
    Date_and_Time:'',
    Admission_Date:'',
    Choose_a_City:'',
    Select_State:''
})

const handlechange =(e) =>{
  const {name,value} = e.target;
  
  setDetails((prev)=>{
      return{...prev, [name]: value}
  })
}

  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(details)
  }


  return (
    
    <div className='container'>
      <h1>APPLICATION FORM</h1>
      <hr></hr>
      <div className='container1'>
      <form onSubmit={handlesubmit}>
        <div className='input1'>
        <h3>FullName: <br></br> <input type='text' placeholder='FullName' name='FullName' onChange={handlechange}></input></h3> 
       
        <h3>LastName:<br></br> <input type='text' placeholder='LastName' name='LastName' onChange={handlechange}></input></h3> 
        </div>
        <div className='input1'>
        <h3>MobileNumber: <br></br> <input type='text' placeholder='MobileNumber' name='MobileNumber' onChange={handlechange}></input></h3> 
        <h3>Email:<br></br> <input type='text' placeholder='Email' name='Email' onChange={handlechange}></input></h3> 
        </div>
        <div className='input1'>
        <h3>Password:<br></br> <input type='password' placeholder='Password' name='Password' onChange={handlechange}></input></h3> 
        <h3>ConformPassword:<br></br> <input type='password'placeholder='ConformPassword' name='ConformPassword' onChange={handlechange}></input></h3> 
        </div>
        <div className='input1'>
        <h3>Address:<br></br> <textarea name='Address' placeholder='Address' onChange={handlechange}></textarea></h3> <br></br>
        <h3>Date_and_Time: <br></br> <input type='datetime-local'  name='Date_and_Time' onChange={handlechange}></input></h3> 
        </div>
        <div className='input1'>
        <h3>Admission_Date: <br></br> <input type='date' name='Admission_Date'  onChange={handlechange}></input></h3> 
        <h3>Choose_a_City:<br></br> 
        <select name='Choose_a_City' onChange={handlechange} type='text'>
       
          <option value='Banglore'>Banglore</option>
          <option value='Tumkur'>Tumkur</option>
          <option value='Shivmoga'>Shivmoga</option>
          <option value='Tamil_Nadu'>Tamil_nadu</option>
        </select>
         
        </h3> 
        </div>
        <div className='input1'>
        <h3>Select_State: <br></br> 
         <select name='Choose_a_City' onChange={handlechange} type='text'>
          <option value='Banglore'>Banglore</option>
          <option value='Tumkur'>Tumkur</option>
          <option value='Shivmoga'>Shivmoga</option>
          <option value='Tamil_Nadu'>Tamil_nadu</option>
     </select></h3> 
        <button className='submit' type='submit'>Procced</button>
        </div>

      </form>
      </div>
    </div>
  );
}

export default App;
