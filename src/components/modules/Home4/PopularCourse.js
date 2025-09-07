import Link from 'next/link'
import { useRouter } from 'next/router';
import coursedata from '../../../api/index4/popular-courses.json'

const PopularCourse = () => {
  const router = useRouter();
  const isGreek = router.pathname.startsWith('/el') || router.asPath.startsWith('/el') || router.locale === 'el' || router.pathname === '/' || router.asPath === '/';
  const backgroundImage = {
    backgroundImage: "url(/images/bg/home4/1.png)",
  }
  
  return (
    <section className='course course--style4 bg--cover' style={backgroundImage}>
      <div className='container aos-init aos-animate' data-aos='fade-up' data-aos-duration="800" data-aos-delay="100">
        <div className="section-header text-center section-header--dark section-header--max20">
          <h2 className="style2-h2">{isGreek ? "Μαθήματα" : "Most Popular Courses"}</h2>
        </div>
        <div className='course__wrapper'>
          <div className="row g-4 justify-content-center">
            {
              coursedata.slice(0, 2).map((item, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className='course__item'>
                    <div className='course__item-inner'>
                      <div className='course__thumb'>
                        <img src={item.thumbnail} alt="course Images" />
                      </div>
                    </div>
                    <div className="course__content">
                      <h5> <Link href={
                        index === 0 ? (isGreek ? "/el/english-faq" : "/en/english-faq") : 
                        index === 1 ? (isGreek ? "/el/german-faq" : "/de/german-faq") : 
                        isGreek ? "/el/courses" : "/en/courses"
                      }>{item.title}</Link> </h5>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularCourse
