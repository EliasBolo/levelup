import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import testimonials from '../../../../api/index4/el/home-testimonials.json';

const Testimonials = () => {

  return (
    <section className='testimonial testimonial--style1 padding-top brand-4' style={{paddingBottom: 0}}>
      <div className='container'>
        <div className="section-header text-center section-header--dark">
          <h2 className='style2-h2'>Τι λένε οι μαθητές μας</h2>
          <p className="style2">Διαβάστε τις εμπειρίες και τις επιτυχίες των μαθητών μας</p>
        </div>
        <div className="testimonial__wrapper">
          <Swiper
            className='testimonial__slider'
            modules={[Pagination, Autoplay, EffectFade]}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={1000}
            grabCursor={true}
            slidesPerView={1}
            effect={'fade'}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial__item">
                  <div className="testimonial__item-inner">
                    <div className="testimonial__item-content">
                      <span>
                        <FontAwesomeIcon icon={faQuoteLeft} />
                      </span>
                      <blockquote className="blockquote">
                        <p>{item.quote}</p>
                      </blockquote>
                      <div className="testimonial__item-author">
                        <p>{item.name}</p>
                        <span>{item.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>

  );
};

export default Testimonials;
