
import About from "@/app/components/aboutuspage/aboutus/Aboutus";
import Drives from "@/app/components/aboutuspage/drives/Drive";
import Review from "@/app/components/aboutuspage/review/Review";
import Newsandarticle from "@/app/components/aboutuspage/articlenews/Articlenewsection";


export default function Home() {
  return (
    <div >
     <About/>
     <Drives/>
     <Review/>
     <Newsandarticle/>

    </div>
  );
}
