import { createClient } from "@supabase/supabase-js";

const getSupabase = async (accessToken: string) => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      global: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    }
  );

  return supabase;
};
const getAdminSupabase = async () => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      global: {
        headers: {
          Authorization: `Bearer ${process.env.SUPABASE_ADMIN_SECRET}`,
        },
      },
    }
  );

  return supabase;
};

export { getSupabase, getAdminSupabase };
