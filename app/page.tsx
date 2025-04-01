
import Homepage from "@/app/components/Home";


export default function Home() {
  return (
    <div className="min-h-screen h-auto  gap-1 font-[family-name:var(--font-geist-sans)]  bg-black">
     {/*
     this is the removed style for responsive
     flex flex-col items-center justify-start */}
      <Homepage/>
    </div>  
  );
}
