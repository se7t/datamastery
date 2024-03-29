import Functionality from "./Functionality";

const FunctionalityList = () => {
  return (
    <section className="container mx-auto my-24 flex flex-col gap-24 px-8 md:my-32 lg:px-16 xl:gap-32">
      <Functionality
        direction="normal"
        category="Data Haromonization Solutions"
        title="Data Integration"
        callToAction="Unify Your Data Sources"
        imageUrl="/data-integration.jpg"
      >
        Seamlessly integrate and consolidate data from various sources, enabling
        a comprehensive view of your business operations.
      </Functionality>
      <Functionality
        direction="reverse"
        category="Insights-driven Decision Support"
        title="Advanced Analytics"
        callToAction="Unlock Insights Today"
        imageUrl="/advanced-analytics.jpg"
      >
        Utilize advanced analytical techniques to extract meaningful insights
        from your data, enabling data-driven decision-making and strategy
        development.
      </Functionality>
      <Functionality
        direction="normal"
        category="Efficient Collaboration"
        title="Task Management"
        callToAction="Streamline Your Workflow"
        imageUrl="/task-management.jpg"
      >
        Efficiently manage tasks, assignments, and workflows, ensuring
        streamlined collaboration, improved productivity, and timely project
        completion.
      </Functionality>
    </section>
  );
};

export default FunctionalityList;
