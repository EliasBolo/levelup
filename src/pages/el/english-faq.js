import Headerfour from "../../components/headers/Headerfour";
import Footerfour from "../../components/footers/Footerfour";
import PageHeader from "../../components/modules/Home/el/PageHeader";
import Meta from "../../components/meta/el/Meta";
import Accordion from "../../components/partials/Accordion";

const EnglishFAQ = () => {
  const faqData = [
    {
      question: "Pre-Junior",
      answer: "Η πρώτη επαφή με τα Αγγλικά γίνεται μέσα από παιχνίδια, τραγούδια και δημιουργικές δραστηριότητες. Στόχος είναι τα παιδιά να αγαπήσουν τη γλώσσα και να νιώθουν άνετα να τη χρησιμοποιούν."
    },
    {
      question: "A Junior",
      answer: "Τα παιδιά αρχίζουν να αποκτούν βασικό λεξιλόγιο και να σχηματίζουν απλές προτάσεις. Μέσα από ευχάριστες δραστηριότητες, ενθαρρύνονται να επικοινωνούν με αυτοπεποίθηση."
    },
    {
      question: "B Junior",
      answer: "Το λεξιλόγιο εμπλουτίζεται και εισάγονται απλές γραμματικές δομές. Τα παιδιά μαθαίνουν να κατανοούν και να χρησιμοποιούν τη γλώσσα πιο φυσικά στην καθημερινότητα."
    },
    {
      question: "A Class",
      answer: "Σε αυτό το επίπεδο οι μαθητές εμβαθύνουν στο λεξιλόγιο και στη γραμματική. Η κατανόηση κειμένων και η παραγωγή προφορικού λόγου καλλιεργούνται με δημιουργικές ασκήσεις."
    },
    {
      question: "B Class",
      answer: "Τα παιδιά αναπτύσσουν την ικανότητα να επικοινωνούν με μεγαλύτερη ακρίβεια. Η γραπτή έκφραση και η κατανόηση ακουστικού υλικού ενισχύονται μέσα από διαδραστικές μεθόδους."
    },
    {
      question: "C Class",
      answer: "Οι μαθητές αποκτούν μεγαλύτερη ευχέρεια στη χρήση της γλώσσας. Δουλεύουν πάνω σε projects, μικρά κείμενα και συζητήσεις που καλλιεργούν τη δημιουργική τους σκέψη."
    },
    {
      question: "D Class",
      answer: "Η γνώση εδραιώνεται και οι μαθητές αρχίζουν να προετοιμάζονται πιο συστηματικά για πιστοποιήσεις. Το μάθημα εστιάζει στην αυτοπεποίθηση στην επικοινωνία και στη σωστή χρήση γραμματικών φαινομένων."
    },
    {
      question: "E Class",
      answer: "Σε αυτό το επίπεδο οι μαθητές βελτιώνουν την κατανόηση πιο απαιτητικών κειμένων και ενισχύουν την ικανότητά τους στη γραπτή και προφορική παραγωγή. Στόχος είναι η μετάβαση στο επίπεδο Β2."
    },
    {
      question: "Lower (B2)",
      answer: "Πλήρης προετοιμασία για τις εξετάσεις επιπέδου Β2 (Cambridge, Michigan, MSU κ.ά.). Οι μαθητές αποκτούν την ικανότητα να επικοινωνούν άνετα σε καθημερινές και ακαδημαϊκές περιστάσεις."
    },
    {
      question: "Advanced (C1)",
      answer: "Οι μαθητές καλλιεργούν υψηλού επιπέδου γλωσσικές δεξιότητες. Εστιάζουμε στην παραγωγή απαιτητικών κειμένων, στην προφορική άνεση και στην κατανόηση αυθεντικού υλικού."
    },
    {
      question: "Proficiency (C2)",
      answer: "Η κορυφή της εκμάθησης Αγγλικών. Οι μαθητές αποκτούν άριστη γνώση της γλώσσας, ικανή για πανεπιστημιακό ή επαγγελματικό περιβάλλον. Στόχος είναι η άριστη επιτυχία στις εξετάσεις και η πλήρης γλωσσική αυτονομία."
    }
  ];

  return (
    <div>
      <Meta />
      <Headerfour />
      <PageHeader
        title="Αγγλικά"
        subtitle="Αγγλικά"
        image='/images/banner/banner2.webp'
      />

      <div className="faq-section padding-top padding-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">
                <h2 className="section-title">Μαθήματα Αγγλικά</h2>
              </div>
              
              <div className="faq-content" data-aos="fade-up" data-aos-duration="800">
                <Accordion items={faqData.slice(0, 3)} language="el" />
                
                <div className="level-divider" style={{ 
                  margin: '40px 0', 
                  textAlign: 'center', 
                  position: 'relative' 
                }}>
                  <div style={{ 
                    height: '1px', 
                    backgroundColor: '#ddd', 
                    width: '100%',
                    position: 'absolute',
                    top: '50%',
                    left: '0'
                  }}></div>
                  <span style={{ 
                    backgroundColor: 'white', 
                    padding: '0 20px', 
                    color: '#666',
                    fontSize: '14px',
                    fontWeight: '500',
                    position: 'relative',
                    zIndex: '1'
                  }}>
                    SENIOR LEVELS
                  </span>
                </div>
                
                <Accordion items={faqData.slice(3, 8)} language="el" />
                
                <div className="level-divider" style={{ 
                  margin: '40px 0', 
                  textAlign: 'center', 
                  position: 'relative' 
                }}>
                  <div style={{ 
                    height: '1px', 
                    backgroundColor: '#ddd', 
                    width: '100%',
                    position: 'absolute',
                    top: '50%',
                    left: '0'
                  }}></div>
                  <span style={{ 
                    backgroundColor: 'white', 
                    padding: '0 20px', 
                    color: '#666',
                    fontSize: '14px',
                    fontWeight: '500',
                    position: 'relative',
                    zIndex: '1'
                  }}>
                    ADVANCED LEVELS
                  </span>
                </div>
                
                <Accordion items={faqData.slice(8)} language="el" />
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

export default EnglishFAQ;
