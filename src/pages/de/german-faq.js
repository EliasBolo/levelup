import Headerfour from "../../components/headers/Headerfour";
import Footerfour from "../../components/footers/Footerfour";
import PageHeader from "../../components/modules/Home/de/PageHeader";
import Meta from "../../components/meta/de/Meta";
import Accordion from "../../components/partials/Accordion";

const GermanFAQ = () => {
  const faqData = [
    {
      question: "A1",
      answer: "We learn basic words and phrases, how to introduce ourselves and talk about everyday topics (e.g. family, home, food)."
    },
    {
      question: "A2",
      answer: "We understand simple sentences and can talk about everyday life, shopping, work or travel in a simple way."
    },
    {
      question: "B1",
      answer: "We learn to discuss experiences, plans and dreams. We understand texts in simple language and can narrate them."
    },
    {
      question: "B2",
      answer: "We communicate comfortably on more complex topics. We understand articles, movies or discussions and express opinions clearly."
    },
    {
      question: "C1",
      answer: "We use the language with fluency and accuracy. We understand demanding texts and express ourselves comfortably in studies or work."
    },
    {
      question: "C2",
      answer: "We speak and write with complete fluency, understand everything we hear or read and use the language almost like native speakers."
    }
  ];

  return (
    <div>
      <Meta />
      <Headerfour />
      <PageHeader
        title="German Language FAQ"
        subtitle="Frequently Asked Questions"
        image='/images/banner/banner2.webp'
      />

      <div className="faq-section padding-top padding-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">
                <h2 className="section-title">German Lessons</h2>
              </div>
              
              <div className="faq-content" data-aos="fade-up" data-aos-duration="800">
                <Accordion items={faqData} language="en" />
              </div>
              
              <div className="text-center mt-5">
                <p style={{ fontSize: '16px', color: '#666', marginBottom: '20px' }}>
                  Have more questions? We're here to help!
                </p>
                <a 
                  href="/en/contact" 
                  className="trk-btn trk-btn--rounded trk-btn--primary4"
                  style={{ textDecoration: 'none' }}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footerfour />
    </div>
  );
};

export default GermanFAQ;
