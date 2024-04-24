
import { NextAuthOptions, getServerSession } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import process from "process";

export const authOptions: NextAuthOptions = {
    providers: [    
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
    ],
    session: {
      strategy: 'jwt',
      maxAge: 1 * 24 * 60 * 60,
    },
    jwt: {
      // JWT encoding and decoding configurations
    },
    callbacks: {
        async signIn(user, account ) {

           let auth_token = user?.account?.id_token
           console.log("auth token google -------------------------------");
           console.log(auth_token);
           console.log("auth token google -------------------------------");
          return true;
        },
        // other callbacks
      },
      pages: {
      },
    };