
import Careercounseling from "@/app/components/allcourses/careercounseling/Careercounseling";
import CareercounselingGladiator from "@/app/components/allcourses/careercounseling/Gladiator";
import CareercounselingAboutcourse from "@/app/components/allcourses/careercounseling/Aboutcourse";


export default function Home() {
  return (
    <div >
      
     <Careercounseling/>
     <CareercounselingGladiator/>
     <CareercounselingAboutcourse/>

    </div>
  );
}
