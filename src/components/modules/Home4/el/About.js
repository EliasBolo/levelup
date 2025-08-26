import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
const About = () => {
  return (
    <section className="about about--style4 padding-top padding-bottom">
    <div className="container">
        <div className="about__wrapper">
            <div className="row gx-4 gy-5 align-items-center">
                <div className="col-lg-6">
                    <div className="about__thumb" data-aos="fade-right" data-aos-duration="800">
                        <div className="about__thumb-inner">
                            <div className="about__thumb-image">
                                <img src="/images/about/3.png" alt="about-image"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about__content" data-aos="fade-left" data-aos-duration="800">
                        <div className="about__content-inner">
                            <h2 className="style2-h2">Ανάπτυξε τις γλωσσικές σου δεξιότητες μαζί μας</h2>
                            <p>Στο Level Up πιστεύουμε ότι κάθε μαθητής μαθαίνει με τον δικό του μοναδικό τρόπο. Για αυτό ακολουθούμε μια εξατομικευμένη προσέγγιση, με ολιγομελή τμήματα που επιτρέπουν σε κάθε παιδί να λάμψει και να εξελιχθεί με τον ρυθμό του.</p>
                            <ul className="about-list">
                                <li> <img src="/images/icon/svg/3.svg" alt="list-icon"/> Σύγχρονες μέθοδοι</li>
                                <li> <img src="/images/icon/svg/3.svg" alt="list-icon"/> Έμπειροι Καθηγητές</li>
                                <li> <img src="/images/icon/svg/3.svg" alt="list-icon"/> Φιλικό Περιβάλλον</li>
                                <li> <img src="/images/icon/svg/3.svg" alt="list-icon"/> Τεχνολογικά Εργαλεία</li>
                            </ul>
                            <Link href="/el/contact" className="trk-btn trk-btn--rounded trk-btn--secondary4">Εγγραφή
                                <span><span><FaArrowRight /></span></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="about__shape">
        <span className="about__shape-item"><img src="/images/about/4.png" alt="star"/></span>
    </div>
</section>
  )
}

export default About
