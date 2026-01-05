import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user";
import { connectToDatabase } from "@/lib/mongodb";
import bcrypt from "bcryptjs";

// defining NextAuth Handler
const handler = NextAuth({
  session: {
    strategy: "jwt",
  },

  //defining authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",

      // defining the credentials fields used in the login form
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      // performing authorization
      async authorize(credentials) {
        try {
          await connectToDatabase();

          const user = await User.findOne({ email: credentials?.email });
          if (!user) {
            throw new Error("No user found");
          }

          // comparing provided password with hashed password in the database
          const isValidPassword = await bcrypt.compare(
            credentials?.password ?? "",
            user.password as string
          );
          if (!isValidPassword) {
            throw new Error("Invalid password");
          }

          return user;
        } catch {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          email: token.email,
          name: `${token.firstName} ${token.lastName}`,
          firstName: token.firstName,
          lastName: token.lastName,
          image: token.picture,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
