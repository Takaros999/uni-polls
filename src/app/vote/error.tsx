"use client"; // Error components must be Client Components

const VoteErrorPage = () => {
  return (
    <main className="flex min-h-screen flex-col justify-start items-center bg-base-200  ">
      <div className="hero  my-10">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-3xl md:text-4xl whitespace-nowrap	mb-4 font-bold">
              Κάτι πήγε στραβά!
            </h1>
            <p className="text-sm">
              Δοκίμασε να ξανασυνδεθείς ή{" "}
              <a href="mailto:dit.uoa.polls@gmail.com" className="text-primary">
                επικοινώνησε μαζί μας
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VoteErrorPage;
