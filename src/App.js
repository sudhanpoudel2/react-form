// import { useState , useEffect } from "react";
import React, { useEffect, useState } from 'react';
import "./App.css"; 
  
function App() { 
    const [firstName, setFirstName] = useState('');
 const [lastName, setLastName] = useState('');
 const [email, setEmail] = useState('');
 const [contact, setContact] = useState('');
 const [gender, setGender] = useState('');
 const [subject , setSubject] = useState('');
 const [resume, setResume] = useState('');

//   const getData =  ()=>{
//     const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch users when the component mounts
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/data', {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//       }});
//         setUsers(response.data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, [])};

  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("hello");
        const response = await fetch("http://localhost:3000/getUserData", {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await response.json();
        setUsers(json);
        console.log(json);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchData();
  }, []);

  

    const submitData = async (e) => {
        e.preventDefault();
    
        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            contact : contact,
            gender : gender,
            subject : subject,
            resume : resume
        };
    
        try {
            const response = await fetch('http://localhost:5000/data', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

    
            const data = await response.json();
            // if (data.status) {
                
            // }
            console.log(data + "Sudhan Poudel"); // Response from the server
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    
    return ( 
        <div className="App"> 
            <h1>Form in React</h1> 
            <fieldset> 
                <form action="/data" method="post" onSubmit={submitData}> 
                    <label for="firstname">First Name*</label> 
                    <input 
                        type="text"
                        name="firstname"
                        id="firstname"
                        placeholder="Enter First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                        required 
                    /> 
                    <br /><br /> 
                    <label for="lastname">Last Name*</label> 
                    <input 
                        type="text"
                        name="lastname"
                        id="lastname"
                        placeholder="Enter Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                        required 
                    /> 
                    <br /><br /> 
                     <label for="email">Enter Email* </label> 
                    <input 
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    /> 
                    <br /><br /> 
                    <label for="tel">Contact*</label> 
                    <input 
                        type="tel"
                        name="tel"
                        id="tel"
                        placeholder="Enter Mobile number"
                        onChange={(e) => setContact(e.target.value)}
                        required 
                    /> 
                    <br /><br /> 
                    <label htmlFor="gender">Gender*</label>
          <br />
          <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="other"
            id="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
          Other
                    <br /><br /> 
                    <label for="lang">Your best Subject</label> 
                    <br /> 
                    <input 
                    type="checkbox" 
                    name="lang"
                    id="english" 
                    checked={subject === 'english'}
                    onChange={(e) => setSubject(e.target.checked ? 'english' : "")} /> 
                    English 
                    <input 
                    type="checkbox" 
                    name="lang"
                    id="maths"
                    checked={subject === 'maths'}
                    onChange={(e) => setSubject(e.target.checked ? "maths" : "")}/> 
                    Maths 
                    <input 
                    type="checkbox" 
                    name="lang"
                    id="physics"
                    checked={subject === 'physics'}
                    onChange={(e) => setSubject(e.target.checked ? "physics":"")} /> 
                    Physics 
                    <br /><br /> 
                    <label for="file">Upload Resume*</label> 
                    <input 
                        type="file"
                        name="file"
                        id="file"
                        placeholder="Enter Upload File"
                        onChange={(e) => setResume(e.target.value)}
                        required 
                    /> 
                    <br /><br /> 
                    {/*<label for="url">Enter URL*</label> 
                    <input 
                        type="url"
                        name="url"
                        id="url"
                        placeholder="Enter url"
                        required 
                    /> 
                    <br /><br /> 
                    <label>Select your choice</label> 
                    <select name="select" id="select"> 
                        <option value="" disabled selected> 
                            Select your Ans 
                        </option> 
                        <optgroup label="Beginers"> 
                            <option value="1">HTML</option> 
                            <option value="2">CSS</option> 
                            <option value="3">JavaScript</option> 
                        </optgroup> 
                        <optgroup label="Advance"> 
                            <option value="1">React</option> 
                            <option value="2">Node</option> 
                            <option value="3">Express</option> 
                            <option value="4">MongoDB</option> 
                        </optgroup> 
                    </select> 
                    <br /><br /> 
                    <label for="about">About</label> 
                    <br /> 
                    <textarea 
                        name="about"
                        id="about"
                        cols="30"
                        rows="10"
                        placeholder="About your self"
                        required 
                    ></textarea> 
                    <br /><br />  */}
                    <label>Submit OR Reset</label> 
                    <br /> 
                    <button type="reset" value="reset"> 
                        Reset 
                    </button> 
                    <button type="submit" value="Submit"> 
                        Submit 
                    </button> 
                </form> 
                <div>
            <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user._id} - {user.createdAt}
          </li>
        ))}
        </ul></div> 
            </fieldset> 
          
        </div> 
    ); 
} 
  
export default App;