import Preloader from "../components/headers/Preloader/Preloader";
import Headerfour from "../components/headers/Headerfour";
import Meta from "../components/meta/el/Meta";
import BannerContent from "../components/modules/Home4/el/BannerContent";
import BannerIcon from "../components/modules/Home4/BannerIcon";
import Categories from "../components/modules/Home4/el/Categories";
import About from "../components/modules/Home4/el/About";
import PopularCourse from "../components/modules/Home4/PopularCourse";
import Gallery from "../components/modules/Home3/Gallery";
import Testimonials from "../components/modules/Home4/el/Testimonials";
import Footerfour from "../components/footers/Footerfour";

export default function Home() {
  return (
    <>
      <Meta />
      <Preloader className={"preloader--style4"} />
      <Headerfour />
      <main id="main-content" role="main">
        <BannerContent />
        <BannerIcon />
        <Categories />
        <About />
        <PopularCourse />
        <Gallery />
        <Testimonials />
      </main>
      <Footerfour />
    </>
  );
}
