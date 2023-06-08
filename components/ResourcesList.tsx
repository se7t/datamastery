import Resource from "./Resource";

const ResourcesList = () => {
  return (
    <div className="mt-16 grid grid-cols-1 items-stretch justify-center gap-16 sm:grid-cols-2 lg:grid-cols-3">
      <Resource tags={["E-book", "Business Growth"]}>
        10 Essential Strategies for Business Growth
      </Resource>
      <Resource tags={["Case Study", "Success Story"]}>
        Success Story: How Stellar Solutions Increased Sales by 50%
      </Resource>
      <Resource tags={["Data Analytics", "Tips and Techniques"]}>
        Unlocking Data Analytics: Practical Tips and Techniques
      </Resource>
      <Resource tags={["Webinar", "Digital Transformation"]}>
        Webinar: The Future of Digital Transformation in Business
      </Resource>
      <Resource tags={["Case Study", "Workflow Transformation"]}>
        Case Study: How DataMastery Transformed Global Ventures' Workflow
      </Resource>
      <Resource tags={["Guide", "Social Media Marketing"]}>
        Mastering Social Media Marketing: A Comprehensive Guide
      </Resource>
    </div>
  );
};

export default ResourcesList;
