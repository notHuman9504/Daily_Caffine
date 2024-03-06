import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { Provider } from "next-auth/providers";
export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
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
