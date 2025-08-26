import Link from 'next/link'
const ContactForm = () => {
  return (
<div className=" contact__form">
        <h3>Ready To Get Started?</h3>
        <p>You email address will not be published. Required fields are marked.</p>
        <form action="" className="account__form" role="form" aria-label="Contact form">
            <div className="row g-4">
                <div className="col-lg-12">
                    <div className="input-group">
                        <label htmlFor="account-name" className="form-label">
                            Full Name <span aria-label="required field">*</span>
                        </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="account-name" 
                            placeholder="Enter your full name" 
                            required
                            aria-required="true"
                            aria-describedby="name-valid name-invalid"
                        />
                        <div id="name-valid" className="valid-tooltip">
                            Looks good!
                        </div>
                        <div id="name-invalid" className="invalid-tooltip">
                            Please enter a full name
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="input-group">
                        <label htmlFor="account-email" className="form-label">
                            Email <span aria-label="required field">*</span>
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
                            This email is valid
                        </div>
                        <div id="email-invalid" className="invalid-tooltip">
                            Please enter a valid email
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="input-group">
                        <label htmlFor="account-mobile" className="form-label">
                            Phone <span aria-label="required field">*</span>
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
                            This mobile is valid
                        </div>
                        <div id="phone-invalid" className="invalid-tooltip">
                            Please enter a valid number
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="input-group">
                        <label htmlFor="account-desc" className="form-label">
                            Message
                        </label>
                        <textarea 
                            id="account-desc" 
                            className="form-control" 
                            rows="4" 
                            placeholder="Write your message here..."
                            cols="50"
                            aria-label="Message content"
                        ></textarea>
                    </div>
                </div>
            </div>

            <div className="account__form-passcheck">
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" value="" id="terms-check"/>
                    <label htmlFor="terms-check" className="form-check-label">Accept <Link href=""> terms
                        </Link> and <Link href=""> privacy
                            policy</Link>.
                    </label>
                </div>
            </div>

            <button type="submit" className="trk-btn trk-btn--rounded trk-btn--secondary1">Send
                Message</button>
        </form>
    </div>

  )
}

export default ContactForm
