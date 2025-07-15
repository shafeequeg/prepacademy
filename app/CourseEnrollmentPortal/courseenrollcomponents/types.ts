export type WishlistItem = {
  id: string;
  title: string;
  price: string;
  duration: string;
  category: string;
  description: string;
  uuid?: string;
  image?: string;
};
export type CourseData = {
  id?: number;
  title?: string;
  description: string;
  amount: string;
  duration: string;
  course_features: string;
  course_description: string;
  image?: string;
  course?: number;
  section?: number;
  uuid?: string;
};


export type SalesCategory = {
  id?: number;
  category?: string;
};

export type SalesSubjects = {
  id?: number;
  subject_name?: string;
  course?: number;
};

export type SalesSection = {
  id?: number;
  subject?: number;
  subject_name?: string;
  section_name?: string;
};