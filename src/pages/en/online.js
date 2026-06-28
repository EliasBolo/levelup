import PageHeader from "../../components/modules/Home/PageHeader";
import Headerfour from "../../components/headers/Headerfour";
import Footerfour from "../../components/footers/Footerfour";
import Meta from "../../components/meta/en/Meta";
import OnlineContent from "../../components/modules/Online/en/OnlineContent";

const Online = () => {
  return (
    <>
      <Meta />
      <Headerfour />
      <PageHeader
        title="Online"
        subtitle="Online"
        image="/images/banner/banner2.webp"
      />
      <OnlineContent />
      <Footerfour />
    </>
  );
};

export default Online;
