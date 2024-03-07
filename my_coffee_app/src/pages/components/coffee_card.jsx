import { Button } from "@mui/material";
import { signOut } from "next-auth/react";
export function CoffeeCard({item}) {
  return (
    <div className="rounded-lg border-2 border-amber-300 shadow-xl p-2">
      <div>
        <img
          className="w-full rounded-lg shadow-lg"
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
          >
            Grab It for {item.price}
          </Button>
        </div>
      </div>
    </div>
  );
}
