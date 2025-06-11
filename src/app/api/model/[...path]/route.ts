import { enhance } from '@zenstackhq/runtime';
import { NextRequestHandler } from '@zenstackhq/server/next';
import { db } from '~/server/db';
import { auth } from '~/server/auth';

// create an enhanced Prisma client with user context
async function getPrisma() {
    const authObj = await auth();
    return enhance(db, { user: authObj?.user });
}

const handler = NextRequestHandler({ getPrisma, useAppDir: true });

export { handler as DELETE, handler as GET, handler as PATCH, handler as POST, handler as PUT };
