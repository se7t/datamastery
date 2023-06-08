import TestimonialList from "./TestimonialsList";

const TestimonialsSections = () => {
  return (
    <section className="container mx-auto my-24  px-8 md:my-32 lg:px-16">
      <div className="mx-auto w-full lg:max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-bold leading-tight">
          Client Success Stories: Real Results, Real Impact
        </h2>
        <p className="text-center text-lg font-light leading-8">
          Discover the transformative experiences shared by our clients. Hear
          their success stories and the tangible impact our solutions have made
          on their businesses. From increased efficiency to data-driven
          decision-making, these testimonials highlight the power of
          DataMastery's services in driving real-world results.
        </p>
      </div>

      <TestimonialList />
    </section>
  );
};

export default TestimonialsSections;
