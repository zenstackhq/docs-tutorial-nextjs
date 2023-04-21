import NextAuth, { type NextAuthOptions } from "next-auth";
//import DiscordProvider from "next-auth/providers/discord";
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../server/db/client";
import type { PrismaClient, UserRole } from "@prisma/client";
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
        session.user.role = token.role as UserRole;
      }
      return session;
    },
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.role = user?.role;
      }
      return token;
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
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
        role: true,
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
      role: maybeUser.role,
    };
  };
}

export default NextAuth(authOptions);
