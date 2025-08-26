import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
const categoryListFour= [
    {
        "icon": "https://thetork.com/demos/vue/educax/images/category/home4/1.png",
        "title": "LANGUAGES",
        "description": "We offer comprehensive English and German language courses designed to help students achieve fluency with confidence and natural communication."
    },
    {
        "icon": "https://thetork.com/demos/vue/educax/images/category/home4/2.png",
        "title": "MUSIC",
        "description": "Learn languages through engaging musical activities and songs that make vocabulary and grammar naturally memorable, fun and effective for students."
    },
    {
        "icon": "https://thetork.com/demos/vue/educax/images/category/home4/3.png",
        "title": "JOYFULL",
        "description": "Our joyful lessons create an inclusive environment where everyone participates and learning becomes a fun, shared experience for all our students."
    },
    {
        "icon": "https://thetork.com/demos/vue/educax/images/category/home4/4.png",
        "title": "GAMES",
        "description": "Interactive games and educational toys make language learning exciting while building vocabulary and communication skills through engaging activities."
    }
]
const Categories = () => {
  return (
    <div>
        <div className='categories categories--style4 padding-top'>
            <div className='container'>
      <div className="categories__wrapper">
        <div className="row g-4">
        {categoryListFour.map((item,index)=>{
            return(
            <div key={index} className="col-lg-3 col-sm-6">
                <div className="categories__item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                    <div className="categories__item-inner">
                        <img src={item.icon} alt="category icon"/>
                        <div className="categories__item-content">
                            <h5 className="style4">{ item.title }</h5>
                            <p>{item.description}</p>
                            <Link href="/contact" className="trk-btn trk-btn--rounded trk-btn--secondary4">{"Sign Up "}
                                <span><FaArrowRight /></span> </Link>
                        </div>
                    </div>
                </div>
            </div>

            )})}
        </div>
    </div>
    </div>
        </div>
    </div>
  )
}

export default Categories
