import "server-only";
import { Tables, TablesInsert } from "../types/supabase";
import { getUserDbToken } from "@/services/profile.service";
import { getAdminSupabase, getSupabase } from "../utils/supabase";

export const submitPollEntry = async (
  data: TablesInsert<"poll_entries">,
  dbToken: string
): Promise<void> => {
  const supabase = await getSupabase(dbToken);

  const { error } = await supabase.from("poll_entries").insert(data);

  if (error) {
    console.log(data, error);
    // throw new Error("Failed to submit poll entry");
  }
};

export const getUserVote = async (): Promise<Tables<"poll_entries"> | null> => {
  const { data: tokenData } = await getUserDbToken();
  if (!tokenData) return null;

  const supabase = await getSupabase(tokenData.dbToken);

  const { data: pollEntry, error } = await supabase
    .from("poll_entries")
    .select("*")
    .eq("user_id", tokenData.userId)
    .maybeSingle<Tables<"poll_entries">>();

  return pollEntry;
};

export const hasUserVoted = async (): Promise<boolean> => {
  const { data: tokenData } = await getUserDbToken();
  if (!tokenData) return false;

  const supabase = await getSupabase(tokenData.dbToken);

  const { data: pollEntry, error } = await supabase
    .from("poll_entries")
    .select("*")
    .eq("user_id", tokenData.userId)
    .maybeSingle<Tables<"poll_entries">>();

  if (error) return false;

  return !!pollEntry;
};

type PollResults = {
  universityPrivatization: {
    yes: number;
    no: number;
  };
  universityOccupation: {
    yes: number;
    no: number;
  };
  totalEntries: number;
};

export const getAllPollEntries = async (): Promise<PollResults> => {
  const supabase = await getAdminSupabase();

  const { data: pollEntries, error } = await supabase
    .from("poll_entries")
    .select("*")
    .returns<Tables<"poll_entries">[]>();

  const result: PollResults = {
    universityOccupation: { yes: 0, no: 0 },
    universityPrivatization: { yes: 0, no: 0 },
    totalEntries: pollEntries?.length ?? 0,
  };

  pollEntries?.reduce((accumulator, pollEntry) => {
    if (pollEntry.uni_occupation) {
      accumulator.universityOccupation.yes++;
    } else {
      accumulator.universityOccupation.no++;
    }
    if (pollEntry.article_16) {
      accumulator.universityPrivatization.yes++;
    } else {
      accumulator.universityPrivatization.no++;
    }
    return accumulator;
  }, result);

  return result;
};
