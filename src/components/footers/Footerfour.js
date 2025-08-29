import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import ScrollToTop from "react-scroll-to-top";
import { useRouter } from 'next/router';
const Footerfour = () => {
  const router = useRouter()
  
  // Check if we're on Greek version - including default root path
  const isGreek = router.pathname.startsWith('/el') || router.asPath.startsWith('/el') || router.locale === 'el' || router.pathname === '/' || router.asPath === '/'

  return (
    <>
      <footer
        className="footer brand-4"
        style={{
          backgroundImage: 'url(images/footer/4.png)',
        }}
      >
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__top footer__top--style1 padding-bottom ">
              <div className="row g-5">
                <div className="col-xl-4 col-md-6">
                  <div className="footer__about">
                    <Link href="" className="footer__about-logo">
                      <img src="/images/logo/color_logo.webp" alt="Logo" style={{width: '200px', filter: 'drop-shadow(-0.5px -0.5px 0 white) drop-shadow(0.5px -0.5px 0 white) drop-shadow(-0.5px 0.5px 0 white) drop-shadow(0.5px 0.5px 0 white)'}} />
                    </Link>
                    <p className="footer__about-moto">
                      {isGreek 
                        ? "Δίνουμε έμφαση στην ουσιαστική κατανόηση της γλώσσας και στην καλλιέργεια δεξιοτήτων με τρόπο δημιουργικό και παιγνιώδη."
                        : "We focus on meaningful language comprehension and skill development in a creative and playful way."
                      }
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6">
                  <div className="footer__links">
                    <div className="footer__links-item">
                      <div className="footer__links-tittle">
                        <h6>{isGreek ? "Επικοινωνήστε μαζί μας" : "Get In Touch"}</h6>
                      </div>
                      <ul className="footer__about-info">
                        <li className="footer__about-item">
                          <div className="footer__about-inner">
                            <img src="/images/footer/1.svg" alt="icon" />
                            <div className="info">
                              <p className="m-0">
                                {isGreek ? "Αριστοδήμου 33, Καλαμάτα" : "Aristodimou 33, Kalamata"}
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="footer__about-item">
                          <div className="footer__about-inner">
                            <img src="/images/footer/2.svg" alt="icon" />
                            <div className="info">
                              {" "}
                              <Link href="mailto:levelupkalamata@gmail.com">
                                levelupkalamata@gmail.com
                              </Link>
                            </div>
                          </div>
                        </li>

                        <li className="footer__about-item">
                          <div className="footer__about-inner">
                            <img src="/images/footer/3.svg" alt="icon" />
                            <div className="info">
                              {" "}
                              <Link href="tel:+00302721020902">(27210) 20 902</Link>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-md-6 col-sm-6">
                  <div className="footer__links">
                    <div className="footer__links-tittle">
                      <h6>{isGreek ? "Χρήσιμοι Σύνδεσμοι" : "Explore Links"}</h6>
                    </div>
                    <div className="footer__links-content">
                      <div className="footer__links-content">
                        <ul className="footer__linklist">
                          <li className="footer__linklist-item">
                            {" "}
                            <Link href={isGreek ? "/el/courses" : "/courses"}>
                              {isGreek ? "Μαθήματα" : "Courses"}
                            </Link>
                          </li>
                          <li className="footer__linklist-item">
                            {" "}
                            <Link href={isGreek ? "/el/about" : "/about"}>
                              {isGreek ? "Σχετικά με εμάς" : "About Us"}
                            </Link>
                          </li>
                          <li className="footer__linklist-item">
                            {" "}
                            <Link href={isGreek ? "/el/contact" : "/contact"}>
                              {isGreek ? "Επικοινωνία" : "Contact Us"}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-12">
                  <div className="footer__links">
                    <div className="footer__links-tittle">
                      <h6>{isGreek ? "Ώρες Λειτουργίας" : "Office Time"}</h6>
                    </div>
                    <div className="footer__links-content">
                      <ul className="footer__linklist">
                        <li className="footer__linklist-item">
                          <p className="m-0">
                            {isGreek ? "Δευτ-Παρ: 15:00μ.μ. - 21:00μ.μ." : "Mon-Fri: 15:00PM - 21.00PM"}
                          </p>
                        </li>
                        <li className="footer__linklist-item">
                          <p className="m-0">
                            {isGreek ? "Σάββατο: 10:00π.μ. - 13:00μ.μ." : "Saturday: 10:00AM - 13.00PM"}
                          </p>
                        </li>
                        <li className="footer__linklist-item">
                          <p className="m-0">
                            {isGreek ? "Κυριακή: Κλειστά" : "Sunday: Closed"}
                          </p>
                        </li>
                      </ul>
                      <ul className="social mt-4">
                        <li className="social__item">
                          <Link
                            href="https://www.facebook.com/levelupkalamata/"
                            className="social__link social__link--rounded4"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaFacebookF />
                          </Link>
                        </li>
                        <li className="social__item">
                          <Link
                            href="https://www.instagram.com/level_up_kalamata/"
                            className="social__link social__link--rounded4"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaInstagram />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__bottom">
              <div className="row">
                <div className="col-lg-12">
                  <div className="footer__end">
                    <div className="footer__end-copyright">
                      <p className=" mb-0">
                        @ 2024 Copyright
                        <Link
                          className="text-white"
                          href="https://themeforest.net/user/thetork/portfolio"
                          target="_blank"
                        >
                          {" "}
                        </Link>
                        | {isGreek ? "Όλα τα δικαιώματα διατηρούνται." : "All Rights Reserved."}{" "}
                      </p>
                    </div>
                    <div>
                      <ul className="footer__end-links">
                        <li className="footer__end-item">
                          <Link href={isGreek ? "/el/privacy-policy" : "/privacy-policy"}>
                            {isGreek ? "Πολιτική Απορρήτου" : "Privacy Policy"}
                          </Link>
                        </li>
                        <li className="footer__end-item">
                          <Link href={isGreek ? "/el/accessibility-declaration" : "/accessibility-declaration"}>
                            {isGreek ? "Δήλωση Προσβασιμότητας" : "Accessibility Declaration"}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTop
        smooth
        height="16px"
        width="14px"
        className="scroll-to-top--home4"
        viewBox="0 0 448 512"
        svgPath="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z"
      />


    </>
  );
};

export default Footerfour;
