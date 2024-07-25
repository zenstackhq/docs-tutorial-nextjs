import { NextRequestHandler } from "@zenstackhq/server/next";
import { enhance } from "@zenstackhq/runtime";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "../../../server/auth";
import { db } from "../../../server/db";

async function getPrisma(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerAuthSession({ req, res });
  // create a wrapper of Prisma client that enforces access policy,
  // data validation, and @password, @omit behaviors
  return enhance(db, { user: session?.user });
}

export default NextRequestHandler({ getPrisma });
