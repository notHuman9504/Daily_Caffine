import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
export function SignUp() {
  const router = useRouter();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [name,setName] = useState("");
  return (
    <div>
      <div className="flex flex-col items-center w-full pt-24">
        <div className="text-2xl m-2">Sign Up</div>
        <div>
          <TextField
            InputProps={{
                style: {
                  borderRadius: "10px",
                },
              }}
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            onChange={(e)=>{
              setName(e.target.value);
            }}
            value={name}
            style={{
              width: "400px",
            }}
          />
        </div>
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
              const res=await axios.post('http://localhost:3000/api/auth/signup',{
                name,
                email,
                password
              })
              if(res.data)
              {
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
              }
            }}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
