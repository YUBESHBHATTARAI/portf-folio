"use client";
import Image from "next/image";
import Link from "next/link";
import {useEffect , useRef}  from "react";





export default function Skills(){
    const scrollRef =useRef(null)

    return(
        <div className=" flex ">
            <div  className="relative h-[26vh] w-[12vw]  -z-20">
                <Link href="/">
                <Image className="-z-10" src="/Html.png" alt="" fill />
                </Link>

            </div>
            <div  className="relative h-[26vh] w-[12vw]  -z-20">
                <Link href="/">
                <Image className="-z-10" src="/C++.png" alt="" fill />
                </Link>

            </div>
            <div  className="relative h-[26vh] w-[12vw]  -z-20">
                <Link href="/">
                <Image className="-z-10" src="/Next.png" alt="" fill />
                </Link>

            </div>
            <div  className="relative h-[26vh] w-[12vw]  -z-20">
                <Link href="/">
                <Image className="-z-10" src="/Js.png" alt="" fill />
                </Link>

            </div>
            <div  className="relative h-[26vh] w-[12vw]  -z-20">
                <Link href="/">
                <Image className="-z-10" src="/tailwind.png" alt="" fill />
                </Link>

            </div>

           <div  className="relative h-[26vh] w-[12vw]  -z-20">
                <Link href="/">
                <Image src="/C.png" alt="" fill/>
                </Link>
            </div>

            <div  className="relative h-[26vh] w-[12vw]  -z-20">
                <Link href="/">
                <Image className="-z-10" src="/React.png" alt="" fill />
                </Link>

            </div>
            <div  className="relative h-[26vh] w-[12vw]  -z-20">
                <Link href="/">
                <Image className="-z-10" src="/Css.png" alt="" fill />
                </Link>

            </div>
            
        </div>
    )
}