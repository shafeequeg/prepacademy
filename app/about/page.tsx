
import About from "@/app/components/Aboutpage/aboutsection/About";
import Onmission from "@/app/components/Aboutpage/onmission/Onmission";
import Aboutbenefits from "@/app/components//Aboutpage/aboutbenefitsection/Benfitssection";
import Successsection from "@/app/components//Aboutpage/success/Success";
import Aboutreview from "@/app/components//Aboutpage/review/Review";

export default function Home() {
  return (
    <div >
     <About/>
     <Onmission/>
     <Aboutbenefits/>
     <Successsection/>
     <Aboutreview/>

    </div>
  );
}
