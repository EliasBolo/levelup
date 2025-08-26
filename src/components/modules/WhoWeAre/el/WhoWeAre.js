import Counter from '../../../base/Counter'

const WhoWeAre = () => {
  return (
    <div>
         <div className="about__wrapper">
        <div className="row g-5 align-items-center">
            <div className="col-lg-7 col-md-8">
                <div className="about__content" data-aos="fade-right" data-aos-duration="800" data-aos-delay="100">
                    <div className="section-header">
                        <div className="subtitle subtitle--style4">
                            <p className="mb-0">ποιοι είμαστε</p>
                        </div>
                        <h2 className="about-title">Στο Level Up πιστεύουμε ότι κάθε μαθητής μαθαίνει με τον δικό του μοναδικό τρόπο.</h2>
                        <p>Για αυτό ακολουθούμε μια εξατομικευμένη προσέγγιση, με ολιγομελή τμήματα που επιτρέπουν σε κάθε παιδί να λάμψει και να εξελιχθεί με τον ρυθμό του.
</p>
                        <p>Η μάθηση γίνεται μέσα από σύγχρονες μεθόδους διδασκαλίας, όπου η τεχνολογία, η παιχνιδοποίηση και η ομαδικότητα συνδυάζονται, δημιουργώντας ένα μάθημα ζωντανό και ενδιαφέρον. Δίνουμε έμφαση στην ουσιαστική κατανόηση της γλώσσας και στην καλλιέργεια δεξιοτήτων με τρόπο δημιουργικό και παιγνιώδη, ώστε τα παιδιά να απολαμβάνουν το ταξίδι της γνώσης από τα πρώτα τους βήματα.</p>
                        <p>Πάνω απ’ όλα, καλλιεργούμε ένα περιβάλλον εμπιστοσύνης και σεβασμού, όπου οι μαθητές αισθάνονται ασφαλείς να εκφραστούν, να κάνουν λάθη, να δοκιμάσουν και να είναι πραγματικά ο εαυτός τους. Έτσι, η ξένη γλώσσα γίνεται όχι απλώς μάθημα, αλλά εμπειρία που τους συνοδεύει σε όλη τους τη ζωή.</p>
                    </div>
                    <div className="about__counter">
                        <div className="about__counter-item">
                            <h3>
                                <Counter parentQuerySelector=".about__counter-item" start={10} end="60" delay={20} />+
                            </h3>
                            <p>Εγγεγραμμένοι Μαθητές</p>
                        </div>
                        <div className="about__counter-item">
                            <h3>
                                <Counter parentQuerySelector=".about__counter-item" start={0}  end="10" delay={10} />
                            </h3>
                            <p>Χρόνια Εμπειρίας</p>
                        </div>
                        <div className="about__counter-item">
                            <h3>
                                <Counter parentQuerySelector=".about__counter-item" start={0} end="100" delay={10} />%
                            </h3>
                            <p>Ποσοστό Ικανοποίησης</p>
                        </div>
                        <div className="about__counter-item">
                            <h3>
                                <Counter parentQuerySelector=".about__counter-item" start={0} end="7" delay={10} />+
                            </h3>
                            <p>Πτυχία</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 col-md-4">
                <div className="about__thumb" data-aos="fade-left" data-aos-duration="800" data-aos-delay="100">
                    <div className="about__thumb-inner">
                        <div className="about__thumb-image">
                            <img src="/images/about/home1/2.png" alt="about-image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    </div>
  )
}

export default WhoWeAre
