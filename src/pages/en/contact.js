import React from "react";
import Preloader from "../../components/headers/Preloader/Preloader";
import Headerfour from "../../components/headers/Headerfour";
import PageHeader from "../../components/modules/Home/PageHeader";
import ContactForm from "../../components/modules/Contact/ContactForm";
import DetailsInfo from "../../components/modules/Contact/DetailsInfo";
import MapLink from "../../components/modules/Contact/MapLink";
import Footerfour from "../../components/footers/Footerfour";

const Contact = () => {
  return (
    <div className="body-wrapper">
      <Preloader className={"preloader--style4"} />
      <Headerfour />
      <PageHeader
        title="Contact Us"
        subtitle="Contact Us"
        image='images/bg/home1/1.png'
      />
      <section className="contact contact--style1 padding-top padding-bottom">
        <div className="container">
          <div className="contact__wrapper">
            <div className="row g-5">
              <div className="col-lg-6">
                <ContactForm />
              </div>
              <div className="col-lg-6">
                <DetailsInfo />
              </div>
            </div>
          </div>
        </div>
      </section>
      <MapLink />
      <Footerfour />
    </div>
  );
};

export default Contact;
