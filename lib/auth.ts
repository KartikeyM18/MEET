import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "../lib/prisma";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                email: { label: "Email", type: "email", placeholder: "jsmith@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            
            async authorize(credentials) {
                if (!credentials) return null;
                const givenPassword = credentials.password;
                const existingUser = await prisma.user.findFirst({
                    where: {
                        email: credentials.email
                    }
                });

                if (existingUser) {
                    if (existingUser.password === (process.env.SECRET_PASS_FOR_GOOGLE as string)) return null;

                    const isPasswordValid = (givenPassword === existingUser.password);
                    if (isPasswordValid) {
                        return {
                            id: existingUser.id.toString(),
                            name: existingUser.name,
                            email: existingUser.email
                        }
                    }
                    return null;
                }

                try {
                    const user = await prisma.user.create({
                        data: {
                            email: credentials.email,
                            name: credentials.username,
                            password: credentials.password
                        }
                    })

                    return {
                        id: user.id.toString(),
                        name: user.name,
                        email: user.email
                    }
                } catch (e) {
                    console.log(e);
                }

                return null;
            }
        })

    ],
    secret: process.env.NEXTAUTH_SECRET as string,
    callbacks: {
        
        async signIn({ user, account }) {
            
            if (account?.type !== 'credentials') {

                const existingUser = await prisma.user.findFirst({
                    where: {
                        email: user.email as string
                    }
                })

                if (existingUser) {
                    return true;
                }

                try {
                    await prisma.user.create({
                        data: {
                            email: user.email as string,
                            name: user.name as string,
                            password: (process.env.SECRET_PASS_FOR_GOOGLE as string)
                        }
                    })

                    return true;
                } catch (e) {
                    console.log(e);
                }

            }
            return true;
        },

        
        async session({ session, token }) {

            session.user.id = token.sub
           
            return session
        }
    }
}