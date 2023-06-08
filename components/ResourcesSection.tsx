import ResourcesList from "./ResourcesList";

const ResourcesSection = () => {
  return (
    <section className="container mx-auto my-24 px-8 md:my-32 lg:px-16">
      <div className="mx-auto w-full lg:max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-bold leading-tight">
          Fuel Your Business with Valuable Resources
        </h2>
      </div>

      <ResourcesList />
    </section>
  );
};

export default ResourcesSection;
