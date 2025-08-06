

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
           <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
   
      <h1 className="text-5xl font-bold animate-ping duration-500  ">404</h1>
      <p className=" mt-[2rem] text-4xl font-[Inter] animate-pulse ">Page Not Found</p>
      <a href="/" className="mt-4 text-blue-500 underline  ">Go Home</a>
    </div>
  )
}
