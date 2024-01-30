// const config

export default function FAQ() {
  return (
    <main className="flex min-h-screen flex-col items-center p-5 ">
      <h1 className="text-5xl my-7">Frequent Asked Questions</h1>
      <div className="collapse collapse-arrow bg-base-200 mb-4">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Μπορώ να ψηφίσω χώρις να είμαι φοιτητης του{" "}
          <a className="text-primary" href="https://www.di.uoa.gr/">
            DIT
          </a>{" "}
          ?
        </div>
        <div className="collapse-content">
          <p>
            Όχι, η δημοσκόπηση είναι αποκλειστικά για φοιτητές του τμήματος,
            καθώς απαιτεί επιβεβαίωση από το φοιτητικό email.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Είναι ανώνυμη η δημοσκόπηση?
        </div>
        <div className="collapse-content">
          <p>
            Ναι, η δημοσκόπηση είναι τελειώς ανώνυμη, γι αυτό κι όλας η εφαρμογή
            είναι{" "}
            <a
              className="text-primary"
              href="https://el.wikipedia.org/wiki/%CE%9B%CE%BF%CE%B3%CE%B9%CF%83%CE%BC%CE%B9%CE%BA%CF%8C_%CE%B1%CE%BD%CE%BF%CE%B9%CE%BA%CF%84%CE%BF%CF%8D_%CE%BA%CF%8E%CE%B4%CE%B9%CE%BA%CE%B1"
            >
              ανοιχού κώδικα (OSS)
            </a>{" "}
            για πλήρης διαφάνεια.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Που μπορώ να βρώ τον κώδικα της εφαρμογής?
        </div>
        <div className="collapse-content">
          <p>
            Η εφαρμογή είναι ανοιχτού κώδικα και μπορεί να βρεθεί{" "}
            <a
              className="text-primary"
              href="https://github.com/takaros999/uni-polls"
            >
              εδώ
            </a>
            .
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Υπάρχει κάποια πολιτική παράταξη πίσω από την εφαρμογή?
        </div>
        <div className="collapse-content">
          <p>
            Όχι. Η εφαρμογή αποτελεί πρωτοβουλία φοιτητή και δεν συνδέεται με
            καμία πολιτική παράταξη.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Ποιος είναι ο σκοπός αυτής της εφαρμογής?
        </div>
        <div className="collapse-content">
          <p>
            Ο σκοπός αυτής της εφαρμογής είναι να δώσει την δυνατότητα σε κάθε
            φοιτητή της Σχολής Πληροφορικής και Τηλεπικοινωνιών του ΕΚΠΑ, να
            ψηφίσει ανώνυμα, ανεξάρτητα από τοποθεσία, και πολιτικές
            πεποιθήσεις.{" "}
          </p>
          <p className="text-xs">
            <b className="text-warning">Προσοχή:</b> Τα απολέσματα αποτελούν μία
            πρόγνωση και μπορεί να μην αντικατροπτίζουν την πραγματικότητα.
          </p>
        </div>
      </div>
    </main>
  );
}
