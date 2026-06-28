import PageHeader from "../components/modules/Home/el/PageHeader";
import Headerfour from "../components/headers/Headerfour";
import Footerfour from "../components/footers/Footerfour";
import OnlineContent from "../components/modules/Online/el/OnlineContent";

const Online = () => {
  return (
    <>
      <Headerfour />
      <PageHeader
        title="Διαδικτυακά"
        subtitle="Διαδικτυακά"
        image="/images/banner/banner2.webp"
      />
      <OnlineContent />
      <Footerfour />
    </>
  );
};

export default Online;
