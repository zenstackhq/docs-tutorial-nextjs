import { PrismaAdapter } from '@auth/prisma-adapter';
import { type PrismaClient } from '@prisma/client';
import { type DefaultSession, type NextAuthConfig } from 'next-auth';
import { compare } from 'bcryptjs';
import CredentialsProvider from 'next-auth/providers/credentials';
import { db } from '~/server/db';

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module 'next-auth' {
    interface Session extends DefaultSession {
        user: {
            id: string;
        };
    }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authConfig = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { type: 'email' },
                password: { type: 'password' },
            },
            authorize: authorize(db),
        }),
    ],
    adapter: PrismaAdapter(db),
    callbacks: {
        session: ({ session, token }) => {
            if (session.user) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                session.user.id = token.sub!;
            }
            return session;
        },
    },
} satisfies NextAuthConfig;

function authorize(prisma: PrismaClient) {
    return async (credentials: Partial<Record<'email' | 'password', unknown>> | undefined) => {
        if (!credentials) {
            throw new Error('Missing credentials');
        }

        if (typeof credentials.email !== 'string') {
            throw new Error('"email" is required in credentials');
        }

        if (typeof credentials.password !== 'string') {
            throw new Error('"password" is required in credentials');
        }
        const maybeUser = await prisma.user.findFirst({
            where: { email: credentials.email },
            select: { id: true, email: true, password: true },
        });
        if (!maybeUser?.password) return null;
        // verify the input password with stored hash
        const isValid = await compare(credentials.password, maybeUser.password);

        if (!isValid) return null;
        return { id: maybeUser.id, email: maybeUser.email };
    };
}
