import PageHeader from "../components/modules/Home/PageHeader";
import Headerfour from "../components/headers/Headerfour";
import Footerfour from "../components/footers/Footerfour";
import WhoWeAre from "../components/modules/Home/WhoWeAre";
const About = () => {
  return (
    <>
      <Headerfour />
      <PageHeader
        title="About Us"
        subtitle="About Us"
        image='images/bg/home1/1.png'
      />

      <section className="about about--style5 padding-top padding-bottom">
        <div className="container">
          <WhoWeAre />
        </div>
      </section>
      <Footerfour />
    </>
  );
};

export default About;
