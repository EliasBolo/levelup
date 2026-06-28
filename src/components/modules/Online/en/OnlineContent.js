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
  { icon: FaUsers, text: "Small groups & private lessons" },
  { icon: FaGraduationCap, text: "English & German for children, teens and adults" },
  { icon: FaLayerGroup, text: "All levels" },
  { icon: FaCertificate, text: "All certifications" },
  { icon: FaGlobe, text: "For beginners and advanced learners" },
];

const features = [
  {
    icon: FaVideo,
    title: "Direct contact & interaction",
    text: "Live communication with your teacher in every lesson.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Continuous guidance",
    text: "Progress tracking at every stage of your learning.",
  },
  {
    icon: FaBookOpen,
    title: "Interactive materials",
    text: "Qualified staff and modern educational tools.",
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
                  <FaGlobe /> Online courses
                </div>
                <h1 className="online-page__title">
                  Online lessons from wherever you are
                </h1>
                <p className="online-page__lead">
                  Learn English and German from home, with the same quality and dedication
                  that defines Level Up.
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
                  Contact us for more information
                </Link>
              </div>

              <div className="col-lg-6" data-aos="fade-left" data-aos-duration="800">
                <div className="online-page__hero-image">
                  <img src="/images/banner/dual.webp" alt="Level Up online courses" />
                  <div className="online-page__hero-image-badge">
                    <img src="/images/course/home4/en1.webp" alt="English" />
                    <span>English &amp; German — All levels</span>
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
                <img src="/images/about/home1/2.webp" alt="Online learning at Level Up" />
              </div>
            </div>
            <div className="col-lg-7 order-lg-1" data-aos="fade-right" data-aos-duration="800">
              <div className="section-header">
                <div className="subtitle subtitle--style4">
                  <p className="mb-0">Why online?</p>
                </div>
                <h2 className="about-title">Why online lessons?</h2>
                <p>
                  At Level Up, we make learning English and German accessible to everyone,
                  with the same dedication, quality and effectiveness. We provide structured
                  programmes for completing every level and succeeding in all certifications.
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
              <p className="mb-0">Small groups</p>
            </div>
            <h2 className="about-title">Homogeneous groups</h2>
            <p className="mx-auto" style={{ maxWidth: 640 }}>
              You can take a free level assessment through a placement test, so you join
              a group that matches your needs.
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
            <h3>Ready to get started?</h3>
            <p>Call us for a free level assessment and information about our online groups.</p>
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
