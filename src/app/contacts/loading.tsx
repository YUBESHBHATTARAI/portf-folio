 "use client";
import React,{useState,useEffect} from 'react';


export default function Loading(){

     const [loading,setLoading]=useState(true);

    useEffect( ()=>{ 
        setTimeout( ()=> {
        setLoading(true);
   }, 4000);
       },[])

      

    return(
        <>
        <div>
  {
    loading && (
      <div className='flex items-center justify-center h-screen w-screen'>
           
          <div className='animate-spin border-4 border-blue-500 border-b-transparent rounded-full  h-8 w-8 '>
          </div>

           <h1  className='text-3xl text-center flex items-center justify-center h-screen font-bold  text-black mx-4 '>loading...</h1>

      </div>


    )
  }
</div>

        </>
    )
}