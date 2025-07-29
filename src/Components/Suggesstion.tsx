
"use client"
import { useState ,useEffect } from "react";

const sugesstiuon =[
    {id:0 ,text:"As a fellow developer, I’ve seen Yubesh grow from a curious ,.", author: "Samir Nitaula"},
    {id:1 ,text:"As a fellow developer,dhusdgfhs ,.", author: "Samir fdbdsh"},
    {id:2 ,text:"As a fellow developer, lorem3.", author: "Samir fjerfg"},
    {id:3 ,text:"As a fellow developer, I’ve seen Yubesh grow from a curious ,.", author: "ewfdbwf Nitaula"},
    {id:4 ,text:"As a fello Yubesh grow from a curious ,.", author: "Samir Nitaula"},
    {id:5 ,text:"Ayubedvsh, I’ve seen Yubesh grow from a curious ,.", author: "Samir Nitaula"},
    {id:6 ,text:"An Yubesh grow from a curious ,.", author: "dewdfhewvfu Nitaula"},
]
export default function Suggestion(){

   const[current,setCurrent]=useState(0)
    useEffect( ()=> {
        const Interval =setInterval(()=>{
            setCurrent(Math.floor(Math.random()*sugesstiuon.length))
        },3000)

        return () => clearInterval(Interval); // Clean up on unmount
    })
    const item=sugesstiuon[current];



//     return(
//         <div id="sugg " className="w-full flex flex-col md:flex-row shadow-lg md:items-center md:justify-between text-md px-6 py-2 text-justtify my-1  gap-2  ">
//             <div className="md:w-1/2  px-2 py-2 h-2/3 shadow-lg rounded-b-2xl   " >
//                <h1 className="px-2 py-1  italic  bg-gray-100 rounded-md  z-10 "> "As a fellow developer, I’ve seen Yubesh grow from a curious learner to a skilled front-end developer. He’s focused, creative, and genuinely passionate about building great user  ."</h1> 
//                <p className="text-end text-sm font-italic font-bold font-[Inter] ">-Samir nitaula</p>
//             </div>

//                <div className="md:w-1/2  px-2 py-2 h-2/3  shadow-lg rounded-b-3xl   " >
//                 <h1 className="px-2 py-1 italic bg-gray-100 rounded-md  z-10  ">"As a friend and fellow developer, I’ve seen Yubesh grow into a focused and creative front-end developer. I’ve seen Yubesh grow into a foHis consistency, curiosity, and positive energy truly stand out."</h1>
//                 <p className="text-end text-sm font-bold font-[Inter] ">-bhakro niraula</p>
//             </div>
//         </div>
//     )
// }

return(
    <>
    <div>
        <div>
            {
           <div>

             <h1>
                {item.text}
             </h1>
             <p>{item.author}</p>
           </div>
            }
        </div>
    </div>
    </>
)}