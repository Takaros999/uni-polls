import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { NextPage } from "next";
import { hasUserVoted } from "@/services/pollEntry.service";
import { redirect } from "next/navigation";

const VotePage: NextPage = withPageAuthRequired(
  async () => {
    const hasVoted = await hasUserVoted();
    if (hasVoted) redirect("/my-vote");

    return (
      <main className="flex min-h-screen flex-col justify-start items-center bg-base-200  ">
        <div className="hero  my-10">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">
                Φοιτητική Δημοκρατία σε Δράση
              </h1>
              <p className="text-sm py-6">
                Η ψήφος σου είναι ανώνυμη και δεν προσμετράται στην επίσημη
                ψηφοφορία.
              </p>
            </div>
          </div>
        </div>
        {/* Form with POST method to your API route */}
        <form action="/api/vote" method="POST">
          <div className="form-control">
            <label className="label cursor-pointer">
              <h4 className="text-lg label-text mr-4">
                Κατάληψη του Τμήματος:
              </h4>
              <input
                type="checkbox"
                name="universityOccupation"
                className="checkbox checkbox-info"
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
                className="checkbox checkbox-info"
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-full mt-7">
            Καταχώρηση.
          </button>
        </form>
      </main>
    );
  },
  { returnTo: "/vote" }
);
export default VotePage;
