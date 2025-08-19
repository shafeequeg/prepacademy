export const API_URLS = {
  CONTACT: {
    POST_CONTACT: "api/contact/",
  },
  ALLCOURSE: {
    POST_COURSE: "api/submit-form/",
    GET_COURSE: "api/preferred-programs/",
  },

  COMMONFORM: {
    POST_FORM: "api/trialclass/",
    GET_FORM: "api/trialclass/",
  },

  QUESTIONS: {
    POST_QUESTION: "api/questions/",
    GET_QUESTIONS: "api/questions/",
  },
  FREETRAIL: {
    POST_FREETRAIL: "api/submit-response/",
    GET_FREETRAIL: "api/submit-response/",
  },

  PAYMENT: {
    POST_PAYMENT_COURSE: "api/create-order/",
    
  },

  VERIFY_PAYMENT: {
    POST_VERIFY_PAYMENT_COURSE: "api/verify-payment/",
    
  },

  SALEPAGE_COURSE_CATEGORY:{
    GET_SALEPAGE_COURSE_CATEGORY:"/api/courses/",
  },

  SALEPAGE_COURSE:{
    GET_SALEPAGE_COURSE:"/api/userform/",
  },

  SALEPAGE_COURSE_SUBJECT:{
    GET_SALEPAGE_COURSE_SUBJECTS:"/api/subjects/",
  },

  SALEPAGE_COURSE_SECTION:{
    GET_SALEPAGE_COURSE_SECTION:"/api/sections/",
  },

  USER_DATA: {
    GET_USERDATA: "api/user-responses/",
  },

    FRANCHISE: {
    POST_FRANCHISE: "api/franchises/",
  },

   POSITION: {
    GET_POSITION: "api/positions/",
  },


   CAREERS: {
    POST_CAREERS: "api/careers-application/",
  },

     NOTIFICATION: {
    POST_NOTIFICATION: "api/notifications/",
  },


  USERS: {
    GET_USERS: "api/form/",
    PATCH_USER_BY_UUID: uuid => `api/form/${uuid}/`,

  },

  
  SEO: {
    ABOUTMETA: "api/aboutmeta/",
    BLOGMETA: "api/blogmeta/",
    CONTACTMETA: "api/contactmeta/",
    COURSEMETA: "api/coursemeta/",
    HOMEMETA: "api/homemeta/",
  },
  BLOG: {
    GET_BLOG: "api/blogcard/"
  },

  BLOG_CATEGORY: {
    GET_BLOG_CATEGORY: "api/categories"
  },

  REGISTRATION :{
    POST_REGISTRATION : "api/form/",
    GET_REGISTRATION : "api/form/"

  },

  FIREBASE_NUMBER :{
    POST_FIREBASE_NUMBER : "api/phone-number/"
  },

  CHATBOT :{
    POST_CHATBOT : "api/ask/"
  }
};
