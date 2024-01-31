import {
  GetLoginState,
  handleAuth,
  handleCallback,
  Session,
} from "@auth0/nextjs-auth0";
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const afterCallback = async (
  req: NextApiRequest,
  session: Session,
  state: GetLoginState
) => {
  const payload = {
    userId: session.user.sub,
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
  };

  session.user.supabaseAccessToken = jwt.sign(
    payload,
    process.env.SUPABASE_SIGNING_SECRET as string
  );

  return session;
};

export const GET = handleAuth({
  async callback(req: NextApiRequest, res: NextApiResponse) {
    try {
      // @ts-expect-error
      return await handleCallback(req, res, { afterCallback });
    } catch (error) {
      // @ts-expect-error
      res.status(error.status || 500).end(error.message);
    }
  },
});
