import { signIn } from "next-auth/react";
import {useSession,signOut} from "next-auth/react"
export function Appbar() {
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
          <div>Daily Caffine</div>
          <div className="flex text-base font-normal">
            {!session.data && <> <div className="mx-2 py-2 px-4 border-2 border-amber-300 rounded-full duration-300 hover:border-black"><a href="" onClick={()=>{signIn()}}>Login</a></div>
            <div className="bg-white shadow-md py-2 px-4 border-2 border-white rounded-full duration-300 hover:border-black"> <a href="">SignUp</a> </div>
            </>
            }
            {session.data && <> <div className="mx-2 py-2 px-4 border-2 border-amber-300 rounded-full duration-300 hover:border-black">{session.data.user.name}</div>
            <div className="bg-white shadow-md py-2 px-4 border-2 border-white rounded-full duration-300 hover:border-black"> <a href="" onClick={()=>signOut()}>Sign Out</a> </div>
            </>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
