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
                        <p>Για αυτό ακολουθούμε μια εξατομικευμένη προσέγγιση, με ολιγομελή τμήματα που επιτρέπουν σε κάθε μαθητή να εξελιχθεί με τον ρυθμό του.</p>
                        <p>Η μάθηση γίνεται μέσα από σύγχρονες μεθόδους διδασκαλίας, όπως είναι η μικτή μάθηση, η παιχνιδοποίηση, η ανεστραμμένη τάξη και η μάθηση μέσω πρακτικών επικοινωνιακών δραστηριοτήτων, projects και παιχνίδια ρόλων.  Στόχος είναι η σωστή ανάπτυξη των επικοινωνιακών δεξιοτήτων με τρόπο δημιουργικό σε  ένα περιβάλλον εμπιστοσύνης και σεβασμού, όπου οι μαθητές αισθάνονται ασφαλείς να εκφραστούν, να κάνουν λάθη, να δοκιμάσουν και να είναι πραγματικά ο εαυτός τους.</p>
                        <p> Έτσι, η ξένη γλώσσα γίνεται όχι απλώς μάθημα, αλλά εμπειρία που τους συνοδεύει σε όλη τους τη ζωή.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 col-md-4">
                <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="100">
                    <img src="/images/about/home1/2.webp" alt="about-image" style={{width: '100%', height: 'auto'}}/>
                </div>
            </div>
        </div>
    </div>


    </div>
  )
}

export default WhoWeAre
