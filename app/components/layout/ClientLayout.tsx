// app/components/layout/ClientLayout.tsx
"use client";

import { usePathname } from "next/navigation";
// import Header from "@/app/components/header/Header";
// import Footer from "@/app/components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log(pathname);

  const hideHeaderFooter =
    ["/blogdetails", "/CourseEnrollmentPortal"].includes(pathname) ||
    pathname.startsWith("/payment/");

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      {!hideHeaderFooter && <Header />}
      <main className="w-full flex-1">{children}</main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}
