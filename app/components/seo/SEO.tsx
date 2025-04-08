// app/components/StructuredData.tsx
import React from 'react';

interface StructuredDataProps {
  url: string;
  name: string;
  description: string;
  logoUrl: string;
}

const StructuredData: React.FC<StructuredDataProps> = ({
  url,
  name,
  description,
  logoUrl,
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: name,
    description: description,
    url: url,
    logo: logoUrl,
    sameAs: [
      'https://www.facebook.com/prepacademy',
      'https://twitter.com/PrepAcademy',
      'https://www.instagram.com/prepacademy/',
      'https://www.youtube.com/prepacademy',
    ],
    offers: {
      '@type': 'Offer',
      category: 'Educational Courses',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1250',
    },
  };

  const courseData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Course',
        position: 1,
        name: 'Complete NEET Preparation',
        description: 'Comprehensive NEET preparation course with expert faculty',
        provider: {
          '@type': 'Organization',
          name: 'PrepAcademy',
          sameAs: url,
        },
      },
      {
        '@type': 'Course',
        position: 2,
        name: 'JEE Main & Advanced Course',
        description: 'Full JEE preparation with practice tests and video lectures',
        provider: {
          '@type': 'Organization',
          name: 'PrepAcademy',
          sameAs: url,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseData) }}
      />
    </>
  );
};

export default StructuredData;