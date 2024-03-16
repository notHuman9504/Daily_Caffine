import { signIn } from "next-auth/react";
import {useSession,signOut} from "next-auth/react"
import { useRouter } from "next/router";
export function Appbar() {
  const router = useRouter()
  const session=useSession();
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        zIndex:2
      }}
    >
      <div className="h-16 rounded-full px-10 m-1 bg-amber-300 shadow-xl ">
        <div className="h-full flex justify-between items-center text-2xl text-slate-700 font-bold">
          <div className="flex items-end">
          <div className="hover:cursor-pointer" onClick={()=>{
            router.push('/');
          }}>Daily Caffine</div>
          {session.data && <div className="flex gap-4 pl-10 text-lg font-normal">
            <div className="hover:cursor-pointer" onClick={()=>{
              router.push('/dashboard');
            }}>Dashboard</div>
            <div className="hover:cursor-pointer" onClick={()=>{
              router.push('/menu');
            }}>Menu</div>
            <div className="hover:cursor-pointer" onClick={()=>{
              router.push('/cart');
            }}>Cart</div>
          </div>}
          </div>
          <div className="flex text-base font-normal">
            {!session.data && <> <div className="mx-2 py-2 px-4 border-2 border-amber-300 rounded-full duration-300 hover:border-black"><div className="hover:cursor-pointer" onClick={()=>{
              router.push('/login');
            }}>Log In</div></div>
            <div className="bg-white shadow-md py-2 px-4 border-2 border-white rounded-full duration-300 hover:border-black"> <div className="hover:cursor-pointer" onClick={()=>{
              router.push('/signup');
            }}>Sign Up</div> </div>
            </>
            }
            {session.data && <> <div className="mx-2 py-2 px-4 border-2 border-amber-300 rounded-full duration-300 hover:border-black">{session.data.user.name}</div>
            <div className="bg-white shadow-md py-2 px-4 border-2 border-white rounded-full duration-300 hover:border-black"><div className="hover:cursor-pointer" onClick={()=>{
              signOut();
            }}>Sign Out</div> </div>
            </>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
