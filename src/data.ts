


type Information ={
    id:number,
    name:string,
    img:string,
    url:string,
    github?:string,
    desc?:string,
    languages ?:string[]

 
};
 type Projects =Information[];


 export  const projects: Projects =[
     {   
        id:1,
        name:"To-do List",
        img:"/UNDER.png",
        url:"https://github.com/YUBESHBHATTARAI/to-do",
        github:"https://github.com/YUBESHBHATTARAI/to-do",
        desc:"this is is a simple to-do list app that allows user to add ,delete tasks ",
        languages:["Nextjs", "TypeScript", "TailwindCSS"],
     },
     {
        id:2,
        name:"Personal blog",
        img:"/UNDER.png",
        url:"https://yubeshbhattarai.github.io/News-blog",
        github:"https://github.com/YUBESHBHATTARAI/News-blog",
        desc:"This is a project where i post my personal blogs and articles",
        languages:["Nextjs", "TypeScript", "TailwindCSS"],
     },
     {
        id:4,
        name:"Facebook Clone",
        img:"/UNDER.png",
        url:"https://yubeshbhattarai.github.io/facebookclone",
        github:"https://github.com/YUBESHBHATTARAI/facebookclone",
        desc:"This project is the clone of facebook login page",
        languages:["JavaScript", "HTML", "CSS"],
     },
     {
        id:5,
        name:"DO you love me ?",
        img:"/UNDER.png",
        url:"https://projectlove.netlify.app/",
        github:"https://github.com/YUBESHBHATTARAI/to-do",
        desc:"This is a project about love and relationships. It explores the dynamics of love",
        languages:["JavaScript", "HTML", "CSS"],
     },
     {
        id:6,
        name:"Decimals",
        img:"/UNDER.png",
        url:"https://decimalss.netlify.app/index.html",
        github:"https://github.com/YUBESHBHATTARAI/DECIMALS",
        desc:"This is a e-commerce site with minimal design  " ,
        languages:["JavaScript", "HTML", "CSS"],
     },
     {
        id:7,
        name:"Dashain ",
        img:"/UNDER.png",
        url:"https://dashain.vercel.app/",
        github:"https://github.com/YUBESHBHATTARAI/Dashain",
        desc:"This is a project for providing wishes for evereyone  ",
        languages:["JavaScript", "HTML", "CSS"],
     },
     {
        id:8,
        name:"Food Delivery",
        img:"/UNDER.png",
        url:"https://github.com/YUBESHBHATTARAI/fooddelivery",
        desc:"This is a project about food delivery services.",
        languages:["Nextjs", "TypeScript", "TailwindCSS"],
     },
       {
         id:9,
         name:"Family website ",
         img:"/UNDER.png",
         url:"https://github.com/YUBESHBHATTARAI/P1",
         desc:"[Under Construction] This is a project about the dynamics of my family",
         languages:["Nextjs", "TypeScript", "TailwindCSS"],
       },
     

 ]


