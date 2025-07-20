

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
 


export default function Education(){

    return(
        <div className=" w-screen flex  flex-col px-6 py-3  gap-1 md:flex-row  text-stone-600 rounded-lg    ">
          {schools.map((item)=>(
           <div  key={item.id}className="ring-1 ring-black   w-full  flex flex-col justify-center items-center my-2 md:mx-1  h-[30vh] md:h-[36vh] lg:h-[40vh]  md:w-[50vw] lg:w-[33vw] shadow-md rounded-lg  gap-4 shadow-lg    ">
                 <h1 className="text-center text-2xl lg:text-3xl  font-bold font-serif uppercase ">{item.class}</h1>
                 <h1 className="text-center  text-xl font-bold font-sans text-stone-800">{item.fullname} <span className="font-mono font-bold ">({item.name})</span></h1>
                 <p className="text-center  font-mono  ">SUB:{item.sub}</p>
                 <p className="text-center  font-sans italic font-bold ">{item.date}</p>
                            
           </div>

          ))}
           
          


        </div>
        )
}