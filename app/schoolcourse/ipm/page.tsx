
import IPMcourse from "@/app/components/allcourses/schoolcourse/management/ipm/IPMcourse";
import IPMGladiator from "@/app/components/allcourses/schoolcourse/management/ipm/Gladiators";
import IPMAboutcourse from "@/app/components/allcourses/schoolcourse/management/ipm/Aboutcourse";


export default function Home() {
  return (
    <div >
      
     <IPMcourse/>
     <IPMGladiator/>
     <IPMAboutcourse/>

    </div>
  );
}
