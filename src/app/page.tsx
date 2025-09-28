import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "./component/HeroSection/index";
import CollectionSection from "./component/CollectionSection";
import NewsSection from "./component/NewsSection";

const HomePage = () => {
  return (
    <MainLayout title="VideoBelajar | Homepage">
      <HeroSection />

      <CollectionSection />

      <NewsSection />
    </MainLayout>
  );
};

export default HomePage;
