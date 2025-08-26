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
                            <h2 className="style2-h2">Level Up your Language skills with us</h2>
                            <p>At Level Up we believe that every student learns in their own unique way. For this reason we follow a personalized approach, with small groups that allow each child to shine and develop at their own pace.</p>
                            <ul className="about-list">
                                <li> <img src="/images/icon/svg/3.svg" alt="list-icon"/> Modern methods</li>
                                <li> <img src="/images/icon/svg/3.svg" alt="list-icon"/> Experienced Tutors</li>
                                <li> <img src="/images/icon/svg/3.svg" alt="list-icon"/> Lovely Enviroment</li>
                                <li> <img src="/images/icon/svg/3.svg" alt="list-icon"/> Technology Tools</li>
                            </ul>
                            <Link href="/contact" className="trk-btn trk-btn--rounded trk-btn--secondary4">Sign Up
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
