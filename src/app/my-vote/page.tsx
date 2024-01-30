import { getUserVote } from "@/services/pollEntry.service";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { NextPage } from "next";
import { redirect } from "next/navigation";

const MyVotePage: NextPage = withPageAuthRequired(
  async () => {
    const pollEntry = await getUserVote();
    if (!pollEntry) redirect("/vote");

    return (
      <main className="flex min-h-screen flex-col justify-start items-center bg-base-200  ">
        <div className="hero mt-20 mb-10">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold mb-3">Συγχαρητήρια!</h1>
              <h2 className="text-3xl font-bold">Η ψήφος σου καταχωρήθηκε.</h2>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-primary shadow-lg mb-5 p-5">
          <div className="form-control">
            <label className="label cursor-pointer">
              <h4 className="text-lg label-text mr-4">
                Κατάληψη του Τμήματος:
              </h4>
              <input
                type="checkbox"
                name="universityOccupation"
                className="checkbox checkbox-primary"
                checked={pollEntry?.uni_occupation}
                disabled
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <h4 className="text-lg label-text mr-4">
                Ίδρυση μη κρατικών Πανεπιστημίων:
              </h4>
              <input
                type="checkbox"
                name="universityPrivatization"
                className="checkbox checkbox-primary"
                checked={pollEntry?.article_16}
                disabled
              />
            </label>
          </div>
        </div>
        <a className="btn btn-primary" href="/">
          Δες τα συνολικά αποτελέσματα.
        </a>
      </main>
    );
  },
  { returnTo: "/vote" }
);
export default MyVotePage;
