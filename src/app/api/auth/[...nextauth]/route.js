import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import ConnectDB from "@/lib/ConnectDB";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials, req) {
        // console.log(credentials)
        const { name, email, password, image } = credentials;

        const user = { name, email, password, image };
        console.log(user);
        if (user) {
          const db = await ConnectDB()
     const usersCollection = db.collection('users');
          const users = await usersCollection.findOne({ email });
          console.log(users);

          if (!users || !users.password || !name || !image) {
           return null;
          }

          if (users.password !== password) {
            return null;
          }
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google"  || account.provider === "github") {
        const { name, email, image } = user;
        try {
          const db = await ConnectDB()
     const usersCollection = db.collection('users');
          const userExists = await usersCollection.findOne({ email });
          

          if (!userExists) {
           
            await usersCollection.insertOne({
              name: user.name,
              email: user.email,
              image: user.image,
              // Add other fields as needed (e.g., hashedPassword for future email/password login)
            });

        
            return user;
          } else{
            throw new Error("User already exists");
          }
        } catch (error) {
          console.log(error);
        }
      }

      return user;
    },
  },
  database: process.env.MONGODB_URI,
});

export { handler as GET, handler as POST };