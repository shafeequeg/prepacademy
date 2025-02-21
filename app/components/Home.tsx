import Header from "@/app/components/header/Header";
import Banner from "@/app/components/banner/Banner";
import Popularcourse from "@/app/components/popularcourse/Popularcourse";
import Benefits from "@/app/components/benefits/Benefits";
import Savestudytime from "@/app/components/studytime/Studytime";
import Coursevideo from "@/app/components/coursevideo/Coursevideo";
import Blog from "@/app/components/blog/Blog";
import Review from "@/app/components/Review/Review";
import Footer from "@/app/components/footer/Footer";

export default function Home() {
  return (
    <div >
      <Banner />
      <Popularcourse />
      <Benefits />
      <Savestudytime />
      <Coursevideo />
      <Blog />
      <Review />
    </div>
  );
}
