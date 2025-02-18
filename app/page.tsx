import Header from "@/app/components/header/Header";
import Banner from "@/app/components/banner/Banner";
import Popularcourse from "@/app/components/popularcourse/Popularcourse";
import Benefits from "@/app/components/benefits/Benefits";
import Savestudytime from "@/app/components/studytime/Studytime";
import Coursevideo from "@/app/components/coursevideo/Coursevideo";

export default function Home() {
  return (
    <div className="min-h-screen h-auto flex flex-col items-center justify-start p-1 pb-10 gap-1 sm:p-7 font-[family-name:var(--font-geist-sans)] bg-black">
    
      <Header />
      <Banner />
      <Popularcourse />
      <Benefits />
      <Savestudytime />
      <Coursevideo />

    </div>
  );
}
