"use client";
import {useState ,useEffect } from "react";

const schools=[
  {
    id:1,
    class:"school",
    name:"VVA",
    fullname:"Vidhya Vikash Academy",
    date:"2006-2020",
    sub:"all",
    
  },
  {
    id:2,
    class:"high school",
    name:"DSS",
    fullname:"Dhulabari Secondary School",
    date:"2021-2023",
    sub:"Science",
  },
  {
    id:3,
    class:"Bachelor",
    name:"MMC",
    fullname:"Mechi Multiple Campus",
    date:"2023-2027",
    sub:"B.Sc.CSIT",
  }
]
 




export default  function Education(){
     const[current , setCurrent]=useState(0);

     useEffect(()=>{
       const interval = setInterval( ()=>{
        setCurrent((prev)=> (prev === schools.length-1 ? 0: prev+1))
       },5000)

       return  () =>{
         clearInterval(interval)
       }

     },[schools.length])


  

  return(
    <>
        <h1 className="text-2xl font-bold text-center py-2 uppercase font-[Inter] ">My Education</h1>
           <div className=" w-screen  md:w-[90%]  lg:w-[77%] flex  flex-col items-center justify-center px-6   gap-1 md:flex-row  text-stone-600 rounded-lg  mx-auto   ">
           <div className="ring-1 ring-black w-full px-2 py-3  flex flex-col justify-center items-center my-2 md:mx-1  h-[30vh] md:h-[36vh] lg:h-[40vh]  md:w-[80%] lg:w-[85%] shadow-[0_0_20px_rgba(0,0,0,0.15)] 
                rounded-lg  gap-4 ">
             <h1 className="text-center  md:text-3xl  text-2xl lg:text-4xl  font-bold font-serif uppercase ">{schools[current].class}</h1>
            <h1 className="text-center  md:text-3xl lg:text-4xl text-xl font-bold font-sans text-stone-800">{schools[current].fullname} <span className="font-mono font-bold ">({schools[current].name})</span></h1>
                 <p className="text-center md:text-2xl  lg:text-3xl text-xl font-mono  ">SUB:{schools[current].sub}</p>
             <p className="text-center md:text-3xl  lg:text-4xl font-sans italic font-bold ">{schools[current].date}</p>
           </div>
           </div>
    </>
  )

}