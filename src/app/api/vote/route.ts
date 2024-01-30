import { redirect } from "next/navigation";
import { getUserProfileData } from "@/services/profile.service";
import { submitPollEntry } from "@/services/pollEntry.service";

export const POST = async (req: Request) => {
  const user = await getUserProfileData();

  const formData = await req.formData();

  const universityOccupation = formData.get("universityOccupation") === "on";
  const universityPrivatization =
    formData.get("universityPrivatization") === "on";

  await submitPollEntry(
    {
      article_16: universityPrivatization,
      uni_occupation: universityOccupation,
      user_id: user.sub,
    },
    user.supabaseAccessToken
  );

  // Redirect to the "/my-vote" page after processing
  redirect("/my-vote");
};
