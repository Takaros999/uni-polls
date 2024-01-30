import dynamic from "next/dynamic";
import { getAllPollEntries } from "@/services/pollEntry.service";
import { hasUserVoted } from "@/services/pollEntry.service";

const Chart = dynamic(() => import("./chart").then((chart) => chart), {
  ssr: false,
});

export default async function Home() {
  const { totalEntries, ...pollEntries } = await getAllPollEntries();
  const hasVoted = await hasUserVoted();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-base-200 p-0 md:p-5 ">
      <div className="hero mt-10 mb-8">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-3xl md:text-5xl whitespace-nowrap	mb-12 font-bold">
              Η γνώμη σου μετράει
            </h1>
            <p className="text-xs">
              Βοήθησε και εσύ στην κατανόηση της κοινής γνώμης, αναφορικά με το
              μέλλον της πανεπιστημιακής μας κοινότητας, μέσω αυτής της ανώνυμης
              δημοσκόπησης.
            </p>
          </div>
        </div>
      </div>
      {hasVoted ? (
        <Chart pollEntries={pollEntries} />
      ) : (
        <div className="p-2 flex flex-col items-center">
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-4xl md:text-6xl text-primary whitespace-nowrap mb-1 font-bold">
              {totalEntries}
            </h2>
            <p>Καταχωρημένες Συμμετοχές</p>
          </div>

          <p className="mb-5 text-center">
            Δες τα αποτελέσματα συμμετέχοντας στην δημοσκόπηση
          </p>
          <a href="/vote">
            <button className="btn btn-primary">Πάρε μέρος</button>
          </a>
        </div>
      )}
    </main>
  );
}
