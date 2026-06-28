import Link from "next/link";
import {
  FaGlobe,
  FaUsers,
  FaGraduationCap,
  FaCertificate,
  FaLayerGroup,
  FaVideo,
  FaChalkboardTeacher,
  FaBookOpen,
  FaPhone,
} from "react-icons/fa";

const PHONE = "tel:+302721020902";

const highlights = [
  { icon: FaUsers, text: "Ολιγομελή τμήματα & Ιδιαίτερη διδασκαλία" },
  { icon: FaGraduationCap, text: "Αγγλικά & Γερμανικά για παιδιά, εφήβους και ενήλικες" },
  { icon: FaLayerGroup, text: "Όλα τα επίπεδα" },
  { icon: FaCertificate, text: "Όλες οι πιστοποιήσεις" },
  { icon: FaGlobe, text: "Για αρχάριους και προχωρημένους" },
];

const features = [
  {
    icon: FaVideo,
    title: "Άμεση επαφή και διάδραση",
    text: "Ζωντανή επικοινωνία με τον καθηγητή σε κάθε μάθημα.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Συνεχής καθοδήγηση",
    text: "Παρακολούθηση της προόδου σας σε κάθε στάδιο.",
  },
  {
    icon: FaBookOpen,
    title: "Διαδραστικό υλικό",
    text: "Καταρτισμένο προσωπικό και σύγχρονα εκπαιδευτικά εργαλεία.",
  },
];

const OnlineContent = () => {
  return (
    <main id="main-content" className="online-page">
      <section className="online-page__hero padding-top padding-bottom">
        <div className="container">
          <div className="online-page__hero-inner">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6" data-aos="fade-right" data-aos-duration="800">
                <div className="online-page__badge">
                  <FaGlobe /> Διαδικτυακά μαθήματα
                </div>
                <h1 className="online-page__title">
                  Online μαθήματα απ&apos; όπου κι αν βρίσκεσαι
                </h1>
                <p className="online-page__lead">
                  Μάθετε Αγγλικά και Γερμανικά από το σπίτι σας, με την ίδια ποιότητα και
                  αφοσίωση που μας χαρακτηρίζει.
                </p>

                <div className="online-page__highlights">
                  {highlights.map(({ icon: Icon, text }) => (
                    <div key={text} className="online-page__highlight">
                      <div className="online-page__highlight-icon">
                        <Icon />
                      </div>
                      <p className="online-page__highlight-text">{text}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href={PHONE}
                  className="trk-btn trk-btn--rounded trk-btn--primary4 trk-btn--style2"
                >
                  <FaPhone style={{ marginRight: 8 }} />
                  Επικοινωνήστε μαζί μας για περισσότερες πληροφορίες
                </Link>
              </div>

              <div className="col-lg-6" data-aos="fade-left" data-aos-duration="800">
                <div className="online-page__hero-image">
                  <img src="/images/banner/dual.webp" alt="Online μαθήματα Level Up" />
                  <div className="online-page__hero-image-badge">
                    <img src="/images/course/home4/en1.webp" alt="Αγγλικά" />
                    <span>Αγγλικά &amp; Γερμανικά — Όλα τα επίπεδα</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="online-page__why padding-bottom">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 order-lg-2" data-aos="fade-left" data-aos-duration="800">
              <div className="online-page__why-image">
                <img src="/images/about/home1/2.webp" alt="Μάθηση online στο Level Up" />
              </div>
            </div>
            <div className="col-lg-7 order-lg-1" data-aos="fade-right" data-aos-duration="800">
              <div className="section-header">
                <div className="subtitle subtitle--style4">
                  <p className="mb-0">Γιατί online;</p>
                </div>
                <h2 className="about-title">Γιατί online μαθήματα;</h2>
                <p>
                  Στο Level up καθιστούμε την εκμάθηση Αγγλικών και Γερμανικών προσβάσιμη σε
                  όλους, με την ίδια αφοσίωση, ποιότητα και αποτελεσματικότητα. Παρέχουμε
                  οργανωμένα προγράμματα σπουδών για την ολοκλήρωση κάθε επιπέδου και την
                  επιτυχία σε όλες τις πιστοποιήσεις.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="online-page__features padding-bottom">
        <div className="container">
          <div className="section-header text-center mb-5" data-aos="fade-up" data-aos-duration="800">
            <div className="subtitle subtitle--style4">
              <p className="mb-0">Ολιγομελή τμήματα</p>
            </div>
            <h2 className="about-title">Ομοιογενή τμήματα</h2>
            <p className="mx-auto" style={{ maxWidth: 640 }}>
              Μπορείτε να κάνετε δωρεάν την αξιολόγηση του επιπέδου σας μέσω ενός τεστ
              κατάταξης, για να ενταχθείτε σε τμήμα που συμβαδίζει με τις ανάγκες σας.
            </p>
          </div>

          <div className="row g-4">
            {features.map(({ icon: Icon, title, text }, index) => (
              <div
                key={title}
                className="col-md-4"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 100}
              >
                <div className="online-page__feature-card">
                  <div className="online-page__feature-card-icon">
                    <Icon />
                  </div>
                  <h5>{title}</h5>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="padding-bottom">
        <div className="container">
          <div className="online-page__cta" data-aos="zoom-in" data-aos-duration="800">
            <h3>Έτοιμοι να ξεκινήσετε;</h3>
            <p>Καλέστε μας για δωρεάν αξιολόγηση επιπέδου και πληροφορίες για τα online τμήματα.</p>
            <Link href={PHONE} className="trk-btn trk-btn--rounded">
              <FaPhone style={{ marginRight: 8 }} />
              (27210) 20 902
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OnlineContent;
