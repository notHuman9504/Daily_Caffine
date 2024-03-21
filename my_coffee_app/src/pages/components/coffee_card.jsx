import { Button } from "@mui/material";
import axios from "axios";
import { signOut } from "next-auth/react";
import { type } from "os";
export function CoffeeCard({item}) {
  return (
    <div className="rounded-lg border-2 border-amber-300 shadow-md p-2">
      <div>
        <img
          className="w-full aspect-[4/4] object-cover rounded-lg shadow-lg"
          src={item.image}
          alt=""
        />
      </div>
      <div className="p-2">
        <div className="text-lg">{item.name}</div>
        <div className="text-sm text-slate-400">
          {item.description}
        </div>
        <div className="mt-6">
          <Button
            style={{
              width:"100%",
              color:"black",
              backgroundColor:"#FFD54F",
              borderRadius:"50px"
            }}
            variant="contained"
            onClick={async()=>{
              const res=await axios.post("http://localhost:3000/api/addtocart",{
                itemId:item._id
              },{headers: {
                'Content-Type': 'application/json',
              }})

            }}
          >
            Grab It for {item.price}
          </Button>
        </div>
      </div>
    </div>
  );
}
