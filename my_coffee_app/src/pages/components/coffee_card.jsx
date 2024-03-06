import { Button } from "@mui/material";
import { signOut } from "next-auth/react";
export function CoffeeCard() {
  return (
    <div className="rounded-lg border-2 border-amber-300 shadow-xl p-2">
      <div>
        <img
          className="w-full rounded-lg shadow-lg"
          src="./Recommended3.jpeg"
          alt=""
        />
      </div>
      <div className="p-2">
        <div className="text-lg">Caffe Americano</div>
        <div className="text-sm text-slate-400">
          Rich in flavour, full-bodied espresso with hot water in true...
        </div>
        <div className="mt-6">
          <Button
            className="text-black w-full bg-amber-300 hover:bg-amber-300 rounded-full shadow-md"
            variant="contained"
          >
            Grab It
          </Button>
        </div>
      </div>
    </div>
  );
}
