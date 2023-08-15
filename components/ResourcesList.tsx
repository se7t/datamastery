import Resource from "./Resource";

const ResourcesList = () => {
  return (
    <div className="mt-16 grid grid-cols-1 items-stretch justify-center gap-16 sm:grid-cols-2 lg:grid-cols-3">
      <Resource
        tags={["E-book", "Business Growth"]}
        featuredImage="/blog-essential-strategies-for-business-growth.jpg"
        featuredImageAlt="DataMastery Blog - 10 Essential Strategies for Business Growth"
      >
        10 Essential Strategies for Business Growth
      </Resource>
      <Resource
        tags={["Case Study", "Success Story"]}
        featuredImage="/blog-how-stellar-solutions-increased-sales-by-50-percent.jpg"
        featuredImageAlt="DataMastery Blog - Success Story: How Stellar Solutions Increased Sales by 50%"
      >
        Success Story: How Stellar Solutions Increased Sales by 50%
      </Resource>
      <Resource
        tags={["Data Analytics", "Tips and Techniques"]}
        featuredImage="/blog-unlocking-data-analysis.jpg"
        featuredImageAlt="DataMastery Blog - Unlocking Data Analytics: Practical Tips and Techniques"
      >
        Unlocking Data Analytics: Practical Tips and Techniques
      </Resource>
      <Resource
        tags={["Webinar", "Digital Transformation"]}
        featuredImage="/blog-future-of-digital-transformation-in-business.jpg"
        featuredImageAlt="DataMastery Blog - Webinar: The Future of Digital Transformation in Business"
      >
        Webinar: The Future of Digital Transformation in Business
      </Resource>
      <Resource
        tags={["Case Study", "Workflow Transformation"]}
        featuredImage="/blog-how-datamastery-transformed-global-ventures-workflow.jpg"
        featuredImageAlt="DataMastery Blog - Case Study: How DataMastery Transformed Global Ventures' Workflow"
      >
        Case Study: How DataMastery Transformed Global Ventures' Workflow
      </Resource>
      <Resource
        tags={["Guide", "Social Media Marketing"]}
        featuredImage="/blog-mastering-social-media-marketing.jpg"
        featuredImageAlt="DataMastery Blog - Mastering Social Media Marketing: A Comprehensive Guide"
      >
        Mastering Social Media Marketing: A Comprehensive Guide
      </Resource>
    </div>
  );
};

export default ResourcesList;
