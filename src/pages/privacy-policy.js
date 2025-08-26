import Preloader from "../components/headers/Preloader/Preloader";
import Headerfour from "../components/headers/Headerfour";
import Footerfour from "../components/footers/Footerfour";

export default function PrivacyPolicy() {
  return (
    <>
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
                <h1 className="policy-title">Privacy Policy</h1>
                <p className="policy-updated">Last updated: {new Date().toLocaleDateString()}</p>
                
                <div className="policy-section">
                  <h2>Information We Collect</h2>
                  <p>
                    At Level Up Language School, we collect information that you provide directly to us when you:
                  </p>
                  <ul>
                    <li>Register for our language courses</li>
                    <li>Contact us through our website or phone</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Participate in our programs and activities</li>
                  </ul>
                </div>

                <div className="policy-section">
                  <h2>How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul>
                    <li>Provide and improve our language learning services</li>
                    <li>Communicate with you about your courses and progress</li>
                    <li>Send you updates about our programs and events</li>
                    <li>Respond to your questions and requests</li>
                    <li>Process payments and manage your account</li>
                  </ul>
                </div>

                <div className="policy-section">
                  <h2>Information Sharing</h2>
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except as described in this policy. We may share your information with:
                  </p>
                  <ul>
                    <li>Service providers who assist us in operating our website and conducting our business</li>
                    <li>Legal authorities when required by law or to protect our rights</li>
                  </ul>
                </div>

                <div className="policy-section">
                  <h2>Data Security</h2>
                  <p>
                    We implement appropriate security measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction. However, no method of 
                    transmission over the internet is 100% secure.
                  </p>
                </div>

                <div className="policy-section">
                  <h2>Your Rights</h2>
                  <p>You have the right to:</p>
                  <ul>
                    <li>Access and update your personal information</li>
                    <li>Request deletion of your personal data</li>
                    <li>Opt out of marketing communications</li>
                    <li>File a complaint with relevant data protection authorities</li>
                  </ul>
                </div>

                <div className="policy-section">
                  <h2>Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <p>
                    <strong>Level Up Language School</strong><br/>
                    Aristodimou 33, Kalamata<br/>
                    Email: levelupkalamata@gmail.com<br/>
                    Phone: (27210) 20 902
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
