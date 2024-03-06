import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import  dbConnect  from "@/lib/dbConnect";
import { Provider } from "next-auth/providers";
import { User } from "@/lib/db";
export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {  type: "text"},
                password: {  type: "password" }
            },
            async authorize(credentials, req) {
                dbConnect();
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
