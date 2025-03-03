"use client";

import { useParams } from "next/navigation";
import BlogDetails from "@/app/components/blogs/blogdetails/Blogdetails"; // Adjust the import path as needed

export default function BlogDetailsPage() {
  const params = useParams();
  const id = params.id as string; // Explicitly assert `id` as a string

  if (!id) {
    return <p>Loading...</p>; // Handle cases where `id` is undefined
  }

  return (
    <div>
      <BlogDetails id={id} /> {/* Pass the `id` to the BlogDetails component */}
    </div>
  );
}
