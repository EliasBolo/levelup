import Preloader from "../../components/headers/Preloader/Preloader";
import Headerfour from "../../components/headers/Headerfour";
import Footerfour from "../../components/footers/Footerfour";
import Meta from "../../components/meta/el/Meta";

export default function PrivacyPolicy() {
  return (
    <>
      <Meta />
      <style jsx global>{`
        .header-section .menu a,
        .header-section .menu li a,
        .header-section .language-switcher a,
        .header-section .language-switcher span {
          color: #333 !important;
        }
        .header-section .submenu a {
          color: #333 !important;
        }
      `}</style>
      <Preloader className={"preloader--style4"} />
      <Headerfour />
      
      <main id="main-content" role="main">
        <section className="policy-page padding-top padding-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="policy-content">
                  <h1 className="policy-title">Πολιτική Απορρήτου</h1>
                  <p className="policy-updated">Τελευταία ενημέρωση: {new Date().toLocaleDateString('el-GR')}</p>
                  
                  <div className="policy-section">
                    <h2>Πληροφορίες που Συλλέγουμε</h2>
                    <p>
                      Στο Level Up φροντιστήριο ξένων γλωσσών, συλλέγουμε πληροφορίες που μας παρέχετε άμεσα όταν:
                    </p>
                    <ul>
                      <li>Εγγράφεστε στα μαθήματα ξένων γλωσσών μας</li>
                      <li>Επικοινωνείτε μαζί μας μέσω της ιστοσελίδας ή τηλεφώνου</li>
                      <li>Εγγράφεστε στο newsletter μας</li>
                      <li>Συμμετέχετε στα προγράμματα και τις δραστηριότητές μας</li>
                    </ul>
                  </div>

                  <div className="policy-section">
                    <h2>Πώς Χρησιμοποιούμε τις Πληροφορίες σας</h2>
                    <p>Χρησιμοποιούμε τις πληροφορίες που συλλέγουμε για να:</p>
                    <ul>
                      <li>Παρέχουμε και βελτιώνουμε τις υπηρεσίες εκμάθησης γλωσσών μας</li>
                      <li>Επικοινωνούμε μαζί σας σχετικά με τα μαθήματα και την πρόοδό σας</li>
                      <li>Σας στέλνουμε ενημερώσεις για τα προγράμματα και τις εκδηλώσεις μας</li>
                      <li>Απαντάμε στις ερωτήσεις και τα αιτήματά σας</li>
                      <li>Επεξεργαζόμαστε πληρωμές και διαχειριζόμαστε τον λογαριασμό σας</li>
                    </ul>
                  </div>

                  <div className="policy-section">
                    <h2>Κοινοποίηση Πληροφοριών</h2>
                    <p>
                      Δεν πουλάμε, ανταλλάσσουμε ή μεταφέρουμε με άλλον τρόπο τα προσωπικά σας δεδομένα σε τρίτους 
                      χωρίς τη συγκατάθεσή σας, εκτός από όσα περιγράφονται σε αυτή την πολιτική. Μπορούμε να μοιραστούμε τις πληροφορίες σας με:
                    </p>
                    <ul>
                      <li>Παρόχους υπηρεσιών που μας βοηθούν στη λειτουργία της ιστοσελίδας μας και τη διεξαγωγή των επιχειρήσεών μας</li>
                      <li>Νομικές αρχές όταν απαιτείται από το νόμο ή για την προστασία των δικαιωμάτων μας</li>
                    </ul>
                  </div>

                  <div className="policy-section">
                    <h2>Ασφάλεια Δεδομένων</h2>
                    <p>
                      Εφαρμόζουμε κατάλληλα μέτρα ασφαλείας για την προστασία των προσωπικών σας πληροφοριών έναντι 
                      μη εξουσιοδοτημένης πρόσβασης, τροποποίησης, αποκάλυψης ή καταστροφής. Ωστόσο, καμία μέθοδος 
                      μετάδοσης μέσω του διαδικτύου δεν είναι 100% ασφαλής.
                    </p>
                  </div>

                  <div className="policy-section">
                    <h2>Τα Δικαιώματά σας</h2>
                    <p>Έχετε το δικαίωμα να:</p>
                    <ul>
                      <li>Αποκτήσετε πρόσβαση και να ενημερώσετε τις προσωπικές σας πληροφορίες</li>
                      <li>Ζητήσετε τη διαγραφή των προσωπικών σας δεδομένων</li>
                      <li>Αποχωρήσετε από τις επικοινωνίες μάρκετινγκ</li>
                      <li>Υποβάλετε καταγγελία στις αρμόδιες αρχές προστασίας δεδομένων</li>
                    </ul>
                  </div>

                  <div className="policy-section">
                    <h2>Επικοινωνήστε μαζί μας</h2>
                    <p>
                      Εάν έχετε ερωτήσεις σχετικά με αυτή την Πολιτική Απορρήτου, παρακαλούμε επικοινωνήστε μαζί μας στα:
                    </p>
                    <p>
                      <strong>Level Up Φροντιστήριο Ξένων Γλωσσών</strong><br/>
                      Αριστοδήμου 33, Καλαμάτα<br/>
                      Email: levelupkalamata@gmail.com<br/>
                      Τηλέφωνο: (27210) 20 902
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footerfour />
    </>
  );
}
