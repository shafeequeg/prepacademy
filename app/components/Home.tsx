"use client";
import Banner from "@/app/components/banner/Banner";
import Popularcourse from "@/app/components/popularcourse/Popularcourse";
import Benefits from "@/app/components/benefits/Benefits";
import Savestudytime from "@/app/components/studytime/Studytime";
import Coursevideo from "@/app/components/coursevideo/Coursevideo";
import Blog from "@/app/components/blog/Blog";
import Review from "@/app/components/Review/Review";
import StructuredData from "./seo/SEO";
import { API_URLS } from "./apiconfig/api_urls";
import { useEffect, useState } from "react";
import axiosInstance from "./apiconfig/axios";


interface SeoData {
  meta_description: string;
 
}

export default function Home() {
  const [seo, setSeo] = useState<SeoData | null>(null);

  const fetchSeoData = async () => {
    try {
      const response = await axiosInstance.get(API_URLS.SEO.HOMEMETA);
      console.log(response);
      setSeo(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSeoData();
  }, []);

  return (
    <>
      <StructuredData
        url="https://prepacademy.in"
        name="PrepAcademy"
        description={seo?.meta_description || "India's leading online learning platform for NEET and JEE preparation"}
        logoUrl="https://prepacademy.in/logo.png"
      />
      <div>
        <Banner />
        <Popularcourse />
        <Benefits />
        <Savestudytime />
        <Coursevideo />
        <Blog />
        <Review />
      </div>
    </>
  );
}
