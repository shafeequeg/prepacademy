
import KmatCollegecousre from "@/app/components/allcourses/allcoursepage/collegecourse/managment/kmat/Kmat";
import KmatGladiator from "@/app/components/allcourses/allcoursepage/collegecourse/managment/kmat/Kmatgladiators";
import KmatAboutcourse from "@/app/components/allcourses/allcoursepage/collegecourse/managment/kmat/Kmatabout";


export default function Home() {
  return (
    <div >
      
     <KmatCollegecousre/>
     <KmatGladiator/>
     <KmatAboutcourse/>

    </div>
  );
}
