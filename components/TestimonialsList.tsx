import Testimonial from "./Testimonial";

const TestimonialList = () => {
  return (
    <div className="mt-16 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
      <Testimonial
        company="Stellar Solutions"
        name="Sarah Thompson, CEO"
        imageUrl="/placeholder--100x100.jpg"
      >
        DataMastery has truly revolutionized our business. With their advanced
        analytics and seamless task management, we've seen a significant boost
        in productivity and data-driven decision-making. Their expertise and
        commitment to excellence are unmatched.
      </Testimonial>
      <Testimonial
        company="Global Ventures"
        name="Samantha Roberts, Sales Director "
        imageUrl="/placeholder--100x100.jpg"
      >
        Working with DataMastery has been a game-changer for our sales team. The
        insights gained from their advanced analytics have allowed us to
        identify new opportunities and optimize our strategies. Their platform
        has streamlined our workflow, resulting in improved efficiency and
        better collaboration.
      </Testimonial>
      <Testimonial
        company="Dynamic Technologies"
        name="David Chen, IT Manager"
        imageUrl="/placeholder--100x100.jpg"
      >
        DataMastery's integration capabilities have been invaluable for our
        organization. Their solution seamlessly integrates with our existing
        systems, eliminating data silos and providing a unified view of our
        operations. We've experienced enhanced data management and improved
        decision-making across the company.
      </Testimonial>
    </div>
  );
};

export default TestimonialList;
