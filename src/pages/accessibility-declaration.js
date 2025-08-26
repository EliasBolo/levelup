import Preloader from "../components/headers/Preloader/Preloader";
import Headerfour from "../components/headers/Headerfour";
import Footerfour from "../components/footers/Footerfour";

export default function AccessibilityDeclaration() {
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
                <h1 className="policy-title">Accessibility Declaration</h1>
                <p className="policy-updated">Last updated: {new Date().toLocaleDateString()}</p>
                
                <div className="policy-section">
                  <h2>Our Commitment to Accessibility</h2>
                  <p>
                    Level Up Language School is committed to ensuring digital accessibility for people with disabilities. 
                    We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                  </p>
                </div>

                <div className="policy-section">
                  <h2>Accessibility Standards</h2>
                  <p>
                    We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. 
                    These guidelines explain how to make web content more accessible to people with disabilities, 
                    and user friendly for everyone.
                  </p>
                </div>

                <div className="policy-section">
                  <h2>Measures to Support Accessibility</h2>
                  <p>Level Up Language School takes the following measures to ensure accessibility:</p>
                  <ul>
                    <li>Include accessibility as part of our mission statement</li>
                    <li>Integrate accessibility into our procurement practices</li>
                    <li>Provide continual accessibility training for our staff</li>
                    <li>Assign clear accessibility goals and responsibilities</li>
                    <li>Employ formal accessibility quality assurance methods</li>
                  </ul>
                </div>

                <div className="policy-section">
                  <h2>Conformance Status</h2>
                  <p>
                    We are working to achieve WCAG 2.1 Level AA conformance. "Conformance" means that the content 
                    has been designed to meet the accessibility guidelines. While we strive for full compliance, 
                    some portions of our website may not yet be fully accessible.
                  </p>
                </div>

                <div className="policy-section">
                  <h2>Feedback and Contact Information</h2>
                  <p>
                    We welcome your feedback on the accessibility of our website. Please let us know if you 
                    encounter accessibility barriers on our site:
                  </p>
                  <ul>
                    <li>Email: levelupkalamata@gmail.com</li>
                    <li>Phone: (27210) 20 902</li>
                    <li>Address: Aristodimou 33, Kalamata</li>
                  </ul>
                  <p>
                    We try to respond to feedback within 2 business days and will work with you to provide 
                    accessible content when possible.
                  </p>
                </div>

                <div className="policy-section">
                  <h2>Compatibility with Browsers and Assistive Technology</h2>
                  <p>
                    Our website is designed to be compatible with the following assistive technologies:
                  </p>
                  <ul>
                    <li>Screen readers</li>
                    <li>Voice recognition software</li>
                    <li>Keyboard navigation</li>
                    <li>Switch devices</li>
                  </ul>
                  <p>
                    The website is compatible with recent versions of major browsers including Chrome, 
                    Firefox, Safari, and Edge.
                  </p>
                </div>

                <div className="policy-section">
                  <h2>Technical Specifications</h2>
                  <p>
                    Accessibility of this website relies on the following technologies to work with the 
                    particular combination of web browser and any assistive technologies or plugins installed:
                  </p>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                  </ul>
                </div>

                <div className="policy-section">
                  <h2>Assessment Approach</h2>
                  <p>
                    Level Up Language School assessed the accessibility of this website by:
                  </p>
                  <ul>
                    <li>Self-evaluation</li>
                    <li>External evaluation using accessibility testing tools</li>
                    <li>User testing with people with disabilities</li>
                  </ul>
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
