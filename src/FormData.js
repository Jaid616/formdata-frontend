import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FormData() {
   const [data,setdata] = useState();
   const [loading,setloading]= useState(true);
   let number = 0;
   


      
   const loaddata =async()=>{
  
    await fetch('https://backend-wywh.onrender.com/api')
    .then(response=>response.json())
    .then(res=>{
         setdata(res)
         setloading(false)
    });
  
  } 

  const clear = async(id)=>{
   
    await fetch(`https://backend-wywh.onrender.com//api/${id}`, {
      method: "DELETE",
    });

    loaddata();
  };

  useEffect(()=>{
    loaddata();
  },[])

  

 
  if(loading) return <p>Loading.........</p>

  return (
<>
<h2 className="text-info">Show All Information</h2>
   <table>
    <thead>

    <tr>
      <th>Serial No.</th>
   <th >Name</th>
       <th>Email</th>
       <th>Number</th>
       <th>Password</th>
       <th>Gender</th>
       <th>Country</th>
       <th>Language</th>
       <th>Action</th>
    </tr>
    </thead>
    <tbody>
  
    {
        
        data.map((e)=>{
         
                return(
                    
                    <tr key={e._id}>
                      
                        <td>{number=number+1}</td>
                        <td>{e.username}</td>
                        <td>{e.email}</td>
                        <td>{e.number}</td>
                        <td>{e.password}</td>
                        <td>{e.gender}</td>
                        <td>{e.country}</td>
                        <td>{e.languages.map((e1)=>{
                          return (e1+ " " ); 
                        })}</td> 
                        <td><button className='delbtn' onClick={()=>clear(e._id)}>Delete</button></td>
                        
                    </tr>

                )
        })

       

      }
    
  
    </tbody>
    
      

   </table>
   <div className='btn'>

   <Link to= "/">
        <button className="btn-info">Go Back to Form</button>  
                  
                  </Link>
   </div>
      </>
  )
}
