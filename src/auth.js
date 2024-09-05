import NextAuth from "next-auth";
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from "next-auth/providers/credentials";

const client_id=process.env.CLIENT_ID;
const client_secret=process.env.CLIENT_SECRET;


export const {
    handlers:{GET,POST},
    auth,
    signIn,
    signOut,
}=NextAuth({
    
    providers:[
        Credentials({
            name:'credentials',
            credentials: {
            email: { label: "Email" ,type:'email'},
            password: { label: "Password", type: "password" },
          },
          async authorize(credentials) {
            const response = await fetch(credentials)
            if (!response.ok) return null
            return (await response.json()) ?? null
          }}),
        GithubProvider({
            name:'github',
     clientId:client_id,
     clientSecret:client_secret
    }),
    GoogleProvider()],
    
    // session: {
    //     jwt: true, // Use JWT for session tokens
    //   },
    //   callbacks: {
    //     async session({ session, token }) {
    //       // Customize session object
    //       return session;
    //     },
    //   },
    //   cookies: {
    //     sessionToken: {
    //       name: 'next-auth.session-token',
    //       options: {
    //         httpOnly: true,
    //         secure: process.env.NODE_ENV === 'production', // Set to true in production
    //         sameSite: 'lax', // or 'strict'
    //       },
    //     },
    //   },
    //pages:{signIn:'/login'}//this is when you ant to use your own login
})