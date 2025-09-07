import Headerfour from "../../components/headers/Headerfour";
import Footerfour from "../../components/footers/Footerfour";
import PageHeader from "../../components/modules/Home/en/PageHeader";
import Meta from "../../components/meta/en/Meta";
import Accordion from "../../components/partials/Accordion";

const EnglishFAQ = () => {
  const faqData = [
    {
      question: "Pre-Junior",
      answer: "The first contact with English is made through games, songs and creative activities. The goal is for children to love the language and feel comfortable using it."
    },
    {
      question: "A Junior",
      answer: "Children begin to acquire basic vocabulary and form simple sentences. Through enjoyable activities, they are encouraged to communicate with confidence."
    },
    {
      question: "B Junior",
      answer: "The vocabulary is enriched and simple grammatical structures are introduced. Children learn to understand and use the language more naturally in everyday life."
    },
    {
      question: "A Class (Senior)",
      answer: "At this level, students deepen their vocabulary and grammar knowledge. Text comprehension and oral production are cultivated through creative exercises."
    },
    {
      question: "B Class (Senior)",
      answer: "Children develop the ability to communicate with greater accuracy. Written expression and listening comprehension are enhanced through interactive methods."
    },
    {
      question: "C Class",
      answer: "Students acquire greater fluency in using the language. They work on projects, short texts and discussions that cultivate their creative thinking."
    },
    {
      question: "D Class",
      answer: "Knowledge is consolidated and students begin to prepare more systematically for certifications. The lesson focuses on confidence in communication and correct use of grammatical structures."
    },
    {
      question: "E Class",
      answer: "At this level, students improve their comprehension of more demanding texts and enhance their ability in written and oral production. The goal is transition to B2 level."
    },
    {
      question: "Lower (B2)",
      answer: "Complete preparation for B2 level exams (Cambridge, Michigan, MSU, etc.). Students acquire the ability to communicate comfortably in everyday and academic situations."
    },
    {
      question: "Advanced (C1)",
      answer: "Students cultivate high-level language skills. We focus on producing demanding texts, oral fluency and understanding authentic material."
    },
    {
      question: "Proficiency (C2)",
      answer: "The pinnacle of English learning. Students acquire excellent knowledge of the language, suitable for university or professional environments. The goal is excellent exam success and complete linguistic autonomy."
    }
  ];

  return (
    <div>
      <Meta />
      <Headerfour />
      <PageHeader
        title="English"
        subtitle="English"
        image='/images/banner/banner2.webp'
      />

      <div className="faq-section padding-top padding-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">
                <h2 className="section-title">English Lessons</h2>
              </div>
              
              <div className="faq-content" data-aos="fade-up" data-aos-duration="800">
                <Accordion items={faqData.slice(0, 3)} language="en" />
                
                <div className="level-divider" style={{ 
                  margin: '40px 0', 
                  textAlign: 'center', 
                  position: 'relative' 
                }}>
                  <div style={{ 
                    height: '1px', 
                    backgroundColor: '#ddd', 
                    width: '100%',
                    position: 'absolute',
                    top: '50%',
                    left: '0'
                  }}></div>
                  <span style={{ 
                    backgroundColor: 'white', 
                    padding: '0 20px', 
                    color: '#666',
                    fontSize: '14px',
                    fontWeight: '500',
                    position: 'relative',
                    zIndex: '1'
                  }}>
                    SENIOR LEVELS
                  </span>
                </div>
                
                <Accordion items={faqData.slice(3, 8)} language="en" />
                
                <div className="level-divider" style={{ 
                  margin: '40px 0', 
                  textAlign: 'center', 
                  position: 'relative' 
                }}>
                  <div style={{ 
                    height: '1px', 
                    backgroundColor: '#ddd', 
                    width: '100%',
                    position: 'absolute',
                    top: '50%',
                    left: '0'
                  }}></div>
                  <span style={{ 
                    backgroundColor: 'white', 
                    padding: '0 20px', 
                    color: '#666',
                    fontSize: '14px',
                    fontWeight: '500',
                    position: 'relative',
                    zIndex: '1'
                  }}>
                    ADVANCED LEVELS
                  </span>
                </div>
                
                <Accordion items={faqData.slice(8)} language="en" />
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

export default EnglishFAQ;
