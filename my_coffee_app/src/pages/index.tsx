import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const session=useSession();
  const router = useRouter();
  function route()
  {
    if(session.data)
          {
            router.push('/dashboard')
          }
          else
          {
            router.push('/signup')
          }
  }
  return (<div className="pt-10">
    <div className="grid grid-cols-10 gap-4 p-10">
      <div className=" rounded-xl col-span-5 flex">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="text-3xl ">Tired from the Work?</div>
        
          <div>
            Just forget the work and take a sip in entire new world
          </div>
          <div className="m-4 py-2 px-6 border-2 border-amber-300 bg-amber-300 rounded-full duration-300 shadow-xl hover:border-black"><div className="hover:cursor-pointer"
          onClick={route}
          >Grab a Coffee</div></div>
        </div>
      </div>
      <div className="col-span-5">
        
        <div className="grid grid-cols-3 gap-8">
        <div className="col-span-1"><img className="w-full rounded-xl" src="./Recommended1.jpeg" alt="" /></div>
        <div className="col-span-1"><img className="w-full rounded-xl" src="./Recommended2.jpeg" alt="" /></div>
        <div className="col-span-1"><img className="w-full rounded-xl" src="./Recommended3.jpeg" alt="" /></div>
        <div></div>
        </div>
        <div className="m-4 py-2 px-6 text-center border-2 border-amber-300 bg-amber-300 rounded-full duration-300 shadow-xl hover:border-black"><div className="hover:cursor-pointer" 
        onClick={()=>{
          route();
        }}
        >Check Out the Latest </div></div>

        <div>

        </div>
      </div>
    </div>

  </div>)
}
