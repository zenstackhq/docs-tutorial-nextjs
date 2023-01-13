import NextAuth, { type NextAuthOptions } from "next-auth";
//import DiscordProvider from "next-auth/providers/discord";
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../server/db/client";
import type { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  // Include user.id on session
  callbacks: {
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub!;
      }
      return session;
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    // highlight-start
    // Remove DiscordProvider below:
    // DiscordProvider({
    //   clientId: env.DISCORD_CLIENT_ID,
    //   clientSecret: env.DISCORD_CLIENT_SECRET,
    // }),
    // highlight-end

    // highlight-start
    CredentialsProvider({
      credentials: {
        email: {
          type: "email",
        },
        password: {
          type: "password",
        },
      },
      authorize: authorize(prisma),
    }),
    // highlight-end
  ],
};

function authorize(prisma: PrismaClient) {
  return async (
    credentials: Record<"email" | "password", string> | undefined
  ) => {
    if (!credentials) {
      throw new Error("Missing credentials");
    }

    if (!credentials.email) {
      throw new Error('"email" is required in credentials');
    }

    if (!credentials.password) {
      throw new Error('"password" is required in credentials');
    }

    const maybeUser = await prisma.user.findFirst({
      where: {
        email: credentials.email,
      },
      select: {
        id: true,
        email: true,
        password: true,
      },
    });

    if (!maybeUser || !maybeUser.password) {
      return null;
    }

    const isValid = await compare(credentials.password, maybeUser.password);

    if (!isValid) {
      return null;
    }

    return {
      id: maybeUser.id,
      email: maybeUser.email,
    };
  };
}

export default NextAuth(authOptions);
