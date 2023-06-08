import Button from "./Button";

const CallToActionSection = () => {
  return (
    <section className="container-fluid my-24 flex flex-col gap-24 bg-slate-50 py-24 md:my-32 md:py-32 xl:gap-32 ">
      <div className="container mx-auto w-full px-8 lg:max-w-5xl lg:px-16">
        <h2 className="mb-4 text-center text-3xl font-bold leading-tight">
          Unlock New Horizons of Business Excellence
        </h2>
        <p className="text-center text-lg font-light leading-8">
          Ignite the spark of innovation and propel your business towards
          extraordinary success. Discover the cutting-edge solutions of
          DataMastery and embrace a future where data-driven insights,
          streamlined processes, and seamless integrations propel you ahead of
          the competition. Sign up for our free trial and unlock the power of
          data-driven growth and streamlined operations.
        </p>
        <div className="mx-auto mt-8 block w-fit">
          <Button type="primary">Start Your Free Trial Now</Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
