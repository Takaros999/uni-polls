import "server-only";
import { Claims, getSession } from "@auth0/nextjs-auth0";

export const getUserProfileData = async (): Promise<Claims> => {
  const session = await getSession();

  if (!session) {
    throw new Error(`Requires authentication`);
  }

  const { user } = session;

  return user;
};

export const getUserDbToken = async (): Promise<{
  data?: { userId: string; dbToken: string };
}> => {
  const session = await getSession();

  if (!session) {
    return {};
  }

  const { user } = session;

  return {
    data: {
      userId: user.sub,
      dbToken: user.supabaseAccessToken,
    },
  };
};

export const isUserAuthenticated = async (): Promise<boolean> => {
  const session = await getSession();

  return !!session;
};
