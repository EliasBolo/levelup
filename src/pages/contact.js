import DetailsInfo from "../components/modules/Contact/el/DetailsInfo";
import MapLink from "../components/modules/Contact/MapLink";
import Newsletter from "../components/modules/newsletter/Newsletter";
import Footerfour from "../components/footers/Footerfour";
import PageHeader from "../components/modules/Home/el/PageHeader";
import Headerfour from "../components/headers/Headerfour";
const Contact = () => {

  return (
    <>
      <Headerfour />
      <PageHeader
        title="Επικοινωνία"
        subtitle="Επικοινωνία"
        image='/images/banner/banner1.webp'
      />
      
      <div className="conatct padding-top padding-bottom">
        <div className="container">
          <div className="contact__wrapper">
            <div className="row g-5 scroll-component">
              
                  <div className="col-lg-12" data-aos="fade-up">
                    <DetailsInfo />
                  </div>
               
            </div>
          </div>
        </div>
      </div>
      <MapLink />

      <Footerfour />

    </>
  );
};

export default Contact;
