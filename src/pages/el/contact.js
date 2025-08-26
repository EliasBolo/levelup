import ContactForm from "../../components/modules/Contact/el/ContactForm";
import DetailsInfo from "../../components/modules/Contact/el/DetailsInfo";
import MapLink from "../../components/modules/Contact/MapLink";
import Footerfour from "../../components/footers/Footerfour";
import PageHeader from "../../components/modules/Home/el/PageHeader";
import Headerfour from "../../components/headers/Headerfour";
import Meta from "../../components/meta/el/Meta";

const Contact = () => {
  return (
    <>
      <Meta />
      <Headerfour />
      <PageHeader
        title="Επικοινωνία"
        subtitle="Επικοινωνία"
        image='/images/bg/home1/7.png'
      />
      
      <div className="conatct padding-top padding-bottom">
        <div className="container">
          <div className="contact__wrapper">
            <div className="row g-5 scroll-component">
              
                  <div className="col-lg-6" data-aos="fade-right">
                    <DetailsInfo />
                  </div>
                  <div className="col-lg-6" data-aos="fade-left">
                    <ContactForm />
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
