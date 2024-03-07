import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import  dbConnect  from "@/lib/dbConnect";
import { Provider } from "next-auth/providers";
import { User } from "@/lib/db";
import { getAccordionUtilityClass } from "@mui/material";
export const authOptions:any = {
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENT_ID ?? "",
            clientSecret: process.env.CLIENT_SECRET ?? "",
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {  type: "text"},
                password: {  type: "password" }
            },
            async authorize(credentials, req){
                await dbConnect();
                const user=await User.findOne({email:credentials.email})
                if(user)
                {
                    if(user.password!==credentials.password)
                    {
                        return null;
                    }
                    else
                    {
                        return  {
                            name: user.name,
                            email: user.email,
                        }
                    }
                }
                else
                {
                    throw new Error("User not found");
                }
            }
        }),
    ] as Provider[],
    callbacks:{
        async signIn({user,account}){
            if(account?.provider=='credentials')return true;
            if(account?.provider=='google'){
                await dbConnect();
                try{
                    const exist=await User.findOne({email : user.email})
                    if(!exist)
                    {
                        const newUser= new User({
                            name:user.name,
                            email:user.email,
                            cart:[],
                        })
                        await newUser.save();
                    }
                    else
                    {
                        user.name=exist.name;
                        user.cart=exist.cart;
                    }
                    return true;
                }
                catch(err)
                {
                    return false;
                }
            }
            
        }

    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    jwt: {
        encryption: true
    },

};
export default NextAuth(authOptions);
