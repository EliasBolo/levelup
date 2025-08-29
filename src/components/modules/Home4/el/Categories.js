import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
const categoryListFour= [
    {
        "icon": "https://thetork.com/demos/vue/educax/images/category/home4/1.png",
        "title": "ΓΛΩΣΣΕΣ",
        "description": "Προσφέρουμε ολοκληρωμένα μαθήματα Αγγλικών και Γερμανικών που σχεδιάστηκαν για να βοηθήσουν τους μαθητές να αποκτήσουν άνεση και φυσική επικοινωνία."
    },
    {
        "icon": "https://thetork.com/demos/vue/educax/images/category/home4/2.png",
        "title": "ΜΟΥΣΙΚΗ",
        "description": "Μάθετε γλώσσες μέσα από συναρπαστικές μουσικές δραστηριότητες και τραγούδια που κάνουν το λεξιλόγιο και τη γραμματική φυσικά αξέχαστα και διασκεδαστικά."
    },
    {
        "icon": "https://thetork.com/demos/vue/educax/images/category/home4/3.png",
        "title": "ΧΑΡΟΥΜΕΝΑ",
        "description": "Τα χαρούμενα μαθήματά μας δημιουργούν ένα συμπεριληπτικό περιβάλλον όπου όλοι συμμετέχουν και η μάθηση γίνεται μια διασκεδαστική, κοινή εμπειρία."
    },
    {
        "icon": "https://thetork.com/demos/vue/educax/images/category/home4/4.png",
        "title": "ΠΑΙΧΝΙΔΟΠΟΙΗΣΗ",
        "description": "Διαδραστικά παιχνίδια και εκπαιδευτικά παιχνίδια κάνουν την εκμάθηση γλωσσών συναρπαστική ενώ χτίζουν λεξιλόγιο και επικοινωνιακές δεξιότητες."
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
