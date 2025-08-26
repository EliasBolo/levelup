import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';


const DetailsInfo = () => {
    return (
        <div>
            <div className=" cotact__details">
                <div className="contact__header">
                    <h3>Get In Touch</h3>
                    <p>We believe that every student learns in their own unique way. Contact us to discover how we can help you level up your language skills with our personalized approach to English and German language learning.</p>
                </div>

                <div className="contact__info">
                    <div className="contact__item">
                        <div className="contact__item-thumb">
                            <span><FontAwesomeIcon icon={faLocationDot} /></span>
                        </div>
                        <div className="contact__item-content">
                            <h5>Location</h5>
                            <p className="mb-0">Aristodimou 33, Kalamata</p>
                        </div>
                    </div>
                    <div className="contact__item">
                        <div className="contact__item-thumb">
                            <span><FontAwesomeIcon icon={faPhone} /></span>
                        </div>
                        <div className="contact__item-content">
                            <h5>Contact</h5>
                            <p className="mb-0">(27210) 20 902</p>
                        </div>
                    </div>
                    <div className="contact__item">
                        <div className="contact__item-thumb">
                            <span><FontAwesomeIcon icon={faEnvelope} /></span>
                        </div>
                        <div className="contact__item-content">
                            <h5>Email</h5>
                            <p className="mb-0">levelupkalamata@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact__item">
                        <div className="contact__item-thumb">
                            <span><FontAwesomeIcon icon={faClock} /></span>
                        </div>
                        <div className="contact__item-content">
                            <h5>Hours of operation</h5>
                            <p className="mb-0">Mon-Thu: 15:00 - 21:00</p>
                            <p className="mb-0">Saturday: 10:00 - 13:00</p>
                            <p className="mb-0">Friday & Sunday: Closed</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default DetailsInfo
