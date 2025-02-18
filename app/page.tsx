import Header from "@/app/components/header/Header";
import Banner from "@/app/components/banner/Banner";


export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen p-1 pb-10 gap-1 sm:p-7 font-[family-name:var(--font-geist-sans)] bg-black">
    <Header />
    <Banner />
  </div>
  
  );
}
