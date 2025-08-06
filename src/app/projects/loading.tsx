 "use client";
import React,{useState,useEffect} from 'react';


export default function Loading(){

     const [loading,setLoading]=useState(true);

    useEffect( ()=>{ 
        setTimeout( ()=> {
        setLoading(true);
   }, 1000);

       },[])

    return(
        <>
        <div>
  {
    loading && (
      <h1 className='text-5xl bg-gray-300 text-center flex items-center justify-center h-screen font-bold  text-black '>
        Loading.....
      </h1>
    )
  }
</div>

        </>
    )
}