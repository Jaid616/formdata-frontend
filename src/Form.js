import React from "react";
import { useState } from "react";
import {Validate} from "./Validate";
import { Link } from 'react-router-dom';

export default function Form() {
  const [errordata, seterrordata] = useState({});
  const  [isSubmit,setisSubmit] = useState(false) ;
  const [responsemsg , setresponsemsg] = useState('');

  const [state, setstate] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    cpassword:"",
    gender: "",
    languages: [],
    country: "",
  });

  const onchangeHandler = (e) => {
    if (e.target.name === "language") {
      let copy = { ...state };
      const value = e.target.value;
      const checked = e.target.checked;
      if (checked) {
        copy.languages.push(value);
      } else {
        copy.languages = copy.languages.filter((data) => data !== value);
      }
      setstate(copy);
    } else {
      setstate({
        ...state,
        [e.target.name]: e.target.value,
      });
    }
  };

  const closebtn = ()=>{
    setisSubmit(false);
     window.location.reload();
  }
  const send =  ()=>{
    fetch("https://backend-wywh.onrender.com//api", {
      method: "POST",
      body: JSON.stringify({
        username:state.name,
        email:state.email,
        number:state.number,
        password:state.password,
        gender:state.gender,
        languages:state.languages,
        country:state.country,
      }),
      headers: {
        "content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errresponsedata) => {
            throw Error(errresponsedata.error);
          });
        }
        return response.json();
      })
      .then((responsedata) => {
        let msg = responsedata.message;
         setresponsemsg(msg);
       
      })
      .catch((err) => {
        let msg = err.message;
        setresponsemsg(msg);
       
      }); 
  }
 

  const submitForm = (e) => {
    e.preventDefault();
  let ErrorHandle = Validate(state);
  
     seterrordata(ErrorHandle);
     if( Object.keys(ErrorHandle).length < 1){
         send();
         setisSubmit(true);   

    } 
  };

  return (
    <>
      {isSubmit ?  <div className="pop">
     <div className="pop-box" >
         <div className="cross" onClick={closebtn}>

         <div className="cross-1"></div>
         <div className="cross-2"></div>
         </div>
        <p className="pop-box-contain">{responsemsg}</p>
        <Link to= "/infomation">
        <button className="sbtn">Show All Data</button>  
                  
                  </Link>
      
        </div>
     </div> : null}
       
      <div className="container">
        <form onSubmit={submitForm} className="formbox">
          <div className="form-field">
            <label className="text-lable" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              value={state.name}
              className="field"
              id="name"
              name="name"
              onChange={onchangeHandler}
            />
            <span className="error">{errordata.nameError}</span>
          </div>
          <div className="form-field">
            <label className="text-lable" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              value={state.email}
              className="field"
              id="email"
              name="email"
              onChange={onchangeHandler}
            />
            <span className="error">{errordata.emailError}</span>
          </div>
          <div className="form-field">
            <label className="text-lable" htmlFor="number">
              Number
            </label>
            <input
              type="number"
              value={state.number}
              className="field"
              id="number"
              name="number"
              onChange={onchangeHandler}
            />
            <span className="error">{errordata.numberError}</span>
          </div>
          <div className="form-field">
            <label className="text-lable">Password</label>
            <input
              type="password"
              value={state.password}
              className="field"
              id="password"
              name="password"
              onChange={onchangeHandler}
            />
            <span className="error">{errordata.passwordError}</span>
          </div>
          <div className="form-field">
            <label className="text-lable" htmlFor="cpassword">
              Confirm Password
            </label>
            <input
              type="password"
              value={state.cpassword}
              className="field"
              id="cpassword"
              name="cpassword"
              onChange={onchangeHandler}
            />
            <span className="error">{errordata.cpasswordError}</span>
          </div>
          <div className="form-field">
            <label className="text-lable">Gender</label>

            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={onchangeHandler}
              checked={state.gender === "Male"}
            />
              &nbsp;
            <label htmlFor="gender">Male</label>
             &nbsp;  &nbsp;
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={onchangeHandler}
              checked={state.gender === "Female"}
            />
            &nbsp;
            <label htmlFor="gender">Female</label>
            &nbsp;  &nbsp;
            <input
              type="radio"
              name="gender"
              value="Other"
              onChange={onchangeHandler}
              checked={state.gender === "Other"}
            />
            &nbsp;
            <label htmlFor="gender">Other</label>
            &nbsp;  &nbsp;
            <p>
              <span className="error">{errordata.genderError}</span>
            </p>
          </div>
          <div className="form-field">
            <label className="text-lable">Languages</label>
            <input
              type="checkbox"
              name="language"
              value="HTML"
              onChange={onchangeHandler}
            />
            &nbsp;
            <label htmlFor="language">HTML</label>
            &nbsp;  &nbsp;
            <input
              type="checkbox"
              name="language"
              value="CSS"
              onChange={onchangeHandler}
            />
            &nbsp;
            <label htmlFor="language">CSS</label>
            &nbsp;  &nbsp;
            <input
              type="checkbox"
              name="language"
              value="JAVASCRIPT"
              onChange={onchangeHandler}
            />
            &nbsp;
            <label htmlFor="language">JAVASCRIPT</label>
            &nbsp;  &nbsp;
            <p>
              <span className="error">{errordata.languagesError}</span>
            </p>
          </div>

          <div className="from-field">
            <label htmlFor="Country">Country</label>
            <select
              name="country"
              id="country"
              className="field"
              onChange={onchangeHandler}
            > <option value=""  >
            
          </option>
              <option value="India" checked={state.country}>
                INDIA
              </option>
              <option value="UK" checked={state.country}>
                UK
              </option>
              <option value="USA" checked={state.country}>
                USA
              </option> 
            </select>
            <p>
              <span className="error">{errordata.countryError}</span>
            </p>
          </div>

          <button className="sbtn">Submit</button>
        </form>
      </div>
    </>
  );
}
