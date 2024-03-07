import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
export function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const router = useRouter();
  return (
    <div>
      <div className="flex flex-col items-center w-full pt-24">
        <div className="text-2xl">Login</div>
        <div className="m-6 ">
          <TextField
            InputProps={{
                style: {
                  borderRadius: "10px",
                },
              }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(e)=>{
              setEmail(e.target.value);
            }}
            value={email}
            style={{
              width: "400px",
            }}
          />
        </div>
        <div>
          <TextField
            InputProps={{
                style: {
                  borderRadius: "10px",
                },
              }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={(e)=>{
              setPassword(e.target.value);
            }}
            value={password}
            style={{
              width: "400px",
            }}
          />
        </div>
        <div className="mt-6">
          <Button
            variant="contained"
            style={{
              width: "400px",
              color:"black",
              backgroundColor:"#FFD54F"
            }}
            onClick={async()=>{
              const status=await signIn('credentials',{
                redirect:false,
                email:email,
                password:password,
                callbackUrl:"http://localhost:3000/dashboard"
              })
              if(status.ok)
              {
                router.push(status.url);
              }
            }}
          >
            Log In
          </Button>
        </div>
        <div>or</div>
        <div>
          <Button
            
            variant="contained"
            style={{
              width: "400px",
              color:"black",
              backgroundColor:"#FFD54F"
            }}
            onClick={async()=>{
      
              signIn('google',{callbackUrl:"http://localhost:3000/dashboard"})
            }}
          >
            Sign In with Google
          </Button>
        </div>
      </div>
    </div>
  );
}
