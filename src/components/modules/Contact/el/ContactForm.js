import Link from 'next/link'
const ContactForm = () => {
  return (
<div className=" contact__form">
        <h3>Έτοιμοι να ξεκινήσετε;</h3>
        <p>Η διεύθυνση email σας δεν θα δημοσιευθεί. Τα υποχρεωτικά πεδία είναι επισημασμένα.</p>
        <form action="" className="account__form" role="form" aria-label="Φόρμα επικοινωνίας">
            <div className="row g-4">
                <div className="col-lg-12">
                    <div className="input-group">
                        <label htmlFor="account-name" className="form-label">
                            Ονοματεπώνυμο <span aria-label="υποχρεωτικό πεδίο">*</span>
                        </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="account-name" 
                            placeholder="Εισάγετε το πλήρες όνομά σας" 
                            required
                            aria-required="true"
                            aria-describedby="name-valid name-invalid"
                        />
                        <div id="name-valid" className="valid-tooltip">
                            Φαίνεται καλό!
                        </div>
                        <div id="name-invalid" className="invalid-tooltip">
                            Παρακαλώ εισάγετε το πλήρες όνομα
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="input-group">
                        <label htmlFor="account-email" className="form-label">
                            Email <span aria-label="υποχρεωτικό πεδίο">*</span>
                        </label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="account-email" 
                            placeholder="example@email.com" 
                            required
                            aria-required="true"
                            aria-describedby="email-valid email-invalid"
                        />
                        <div id="email-valid" className="valid-tooltip">
                            Αυτό το email είναι έγκυρο
                        </div>
                        <div id="email-invalid" className="invalid-tooltip">
                            Παρακαλώ εισάγετε ένα έγκυρο email
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="input-group">
                        <label htmlFor="account-mobile" className="form-label">
                            Τηλέφωνο <span aria-label="υποχρεωτικό πεδίο">*</span>
                        </label>
                        <input 
                            type="tel" 
                            className="form-control" 
                            id="account-mobile" 
                            placeholder="2721012345" 
                            required
                            aria-required="true"
                            aria-describedby="phone-valid phone-invalid"
                        />
                        <div id="phone-valid" className="valid-tooltip">
                            Αυτός ο αριθμός είναι έγκυρος
                        </div>
                        <div id="phone-invalid" className="invalid-tooltip">
                            Παρακαλώ εισάγετε έναν έγκυρο αριθμό
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="input-group">
                        <label htmlFor="account-desc" className="form-label">
                            Μήνυμα
                        </label>
                        <textarea 
                            id="account-desc" 
                            className="form-control" 
                            rows="4" 
                            placeholder="Γράψτε το μήνυμά σας εδώ..."
                            cols="50"
                            aria-label="Περιεχόμενο μηνύματος"
                        ></textarea>
                    </div>
                </div>
            </div>

            <div className="account__form-passcheck">
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" value="" id="terms-check"/>
                    <label htmlFor="terms-check" className="form-check-label">Αποδέχομαι τους <Link href=""> όρους
                        </Link> και την <Link href=""> πολιτική απορρήτου</Link>.
                    </label>
                </div>
            </div>

            <button type="submit" className="trk-btn trk-btn--rounded trk-btn--secondary1">Αποστολή
                Μηνύματος</button>
        </form>
    </div>

  )
}

export default ContactForm
