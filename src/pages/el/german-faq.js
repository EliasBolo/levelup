import Headerfour from "../../components/headers/Headerfour";
import Footerfour from "../../components/footers/Footerfour";
import PageHeader from "../../components/modules/Home/el/PageHeader";
import Meta from "../../components/meta/el/Meta";
import Accordion from "../../components/partials/Accordion";

const GermanFAQ = () => {
  const faqData = [
    {
      question: "A1",
      answer: "Μαθαίνουμε βασικές λέξεις και εκφράσεις, πώς να συστηθούμε και να μιλήσουμε για καθημερινά θέματα (π.χ. οικογένεια, σπίτι, φαγητό)."
    },
    {
      question: "A2",
      answer: "Κατανοούμε απλές προτάσεις και μπορούμε να μιλήσουμε για την καθημερινότητα, ψώνια, εργασία ή ταξίδι με απλό τρόπο."
    },
    {
      question: "B1",
      answer: "Μαθαίνουμε να συζητάμε για εμπειρίες, σχέδια και όνειρα. Κατανοούμε κείμενα με απλή γλώσσα και μπορούμε να τα αφηγηθούμε."
    },
    {
      question: "B2",
      answer: "Επικοινωνούμε με άνεση σε πιο σύνθετα θέματα. Κατανοούμε άρθρα, ταινίες ή συζητήσεις και εκφράζουμε γνώμη με σαφήνεια."
    },
    {
      question: "C1",
      answer: "Χρησιμοποιούμε τη γλώσσα με ευχέρεια και ακρίβεια. Κατανοούμε απαιτητικά κείμενα και εκφραζόμαστε με άνεση σε σπουδές ή εργασία."
    },
    {
      question: "C2",
      answer: "Μιλάμε και γράφουμε με πλήρη ευχέρεια, κατανοούμε ό,τι ακούμε ή διαβάζουμε και χρησιμοποιούμε τη γλώσσα σχεδόν σαν φυσικοί ομιλητές."
    }
  ];

  return (
    <div>
      <Meta />
      <Headerfour />
      <PageHeader
        title="Γερμανικά"
        subtitle="Γερμανικά"
        image='/images/banner/banner2.webp'
      />

      <div className="faq-section padding-top padding-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">
                <h2 className="section-title">Μαθήματα Γερμανικά</h2>
                <h3 style={{ marginTop: '10px', color: '#666', fontWeight: '400' }}>Επίπεδα Γερμανικών</h3>
              </div>
              
              <div className="faq-content" data-aos="fade-up" data-aos-duration="800">
                <Accordion items={faqData} language="el" />
              </div>
              
              <div className="text-center mt-5">
                <p style={{ fontSize: '16px', color: '#666', marginBottom: '20px' }}>
                  Έχετε περισσότερες ερωτήσεις; Είμαστε εδώ για να βοηθήσουμε!
                </p>
                <a 
                  href="/contact" 
                  className="trk-btn trk-btn--rounded trk-btn--primary4"
                  style={{ textDecoration: 'none' }}
                >
                  Επικοινωνία
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footerfour />
    </div>
  );
};

export default GermanFAQ;
