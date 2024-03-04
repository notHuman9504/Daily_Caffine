import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
export function Login() {
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
            style={{
              width: "400px",
            }}
          />
        </div>
        <div className="mt-6">
          <Button
            className="text-black bg-amber-300 hover:bg-amber-300 rounded-xl"
            variant="contained"
            style={{
              width: "400px",
            }}
          >
            Log In
          </Button>
        </div>
        <div>or</div>
        <div>
          <Button
            className="text-black bg-amber-300 hover:bg-amber-300 rounded-xl"
            variant="contained"
            style={{
              width: "400px",
            }}
          >
            Sign In with Google
          </Button>
        </div>
      </div>
    </div>
  );
}
