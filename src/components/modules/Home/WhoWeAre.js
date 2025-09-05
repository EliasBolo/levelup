import Counter from '../../base/Counter'

const WhoWeAre = () => {
  return (
    <div>
         <div className="about__wrapper">
        <div className="row g-5 align-items-center">
            <div className="col-lg-7 col-md-8">
                <div className="about__content" data-aos="fade-right" data-aos-duration="800" data-aos-delay="100">
                    <div className="section-header">
                        <div className="subtitle subtitle--style4">
                            <p className="mb-0">who we are</p>
                        </div>
                        <h2 className="about-title">At Level Up we believe that every student learns in their own unique way.</h2>
                        <p>For this reason we follow a personalized approach, with small groups that allow each child to shine and develop at their own pace.</p>
                        <p>Learning happens through modern teaching methods, where technology, gamification and teamwork combine, creating a lively and engaging lesson. We emphasize genuine understanding of the language and skill development in a creative and playful way, so that children enjoy the journey of learning from their first steps.</p>
                        <p>Above all, we cultivate an environment of trust and respect, where students feel safe to express themselves, make mistakes, try and truly be themselves. Thus, the foreign language becomes not just a lesson, but an experience that accompanies them throughout their lives.</p>
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
