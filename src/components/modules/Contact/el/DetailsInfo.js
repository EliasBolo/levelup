const DetailsInfo = () => {
  return (
    <div className="contact__info">
                    <h3>Στοιχεία Επικοινωνίας</h3>
                    <div className="contact__info-item">
                        <div className="contact__info-icon">
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="contact__info-content">
                            <h5>Διεύθυνση</h5>
                            <p>Αριστοδήμου 33, Καλαμάτα 24100</p>
                        </div>
                    </div>
                    <div className="contact__info-item">
                        <div className="contact__info-icon">
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className="contact__info-content">
                            <h5>Τηλέφωνο</h5>
                            <p>+30 27210 12345</p>
                        </div>
                    </div>
                    <div className="contact__info-item">
                        <div className="contact__info-icon">
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className="contact__info-content">
                            <h5>Email</h5>
                            <p>info@levelupkalamata.gr</p>
                        </div>
                    </div>
                    <div className="contact__info-item">
                        <div className="contact__info-icon">
                            <i className="fa-solid fa-clock"></i>
                        </div>
                        <div className="contact__info-content">
                            <h5>Ώρες Λειτουργίας</h5>
                            <p>Δευτέρα - Παρασκευή: 9:00π.μ. - 9:00μ.μ.<br/>
                            Σάββατο: 9:00π.μ. - 2:00μ.μ.</p>
                        </div>
                    </div>
                </div>
  )
}

export default DetailsInfo
